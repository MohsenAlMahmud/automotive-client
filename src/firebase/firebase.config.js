// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPkABfWKQI_Gj-h1AAx4jCqAC_33wbgCg",
  authDomain: "automotive-client-f6d82.firebaseapp.com",
  projectId: "automotive-client-f6d82",
  storageBucket: "automotive-client-f6d82.appspot.com",
  messagingSenderId: "628818925964",
  appId: "1:628818925964:web:850b8470948b84d2241ea9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;