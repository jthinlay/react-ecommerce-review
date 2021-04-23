import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB8rqebYqEysrvxBtGUmEddsKi9kjWpn1k",
    authDomain: "wearitems-db.firebaseapp.com",
    projectId: "wearitems-db",
    storageBucket: "wearitems-db.appspot.com",
    messagingSenderId: "323789926838",
    appId: "1:323789926838:web:8a1b1b0c19b9e47dd45117"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return; 
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
          await userRef.set({
            displayName,
            email, 
            createdAt,
            ...additionalData
          })
        }catch(error){
          console.log('error: ', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
