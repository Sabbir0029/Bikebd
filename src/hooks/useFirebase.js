import { useEffect, useState } from "react";
import initializefirebase from "../Pages/Authentication/Firebaes/initializefirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

initializefirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // Registered Funtion
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password,)
      .then((user) => {
        const newUser = {email, displayName: name}
        setUser(newUser);
        navigate("/");
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  // Google Login Funtion
  const googleLoginUser = (location,navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };
  // Login Funtion
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  //   On Auth State Changed
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, []);

  // LogOut Funtion
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return { user, isLoading, registerUser, loginUser, logOut, googleLoginUser };
};
export default useFirebase;
