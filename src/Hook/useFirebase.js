// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
// import { useEffect, useState } from "react";
// // import initializeAuthentication from "../components/Login/Firebase/firebase.init";
// import initializeAuthentication from "../Firebase/firebase.init"



// initializeAuthentication();



// const useFirebase = () => {
//     const [error, setError] = useState('');
//     const [user, setUser] = useState({});
//     const [isLoading, setIsLoading] = useState(true);

//     const auth = getAuth();
//     const handleGoogleSignIn = () => {
//         setIsLoading(true);
//         const googleProvider = new GoogleAuthProvider();
//         return signInWithPopup(auth, googleProvider)
        
        
//     }
//     useEffect(() => {
//         onAuthStateChanged(auth, user => {
//             if (user) {
//                 setUser(user);
//             }
//             else {
//                 setUser({})
//             }
//         });
//     }, [auth])

//     //Log Out
//     const logOut = () => {
//         signOut(auth)
//             .then((result) => {
//                 setUser({})
//             })
//     }


//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, user => {
//             if (user) {
//                 setUser(user)
//             } else {
//                 setUser({})
//             }
//             setIsLoading(false)
//         }) 
//         return unsubscribe;
//     }, [auth]);

//     return{
//         handleGoogleSignIn,
//         setIsLoading,
//         isLoading,
//         error,
//         logOut,
//         setError,
//         user
//     }
// }
// export default useFirebase;


import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const [authError,setAuthError] = useState('')
    const auth = getAuth();

    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
              
                setAuthError('');
              
            })
            .catch((error) => {
                
                setAuthError(error.message);
           
            })
            .finally(() => setIsLoading(false));
    }


    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
        .finally(() => setIsLoading(false));

    }
        
        













    






    // observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser({})
        }
        setIsLoading(false);
    });
        return () => unsubscribe;
        
    }, [])


    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false));

    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
    }
}
export default useFirebase;
