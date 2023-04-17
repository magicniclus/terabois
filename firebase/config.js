import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDKXbMzxxLcZ4YdqfYd3szgaW6nFKtymwA",
//   authDomain: "adsventure-66776.firebaseapp.com",
//   projectId: "adsventure-66776",
//   storageBucket: "adsventure-66776.appspot.com",
//   messagingSenderId: "565103293150",
//   appId: "1:565103293150:web:9d20355e1ba8a47170c84f",
//   databaseURL:
//     "https://adsventure-66776-default-rtdb.europe-west1.firebasedatabase.app",
// };

// Initialize Firebase
let app;

// Vérifie si une application Firebase existe déjà
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Utilise l'application Firebase existante
}

const database = getDatabase(app);

export { database };
