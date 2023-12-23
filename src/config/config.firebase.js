import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB1eBn0jJwaELB6In2emEaQKqyfOfjUanY",
  authDomain: "e-com-4f995.firebaseapp.com",
  projectId: "e-com-4f995",
  storageBucket: "e-com-4f995.appspot.com",
  messagingSenderId: "42721003385",
  appId: "1:42721003385:web:84ed70e2a25fa8843e51a8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}