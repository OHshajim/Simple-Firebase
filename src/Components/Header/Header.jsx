import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;