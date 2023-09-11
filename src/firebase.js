import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCdop4yT2JHqlRiFEEVnZbs-hzZOLwNHCI",
    authDomain: "instagram-clone-93775.firebaseapp.com",
    projectId: "instagram-clone-93775",
    storageBucket: "instagram-clone-93775.appspot.com",
    messagingSenderId: "275036738356",
    appId: "1:275036738356:web:ae695d3db5ded4c6f6cb61",
    measurementId: "G-EZ59V514H9"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

export {db, auth, storage, functions};