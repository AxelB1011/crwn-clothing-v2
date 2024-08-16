import { initializeApp } from "firebase/app";
import { 
  getAuth, signInWithRedirect, signInWithPopup, 
  GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  signOut, onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth(firsebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  //create a batch to add all objects to this collection in 1 transaction
  const batch = writeBatch(db);
  
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Shop data added successfully");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid); //database, collection name, unique identifier
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt,
        ...additionalInformation,
      });
    } catch(error) {
      console.log('Received the following error while creating the user: ', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);