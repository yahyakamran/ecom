import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/config.firebase";
import { useEffect, useState } from "react";

export const useFetch =  (id,collectionName) => {
  const [data , setData] =useState();

  useEffect(() => {
    makeApiCall();
  },[id])

  const makeApiCall = async() => {
    try {
        const docRef = doc(db, `${collectionName}`, `${id}`);
        const docSnap = await getDoc(docRef);
    
        const tempDoc = []
        tempDoc.push({ id: docSnap.id, ...docSnap.data() })
        setData(tempDoc)
      } catch (error) {
        console.log(error)
        return error;
      }
  }

  return {data}
};


