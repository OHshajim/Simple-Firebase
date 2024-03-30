import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../FireBase/Firebase";
import { useState } from "react";

const LogIn = () => {
    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();
    const GitProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null)
    const handleGoogleLogin = () => {
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const logInUser = result.user;
                console.log(logInUser);
                setUser(logInUser)
            })
            .catch(error => {
                console.log(error.message);
            })
        }

        // for github
        const GithubLogin = () => {
            signInWithPopup(auth, GitProvider)
                .then((result) => {
                    const logInUser = result.user;
                    console.log(logInUser);
                    setUser(logInUser)
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
        
    const handleLogout = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className=" flex flex-col justify-center items-center ">
            {!user ?
                <>
                    <button onClick={handleGoogleLogin} className="btn">Google log in</button>
                    <button onClick={GithubLogin} className="btn">Github log in</button>
                </> :
                <button onClick={handleLogout} className="btn"> log out</button>}
            {user && <div>
                <img src={user.photoURL} alt="user" />
                <h2>Name : {user.displayName}</h2>
                <p>Email : {user.email}</p>
            </div>
            }
        </div>
    );
};

export default LogIn;