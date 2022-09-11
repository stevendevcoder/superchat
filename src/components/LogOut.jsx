import React from 'react'
import { auth } from '../firebase'

const style = {
  button: 'bg-gray-200 px-4 py-2 hover:bg-gray-100'
}

const LogOut = () => {

  return (
    <button className={style.button} onClick={() => auth.signOut()}>
      Cerrar Sesion
      </button>
  )
}

export default LogOut