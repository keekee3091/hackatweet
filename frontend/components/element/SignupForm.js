import React from 'react'
import style from './../../styles/element/templateForm.module.css'
import { useState } from 'react'

function TemplateForm(props) {
       const [firstName, setFirstName] = useState('')
       const [userName, setUserName] = useState('')
       const [password, setPassword] = useState('')

  return (
    <div className={style.template}>
        <button className={style.drop} onClick={props.change} >X</button>
        <h2>Create your Hackatweet account</h2>
        <div><input className={style.inputStyle} type="text" value={firstName} placeholder="FirstName" onChange={(e)=>setFirstName(e.target.value)} /> </div>
        <div><input className={style.inputStyle} type="text" value={userName} placeholder="UserName" onChange={(e)=>setUserName(e.target.value)} /> </div>
        <div><input className={style.inputStyle} type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)} /> </div>
        <button className={style.validate}> Sign up </button>
    </div>
  )
}

export default TemplateForm
