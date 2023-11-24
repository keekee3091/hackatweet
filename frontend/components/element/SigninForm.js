import React from "react";
import style from "./../../styles/element/templateForm.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
function SigninForm(props) {
  const userToken = useSelector()
  console.log()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div>
      <div className={style.template}>
        <button className={style.drop} onClick={props.change} >X</button>
        <h2>Connect to Hackatweet</h2>
        <div><input className={style.inputStyle} type="text" value={userName} placeholder="UserName" onChange={(e)=>setUserName(e.target.value)} /> </div>
        <div><input className={style.inputStyle} type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /> </div>
        <button className={style.validate}> Sign in </button>
    </div>
      </div>
  );
}

export default SigninForm;
