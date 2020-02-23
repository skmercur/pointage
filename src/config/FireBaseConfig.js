import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
var config = {
  apiKey: 'AIzaSyA0x29pPnGdDxJTg9BkwgAer13JQw9Lq8A',
  authDomain: 'pointageapp-3bf1f.firebaseapp.com',
  databaseURL: 'https://pointageapp-3bf1f.firebaseio.com',
  projectId: 'pointageapp-3bf1f',
  storageBucket: 'pointageapp-3bf1f.appspot.com',
  messagingSenderId: '242803300074',
  appId: '1:242803300074:web:aa7401e2c5a6cdabf32993',
  measurementId: 'G-0081JXN4MV',
};

// Initialize Firebase
firebase.initializeApp(config);
const storage = firebase.storage();
export {storage, firebase as default};
