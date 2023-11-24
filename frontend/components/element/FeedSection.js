import React from 'react'
import Style from './../../styles/homeElement/FeedSection.module.css'
import Poster from './../element/Poster'
import Post from './../element/Post'

 function FeedSection() {
  const data = [
    {
       name: "johny sins",
       userName: "@johny",
       content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse quidem eligendi! Aliquam soluta consectetur commodi laborum a reprehenderit voluptates. Eveniet maxime tenetur sequi quos repudiandae consequatur cumque facilis! Voluptatum harum maiores in beatae! Nulla perferendis facilis autem perspiciatis natus.",
       likes: 10,
    },
    {
      name: "aria lee",
      userName: "@ariah",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse quidem eligendi! Aliquam soluta consectetur commodi laborum a reprehenderit voluptates. Eveniet maxime tenetur sequi quos repudiandae consequatur cumque facilis! Voluptatum harum maiores in beatae! Nulla perferendis facilis autem perspiciatis natus.",
      likes: 100,
    }
  ]

const posts = data.map((post)=>{
       return <Post {...post}/>
})

  return (
    <div className={Style.FeedSection}> 
       <Poster/>
        {posts}
    </div>
  )
}

export default FeedSection
