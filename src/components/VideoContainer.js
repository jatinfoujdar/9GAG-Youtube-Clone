import React, { useEffect } from 'react'
import { YT_V } from '../utils/config';

const VideoContainer = () => {
  useEffect(()=>{

    getVideos();
  },[])

  const getVideos = async()=>{
    const data = await fetch(YT_V);
    const json = await data.json();
    console.log(json);
  }
  return (
    <div>

    </div>
  )
}

export default VideoContainer