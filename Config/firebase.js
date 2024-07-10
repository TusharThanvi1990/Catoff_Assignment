
import * as firebase from "firebase/app" ; require('firebase/auth');
import {getAuth} from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5e6wRIPngj8T1C5tz6MuITbewhZOGwSI",
  authDomain: "catoff-assignment.firebaseapp.com",
  projectId: "catoff-assignment",
  storageBucket: "catoff-assignment.appspot.com",
  messagingSenderId: "71000356749",
  appId: "1:71000356749:web:07e52d4a45c212a779efc4"
};

// Initialize Firebase

let app;

// if(firebase.app.length === 0){
  app = firebase.initializeApp(firebaseConfig);
//  }
// else{
//   app = firebase.app()
// }

const auth = getAuth(app)

export {auth}