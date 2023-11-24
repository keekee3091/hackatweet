import React from 'react'
import Style from './../../styles/homeElement/HashtagSection.module.css'
import HashItem from './hashItem'

 function HashtagSection() {
  
  const data = [
    {
        content: 'test',
        numberOfTweets: 3
    },
    {
        content: 'test2',
        numberOfTweets: 3
    },
    {
        content: 'test3',
        numberOfTweets: 3
    }
]

const hashtags = data.map((hash, i)=>{
   return <HashItem key={i} {...hash} />
})

  return (
    <div className={Style.HashtagSection}>
        <h3>Trends</h3>
         <div className={Style.hashContainer}>

          {hashtags}
         </div>
    </div>
  )
}

export default HashtagSection