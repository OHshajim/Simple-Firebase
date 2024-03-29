import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../FireBase/Firebase";

const LogIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth,provider)
        .then((result)=>{
            const user = result.user ;
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <div className="text-center">
            <button onClick={handleGoogleLogin} className="btn">Google log in</button>
        </div>
    );
};

export default LogIn;