import React from "react";
import Style from "./../../styles/homeElement/poster.module.css";
function Poster() {
  return (
    <div className={Style.poster}>
      <h3>Home</h3>
      <div className={Style.content}>
        <input type="text" placeholder="postIt" className={Style.PostInput} />
        <div className={Style.infos}>
          <p>1/ 280</p>
          <button className={Style.tweet}>Tweet</button>
        </div>
      </div>
    </div>
  );
}
export default Poster;
