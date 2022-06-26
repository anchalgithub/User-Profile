import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
  apiKey: "AIzaSyD0Ayp_yuYFDvOX1Y5y1MiOcUGJCxYzN_0",
  authDomain: "temp-project-afac9.firebaseapp.com",
  projectId: "temp-project-afac9",
  storageBucket: "temp-project-afac9.appspot.com",
  messagingSenderId: "779551379340",
  appId: "1:779551379340:web:bf6f16650b45497d6f50a9"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig) 
}
export default firebase.firestore();