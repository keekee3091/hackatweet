import React from 'react'
import Style from './../../styles/homeElement/FeedSection.module.css'
import Poster from './../element/Poster'
import Post from './../element/Post'
import { useSelector } from 'react-redux'

function FeedSection() {

  const tweets = useSelector((state) => state.Tweets.allTweets)

  const posts = tweets.map((post) => {
    return <Post {...post} />
  })

  return (
    <div className={Style.FeedSection}>
      <Poster />
      {posts}
    </div>
  )
}

export default FeedSection
