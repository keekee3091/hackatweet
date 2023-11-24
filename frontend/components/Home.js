import styles from '../styles/Home.module.css';
import ProfilSection from './../components/element/ProfilSection'
import FeedSection from './../components/element/FeedSection'
import HashtagSection from './../components/element/HashtagSection'
import { useEffect, useState } from 'react';
import { initTweets } from '../reducers/tweets';
import { useSelector, useDispatch } from 'react-redux'

function Home() {
    const dispatch = useDispatch()
    const tweets = useSelector((state)=> state.Tweets.allTweets)

    useEffect(()=>{
       fetch('http://localhost:3000/tweets')
       .then(response => response.json())
       .then((data)=>{
          // console.log(data.tweetData)
          dispatch(initTweets(data.tweetData))
          console.log(tweets)
       })
    }, [])
  return (
    <div>
      <main className={styles.main}>
        <ProfilSection/>
        <FeedSection />
        <HashtagSection/>
      </main>
    </div>
  );
}

export default Home;
