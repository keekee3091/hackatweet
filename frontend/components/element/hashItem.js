import React from 'react'
import Style from './../../styles/homeElement/hashtag.module.css'
function HashItem(props) {

  return (
    <div className={Style.hashtag}>
      <h4>#{props.content}</h4>
      <p>{props.numberOfTweets}</p>
    </div>
  )
}

export default HashItem
