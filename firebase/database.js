import { teraboisDatabase, maprimerenovDatabase } from "./firebase.config";
import { set, ref } from "firebase/database";

//TeraBois

function writeUserData(
  userId,
  name,
  lastname,
  email,
  phone,
  zipCode,
  prestation
) {
  return new Promise((resolve, reject) => {
    set(ref(teraboisDatabase, "contacts/" + userId), {
      name,
      lastname,
      email,
      phone,
      zipCode,
      userId,
      prestation,
      date: new Date().toLocaleString(),
    })
      .then(() => {
        resolve("success");
        new Date().toLocaleString();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const subscribeAtNewsLetter = (email, userId) => {
  return new Promise((resolve, reject) => {
    set(ref(teraboisDatabase, "newsLetter/" + userId), {
      email,
      date: new Date().toLocaleString(),
    })
      .then(() => {
        resolve("success");
        new Date().toLocaleString();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { writeUserData, subscribeAtNewsLetter };

//Maprimerenov
