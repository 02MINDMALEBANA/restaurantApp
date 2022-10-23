import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDSnQ1mUT_kcLSiCq5ViIkFK0eTznoQagY",
//   authDomain: "resturantapp-97a5e.firebaseapp.com",
//   projectId: "resturantapp-97a5e",
//   storageBucket: "resturantapp-97a5e.appspot.com",
//   messagingSenderId: "50830416671",
//   appId: "1:50830416671:web:297e168da5c3931e26ee2a"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAOnVDl78L8QGrzcgNbkvYTQvo3UbK__jU",
  authDomain: "restaurantadmin-7e1b8.firebaseapp.com",
  projectId: "restaurantadmin-7e1b8",
  storageBucket: "restaurantadmin-7e1b8.appspot.com",
  messagingSenderId: "800212711492",
  appId: "1:800212711492:web:21a58e737959f23dade411",
  // measurementId: "G-NWTJGPMVPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore, analytics};