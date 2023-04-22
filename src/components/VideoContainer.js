import React, { useEffect, useState } from 'react'
import { YT_V } from '../utils/config';
import VideoCards from './VideoCards';

const VideoContainer = () => {
  const [videos , setVideos] = useState([]);
  useEffect(()=>{

    getVideos();
  },[])

  const getVideos = async()=>{
    const data = await fetch(YT_V);
    const json = await data.json();
    console.log(json);
    setVideos(json.items)
  }
  return (
    <div>
   <VideoCards info={videos[0]}/>      
    </div>
  )
}

export default VideoContainer