import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDLySB045J9gLqTxaSCbciapR6Fle_oUB4",
    authDomain: "my-chat-app-45ff7.firebaseapp.com",
    projectId: "my-chat-app-45ff7",
    storageBucket: "my-chat-app-45ff7.appspot.com",
    messagingSenderId: "616170224049",
    appId: "1:616170224049:web:465d90d6b971857987a590"
  };
 let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} 
else{
    app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export {db , auth};
