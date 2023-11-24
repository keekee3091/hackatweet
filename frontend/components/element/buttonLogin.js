import React from "react";
import Style from "./../../styles/element/buttonLogin.module.css";

function ButtonLogin(props) {
  let dataReverse = {};

  let associatedStyle = {};

  if (props.content === "Sign up") {
    associatedStyle = {
      color: "white",
      "background-color": "blue",
      border: "none",
    };
    // dataReverse = {
    //   h2: <h2>signupForm</h2>,
    // };
  } else {
    associatedStyle = {
      color: "blue",
      "background-color": "transparent",
      border: "white 1px solid",
    };
    // dataReverse = {
    //   h2: <h2>signinForm</h2>,
    // };
  }

  

  return (
    <button
      onClick={()=> props.change()}
      className={Style.standard}
      style={associatedStyle}
    >
      {props.content}
    </button>
  );
}

export default ButtonLogin;
