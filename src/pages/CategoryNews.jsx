import { list } from "postcss";
import { useLoaderData } from "react-router-dom";
import SingleNews from "../components/SingleNews";

const CategoryNews = () => {
    const {data} = useLoaderData();
    console.log(data)
    return (
        <div>
            <div>
                <h2>Dragon News Home</h2>
                <p>{data.length} News found is this category</p>
                <div>
                    {
                        data.map(singleNews => <SingleNews key={singleNews._id} news={singleNews}></SingleNews> )
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryNews;