import React from 'react';
import Comment from './Comment';
import CommentList from './CommentList';

const commentsData = [{
    name: "jatin foujdar",
    text: "asdgfdsgdsfghdsgweg",
    replies:[
        {
            name: "jatin foujdar",
            text: "asdgfdsgdsfghdsgweg",
            replies:[
        
            ]
        },{
            name: "jatin foujdar",
            text: "asdgfdsgdsfghdsgweg",
            replies:[
        
            ]
        },
    ]
},
{
    name: "jatin foujdar",
    text: "asdgfdsgdsfghdsgweg",
    replies:[
        {
            name: "jatin foujdar",
            text: "asdgfdsgdsfghdsgweg",
            replies:[
        
            ]
        },
    ]
},
{
    name: "jatin foujdar",
    text: "asdgfdsgdsfghdsgweg",
    replies:[

    ]
},]



const CommentComponents = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
       <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentComponents