import React from 'react';
import Comment from './Comment';

const commentsData = [{
    name: "jatin foujdar",
    text: "asdgfdsgdsfghdsgweg",
    replies:[]
}]


const CommentComponents = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>CommentComponents</h1>
        <Comment data={commentsData[0]}/>
    </div>
  )
}

export default CommentComponents