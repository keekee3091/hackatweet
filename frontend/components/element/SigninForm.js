import React from "react";
import style from "./../../styles/element/templateForm.module.css";
import { useState } from "react";
import { connectToken } from './../../reducers/user'
import { useSelector, useDispatch } from 'react-redux'


function SigninForm(props) {

  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const user = useSelector((state) => state.User);

  const handleSubmit = () => {
    // const router = useRouter();
    const formdata = {
      username: userName,
      password: password,
    };
    
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formdata)
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.result) {
          console.log(data)
          console.log('nop')
          return
        } else {
          console.log(user)
          console.log('ok')
          dispatch(connectToken(data.token))
          // revoir le redirect next
          window.location.href = 'http://localhost:3001/'
        }
      })
  }
  // el_retardo123
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
