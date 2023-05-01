import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentComponents from './CommentComponents';

const WatchPage = () => {
const [searchParams, setSearchParams] = useSearchParams();
 console.log(searchParams.get("v"));

const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[]);
  return (
    <div className='flex flex-col'>
    <div>
      <iframe className='p-14 ' width="1200" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v")}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <CommentComponents/>
    </div>
  )
}

export default WatchPage