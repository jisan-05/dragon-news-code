import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="my-5">
            <h2>Find Us On</h2>
            <div>
                <div className="join flex join-vertical">
                    <button className="btn border border-gray-200 justify-start join-item"> <FaFacebook/> Facebook</button>
                    <button className="btn border border-gray-200 justify-start join-item"> <FaInstagram/> Instagram</button>
                    <button className="btn border border-gray-200 justify-start join-item"> <FaTwitter/> Twitter</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;
