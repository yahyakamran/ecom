import { db } from "../config/config.firebase.js";
import { collection, getDocs } from "firebase/firestore";


export const fetchDataFromApi = async (collectionName) => {

  try {
    const docRef = collection(db, `${collectionName}`);
    const docSnap = await getDocs(docRef);

    const tempDoc = []
    docSnap.forEach(doc => {
      tempDoc.push({ id: doc.id, ...doc.data() })
    })

    return tempDoc;

  } catch (error) {
    console.log(error)
    return error;
  }
};
