import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBc0Wk5o74QnbuLyN84eYCNp_waazfs9Y0",
    authDomain: "otnatbnb.firebaseapp.com",
    databaseURL: "https://otnatbnb.firebaseio.com",
    projectId: "otnatbnb",
    storageBucket: "otnatbnb.appspot.com",
    messagingSenderId: "667493988832"
  };
  
export const firebaseApp = firebase.initializeApp (config)