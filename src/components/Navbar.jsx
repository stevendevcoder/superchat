import React from 'react'
import Signin from './Signin'
import LogOut from './LogOut'

import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AiFillMessage } from 'react-icons/ai'

const style = {
  nav: 'w-full h-20 bg-gray-800 flex justify-between items-center p-4',
  h1: 'text-[25px] text-3xl text-white'
}

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.nav}>
      <div className='flex gap-4'>
        <AiFillMessage size={40} color='#ffff'/>
        <h1 className={style.h1}>Superchat</h1>
      </div>

      {user ? <LogOut /> : <Signin />}

    </div>
  )
}

export default Navbar