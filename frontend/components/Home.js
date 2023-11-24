import styles from '../styles/Home.module.css';
import ProfilSection from './../components/element/ProfilSection'
import FeedSection from './../components/element/FeedSection'
import HashtagSection from './../components/element/HashtagSection'
function Home() {
  return (
    <div>
      <main className={styles.main}>
        <ProfilSection/>
        <FeedSection/>
        <HashtagSection/>
      </main>
    </div>
  );
}

export default Home;
