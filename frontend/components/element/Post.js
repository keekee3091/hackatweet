import React from 'react'
import  Style from './../../styles/homeElement/post.module.css'
 function Post(props) {
    console.log(props)
  return (
    <div className={Style.PostContainer}>
            <div className={Style.info}>
                <div className={Style.image}></div>&nbsp;
                <p>{props.name}</p>&nbsp;
                <p>{props.userName}</p>
            </div>
            <div className={Style.content}>
               <p>{props.content}</p>
            </div>
            <div className={Style.likes}>
                <p>{props.likes}</p>

            </div>
    </div>
  )
}

export default Post
