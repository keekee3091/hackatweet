import React from 'react'
import ButtonLogin from './../components/element/buttonLogin'
import Style from './../styles/page/loginPage.module.css'
import SignupForm from './../components/element/SignupForm'
import SigninForm from '../components/element/SigninForm'
import { useState } from 'react'

 function login() {
    const [signupActive, setSignupActive] = useState(false)
    const [signinActive, setSigninActive] = useState(false)

    const changeTempStatusSignup = ()=>{
      setSignupActive(!signupActive)
    }
    const changeTempStatusSignin = ()=>{
      setSigninActive(!signinActive)
    }

  return (
    <div className={Style.loginPage}>
        <div className={Style.visuel}>

        </div>
        <div className={Style.content}>
            <h1>
                see what's <br/> happening
            </h1>

            <h3>
                Join Hackatweet today
            </h3>
             <ButtonLogin content={'Sign up'} change={changeTempStatusSignup} />
             {signupActive && <SignupForm change={changeTempStatusSignup}  />}
            
             <p>Already have an account ?</p>
             <ButtonLogin change={changeTempStatusSignin} content={'Sign in'} />
             {signinActive && <SigninForm change={changeTempStatusSignin}  />}

        </div>
      
    </div>
  )
}

export default login
