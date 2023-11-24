import React from "react";
import style from "./../../styles/element/templateForm.module.css";
import { useState } from "react";
import Link from "next/link"
// import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux'
function SigninForm(props) {

  const dispatch = useDispatch()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    // const router = useRouter();
    const formdata = {
      username: userName,
      password: password,
    };
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formdata })
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.result) {
          return
        } else {
          dispatch(connectToken(data.token))
          console.log(data)
          // router.push('/');
          window.location.href = 'http://localhost:3001/'
        }
      })
  }

  return (
    <div>
      <div className={style.template}>
        <button className={style.drop} onClick={props.change} >X</button>
        <h2>Connect to Hackatweet</h2>
        <div><input className={style.inputStyle} type="text" value={userName} placeholder="UserName" onChange={(e) => setUserName(e.target.value)} /> </div>
        <div><input className={style.inputStyle} type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> </div>
        <button className={style.validate} onClick={() => handleSubmit()}> Sign in </button>
      </div>
    </div>
  );
}

export default SigninForm;
