import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../FireBase/Firebase";
import { useState } from "react";

const LogIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const logInUser = result.user;
                console.log(logInUser);
                setUser(logInUser)
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleLogout=()=>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className=" flex flex-col justify-center items-center ">
           { !user? <button onClick={handleGoogleLogin} className="btn">log in</button>:
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