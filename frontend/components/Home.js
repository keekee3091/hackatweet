import styles from '../styles/Home.module.css';
import ProfilSection from './../components/element/ProfilSection'
import FeedSection from './../components/element/FeedSection'
import HashtagSection from './../components/element/HashtagSection'
import { useEffect, useState } from 'react';
import { initTweets } from '../reducers/tweets';
import { useSelector, useDispatch } from 'react-redux'
import { connectProfile } from '../reducers/user';

function Home() {
  const dispatch = useDispatch()
  const tweets = useSelector((state) => state.Tweets.allTweets)
  const user = useSelector((state) => state.User)

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then((data) => {
        // console.log(data.tweetData)
        dispatch(initTweets(data.tweetData))
      });

    fetch(`http://localhost:3000/users/${user.token}`)
      .then(response => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(connectProfile({ firstname: data.firstname, username: data.username }))
          console.log(user)
        } else {
          console.log('Nope')
          return
        }
      });

  }, [])

  // useEffect(() => {

  // }, [])
  return (
    <div>
      <main className={styles.main}>
        <ProfilSection />
        <FeedSection />
        <HashtagSection />
      </main>
    </div>
  );
}

export default Home;
