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

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch(); 
    objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj)
    });
      return await batch.commit();
  }

 export const convertCollectionsSnapshotToMap  = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
    const {title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items 
    }
  });
  
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}
  
firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) =>  {
  const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
    }, reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

GoogleProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export default firebase; 
