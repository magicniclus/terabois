// import { database } from "./firebase.config";
// import { getDatabase, ref, set } from "firebase/database";

//Get user question from contact form with firebase realtime database
// export function writeUserData(userId, name, surname, email, phone, message) {
//   return new Promise((resolve, reject) => {
//     const db = getDatabase();
//     set(ref(db, "contacts/" + userId), {
//       name: name,
//       surname: surname,
//       email: email,
//       phone: phone,
//       message: message,
//     })
//       .then(() => {
//         resolve("success");
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }
