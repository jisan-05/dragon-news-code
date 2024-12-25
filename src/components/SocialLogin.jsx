import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-2">Login With</h2>
            <div className="flex flex-col gap-3">
                <button className="btn"><FaGoogle className="text-orange-600" /> Login With Google</button>
                <button className="btn"> <FaGithub></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;