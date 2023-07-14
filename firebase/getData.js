import { collection, getDocs } from "firebase/firestore";
import { maprimerenovDatabase } from "./firebase.config";

export const getData = async () => {
  if (!maprimerenovDatabase) {
    throw new Error("Firebase not initialized");
  }

  const docRef = collection(maprimerenovDatabase, "primeRenovProspect");

  try {
    const querySnapshot = await getDocs(docRef);
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (err) {
    console.error(err);
  }
};
