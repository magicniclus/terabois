import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId, name, lastname, email, phone, zipCode) {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    set(ref(db, "contacts/" + userId), {
      name,
      lastname,
      email,
      phone,
      zipCode,
      userId,
      date: new Date().toLocaleString(),
    })
      .then(() => {
        resolve("success");
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export { writeUserData };
