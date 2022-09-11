import React from 'react'

import GoogleButton from 'react-google-button'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"

const style = {
  wrapper: 'flex justify-center'
}

const googleSignIn = () => {
  const provider = new GoogleAuthProvider()

  signInWithRedirect(auth, provider)
}

const Signin = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton type="dark" onClick={googleSignIn}/>
    </div>
  )
}

export default Signin