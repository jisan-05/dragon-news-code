import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div></div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-4">
                <div className="flex items-center">
                <img src={userIcon} alt="" />
                </div>
                <button className="btn btn-neutral">Login</button>
            </div>
        </div>
    );
};

export default Navbar;
