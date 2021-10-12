import { useEffect, useState } from "react"
import initiliazeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";
//** onAuthStateChanged == from  web > Manage User > Get the currently signed-in user > copy >  "onAuthStateChanged"  >> past into    >> import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";*/

initiliazeAuthentication();

const useFirebase =()=>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    //**google sign in ============================================ */
    const signInUseGoogle =()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error=>{
            // const errorMessage = error.message;
            setError(error.message);
        })
    }
    //** Github sign in ============================================= */
    const signInUseGithub = () =>{

        signInWithPopup(auth, gitHubProvider)
        .then(result =>{
            const user = result.user;
            console.log(result.user);
            setUser(result.user);
        })
    }
    //** logout ===================================================== */
    const logout =()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    };

    //**use effect =================================================== */
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }
        })
    }, []);

    return {
        user,
        error,
        signInUseGoogle,
        signInUseGithub,
        logout
    }  

}
export default useFirebase;