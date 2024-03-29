import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../FireBase/Firebase";

const LogIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    return (
        <div>
            
        </div>
    );
};

export default LogIn;