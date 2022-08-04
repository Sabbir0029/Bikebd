import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const initializefirebase = () => {
  initializeApp(firebaseConfig);
};
export default initializefirebase;
