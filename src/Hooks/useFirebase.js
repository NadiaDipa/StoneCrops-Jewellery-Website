import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/firebase.init";


initializeFirebase()
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();

  //login user
  const loginProcess = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // register with email & pass
  const registerProcess = (history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        saveUser(email, name, "POST");
        console.log(user);
        setError("");
        setUserName();
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //set user name
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {});
  };

  //name
  const handleName = (e) => {
    setName(e.target.value);
  };
  //email
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  //password
  const handelPass = (e) => {
    setPassword(e.target.value);
  };

  // sign out
  const logOut = () => {
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if (signedInUser) {
        setUser(signedInUser);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //save user on database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://still-beach-91758.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  //make admin for client

//  admin state
  useEffect(() => {
    fetch(`https://still-beach-91758.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    loginProcess,
    registerProcess,
    handleName,
    handelEmail,
    handelPass,
    user,
    name,
    error,
    setError,
    setUser,
    logOut,
    loading,
    admin,
  };
};

export default useFirebase;
