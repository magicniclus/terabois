import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuration de Firebase pour terabois
const teraboisConfig = {
  apiKey: "AIzaSyCotU40WMv8MymTSJLFe7PPKN9AEV12Q30",
  authDomain: "terabois-275d5.firebaseapp.com",
  databaseURL:
    "https://terabois-275d5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "terabois-275d5",
  storageBucket: "terabois-275d5.appspot.com",
  messagingSenderId: "696961840881",
  appId: "1:696961840881:web:f1113dc97592775bfcdb50",
};

// Configuration de Firebase pour maprimerenov
const maprimerenovConfig = {
  apiKey: "AIzaSyANjQ3xCyjveltI081x5ceT_Xv4cUylsCc",
  authDomain: "maprimerenov-58fdf.firebaseapp.com",
  databaseURL:
    "https://maprimerenov-58fdf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "maprimerenov-58fdf",
  storageBucket: "maprimerenov-58fdf.appspot.com",
  messagingSenderId: "855231284792",
  appId: "1:855231284792:web:e491151c0617175c01c8cd",
};

let teraboisApp;
let maprimerenovApp;

if (typeof window !== "undefined") {
  if (!getApps().length) {
    teraboisApp = initializeApp(teraboisConfig, "Terabois");
    maprimerenovApp = initializeApp(maprimerenovConfig, "Maprimerenov");
  } else {
    teraboisApp = getApp("Terabois");
    maprimerenovApp = getApp("Maprimerenov");
  }
}

const teraboisDatabase = teraboisApp ? getDatabase(teraboisApp) : null;
const maprimerenovDatabase = maprimerenovApp
  ? getFirestore(maprimerenovApp)
  : null;

const maprimerenovAuth = maprimerenovApp ? getAuth(maprimerenovApp) : null;
const teraboisAuth = teraboisApp ? getAuth(teraboisApp) : null;

export {
  maprimerenovDatabase,
  teraboisDatabase,
  maprimerenovAuth,
  teraboisAuth,
};
