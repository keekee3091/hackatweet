import React from 'react'
import  Style from './../../styles/homeElement/post.module.css'
 function Post(props) {
    console.log(props)
  return (
    <div className={Style.PostContainer}>
            <div className={Style.info}>
                <div className={Style.image}></div>&nbsp;
                <p>{props.fistname}</p>&nbsp;
                <p>{props.username}</p>
            </div>
            <div className={Style.content}>
               <p>{props.tweet}</p>
            </div>
            <div className={Style.likes}>
                <p>100</p>
            </div>
    </div>
  )
}

export default Post
