import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-inputs/form-input.component';
import './sign-in-form.styles.scss'
import Button from '../button/button.component';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            setCurrentUser(user);

        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password': 
                    alert("Incorrect Password");
                    break;
                case 'auth/user-not-found':  
                    alert("Email not registered");
                    break
                default:
                    console.log(error);
            }

        };
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});

    };

    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(user);
    //     }
    // }, []);
    const signInWithGoogle = async () => {
        // const response = await signInWithGooglePopup();
        const {user} = await signInWithGooglePopup();
        // const userDocRef = await createUserDocumentFromAuth(user);
        createUserDocumentFromAuth(user);
        setCurrentUser(user);
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>  

                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;