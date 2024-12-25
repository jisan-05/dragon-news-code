
import { FaStar, FaEye } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SingleNews = ( props = {} ) => {
    const {news} = props || {};
  return (
    <div className="card bg-base-100 shadow-xl p-4 mt-5">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={news.author.img}
          alt="Author"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-sm font-medium">{news.author.name}</h3>
          <p className="text-xs text-gray-500">
            {new Date(news.author.published_date).toDateString()}
          </p>
        </div>
      </div>
      <img
        src={news.thumbnail_url}
        alt="Thumbnail"
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{news.title}</h2>
      <p className="text-sm text-gray-600 mb-2">
        {news.details.slice(0, 500)}...
        <span className="text-blue-500 cursor-pointer"> Read More</span>
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaStar className="text-yellow-500" />
          <span className="text-sm font-medium">{news.rating.number}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEye className="text-gray-500" />
          <span className="text-sm text-gray-600">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
