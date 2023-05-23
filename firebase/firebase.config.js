import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCotU40WMv8MymTSJLFe7PPKN9AEV12Q30",
  authDomain: "terabois-275d5.firebaseapp.com",
  databaseURL:
    "https://terabois-275d5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "terabois-275d5",
  storageBucket: "terabois-275d5.appspot.com",
  messagingSenderId: "696961840881",
  appId: "1:696961840881:web:f1113dc97592775bfcdb50",
};

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
