import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex bg-gray-300 p-3 border rounded-md space-x-5">
            <p className="btn bg-red-600 text-white">Latest</p>
            <Marquee pauseOnHover={true}>
                <div className="space-x-8">
                <Link to="/news" className="underline">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, provident!</Link>
                <Link to="/news" className="underline">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, provident!</Link>
                <Link to="/news" className="underline">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, provident!</Link>
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;