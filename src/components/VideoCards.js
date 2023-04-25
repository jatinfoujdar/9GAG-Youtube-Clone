import React ,{useEffect, useState} from "react";
import { formatViews } from "../utils/formatViews";
import ShimmerCards from "./ShimmerCards";


const VideoCards = ({ info  }) => {
  const [isLoading, setIsLoading] = useState(true);
  // if (!info || !info.snippet) {
  //   return <div>No video information found</div>;
  // }
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  useEffect(() => {
    if (info) {
      setIsLoading(false);
    }
  }, [info]);

  // Define a variable to hold the formatted view count
  const viewCount = formatViews(statistics.viewCount || 0);

  return  (
    <div className="p-2 m-2 w-72 rounded-lg shadow-lg text-white dark:bg-gray-800 dark:border-gray-700">
    {isLoading ? (
      <ShimmerCards />
    ) : (
    <>
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
        {/* Use string interpolation to display the view count */}
      </ul>
      </>
    )}
    </div>
  );
};

export default VideoCards;
