import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhb3Bpo6ki4sfcE5L89kdbB6Chj6_LsWk",
  authDomain: "crwn-clothing-db-2fa23.firebaseapp.com",
  projectId: "crwn-clothing-db-2fa23",
  storageBucket: "crwn-clothing-db-2fa23.appspot.com",
  messagingSenderId: "837923392367",
  appId: "1:837923392367:web:9ec0e74bc9f9119924b69a"
};

// Initialize Firebase
const firsebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth(firsebaseApp);
// export const signInWithGooglePopup = () => {
//   return signInWithPopup(auth, provider);
// };
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid); //database, collection name, unique identifier
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {displayName, email, createdAt});
    } catch(error) {
      console.log('Received the following error while creating the user: ', error.message);
    }
  }
  return userDocRef;
}