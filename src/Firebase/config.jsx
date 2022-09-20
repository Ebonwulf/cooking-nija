import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCrnha3YmSAPYjj0Sx6l5HPBP7nXoXDqmM',
  authDomain: 'ebonwolf-s-cooking-ninja.firebaseapp.com',
  projectId: 'ebonwolf-s-cooking-ninja',
  storageBucket: 'ebonwolf-s-cooking-ninja.appspot.com',
  messagingSenderId: '375921192470',
  appId: '1:375921192470:web:8fba3e5239a43f53a28f37',
};

//initialize firebase
firebase.initializeApp(firebaseConfig);
//initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore };
