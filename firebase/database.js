import { database } from "./firebase.config";
import { set, ref } from "firebase/database";

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
    set(ref(database, "contacts/" + userId), {
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
export { writeUserData };
