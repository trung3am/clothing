import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyC_AVVMt6CPsp6ePi1-v71cYVdig5UVo4c",
    authDomain: "crwnclth.firebaseapp.com",
    projectId: "crwnclth",
    storageBucket: "crwnclth.appspot.com",
    messagingSenderId: "882639844553",
    appId: "1:882639844553:web:32ad1dd6915bc7fc090918",
    measurementId: "G-C1C0JX94P1"
};

export const createUserProfileDocument = async(userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);

        }

    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters ({prompt: 'select_account'});
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;