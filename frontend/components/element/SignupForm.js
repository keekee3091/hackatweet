import React from 'react'
import style from './../../styles/element/templateForm.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connectToken } from '../../reducers/user'

function TemplateForm(props) {
  const [firstName, setFirstName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = () => {
    const formdata = {
      firstname: firstName,
      username: userName,
      password: password,
    };
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formdata)
    })
      .then(response => response.json())
      .then((data) => {
        if (!data.result) {
          console.log('oulah', data)
          return
        } else {
          dispatch(connectToken(data.token))
          // router.push('/');
          window.location.href = 'http://localhost:3001/'
        }
      })
  }

  return (
    <div className={style.template}>
      <button className={style.drop} onClick={props.change} >X</button>
      <h2>Create your Hackatweet account</h2>
      <div><input className={style.inputStyle} type="text" value={firstName} placeholder="FirstName" onChange={(e) => setFirstName(e.target.value)} /> </div>
      <div><input className={style.inputStyle} type="text" value={userName} placeholder="UserName" onChange={(e) => setUserName(e.target.value)} /> </div>
      <div><input className={style.inputStyle} type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} /> </div>
      <button className={style.validate} onClick={() => handleSubmit()}> Sign up </button>
    </div>
  )
}

export default TemplateForm
