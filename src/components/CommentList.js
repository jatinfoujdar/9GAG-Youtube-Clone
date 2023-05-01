import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
  return (
    <>
         {comments.map((comment,index)=>{
    return <Comment key={index
    } data={comment}/>
 })}
   </>
  )
}

export default CommentList