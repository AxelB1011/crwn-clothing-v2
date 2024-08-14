import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//actual value we want to share/access across components
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});


//actual component (can think of it as a wrapper that will wrap around any other component that needs the values)
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            };
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return (
    <UserContext.Provider value={value}> 
        {children} 
    </UserContext.Provider>
    );
};

