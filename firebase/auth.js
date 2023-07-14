import { maprimerenovAuth } from "./firebase.config";

export const getUser = () => {
  if (!maprimerenovAuth) {
    throw new Error("Firebase not initialized");
  }

  return new Promise((resolve, reject) => {
    const unsubscribe = maprimerenovAuth.onAuthStateChanged((user) => {
      unsubscribe(); // Dès qu'on obtient l'utilisateur, on annule l'écoute
      if (user) {
        resolve(user);
      } else {
        reject("No user logged in");
      }
    }, reject);
  });
};

export const signOut = async () => {
  if (!maprimerenovAuth) {
    throw new Error("Firebase not initialized");
  }

  try {
    await maprimerenovAuth.signOut();
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};

export const getUserName = async () => {
  if (!maprimerenovAuth) {
    throw new Error("Firebase not initialized");
  }

  try {
    const user = await getUser(); // Assuming getUser is the function you provided above
    if (!user.displayName) {
      throw new Error("No displayName found for user");
    }

    // Split the displayName into words and return the first one
    const firstName = user.displayName.split(" ")[0];
    return firstName;
  } catch (error) {
    console.error("Error getting user name: ", error);
  }
};
