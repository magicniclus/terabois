import {
  collection,
  getDocs,
  doc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
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

export const getDataByPhone = async (phone) => {
  if (!maprimerenovDatabase) {
    throw new Error("Firebase not initialized");
  }

  const docRef = collection(maprimerenovDatabase, "primeRenovProspect");

  try {
    const q = query(docRef, where("phone", "==", phone));
    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => {
      const docData = doc.data();

      if (docData.createAt && typeof docData.createAt.toDate === "function") {
        docData.createAt = docData.createAt.toDate().toISOString();
      }

      if (docData.date && typeof docData.date.toDate === "function") {
        docData.date = docData.date.toDate().toISOString();
      }

      return docData;
    });

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const updateCommentByPhone = async (phone, newComment) => {
  if (!maprimerenovDatabase) {
    throw new Error("Firebase not initialized");
  }

  const docRef = collection(maprimerenovDatabase, "primeRenovProspect");
  const q = query(docRef, where("phone", "==", phone));

  try {
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docId = querySnapshot.docs[0].id;
      const docToUpdate = doc(
        maprimerenovDatabase,
        "primeRenovProspect",
        docId
      );
      await updateDoc(docToUpdate, { comment: newComment });
      console.log("Phone number updated successfully");
    } else {
      console.log("No document with the specified date found");
    }
  } catch (err) {
    console.error(err);
  }
};
