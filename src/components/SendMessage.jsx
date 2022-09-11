import React, { useState } from 'react'

import { db, auth } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

import { MdInsertEmoticon, MdSend } from 'react-icons/md'
import { BiMicrophone } from 'react-icons/bi'

const style = {
  container: `w-full max-w-[728] px-4 h-[60px] flex justify-between items-center gap-[20px] text-xl absolute bottom-0`,
  input: `rounded-3xl w-full py-3 px-6 bg-gray-800 text-white outline-none`,
  sendBtn: `flex justify-center items-center p-3 rounded-full bg-black cursor-pointer hover:bg-lime-700`
}

const SendMessage = ({scroll}) => {
  const [text, setText] = useState('');

  const uploadMsg = async (e) => {
    e.preventDefault()
    if(text !== ''){
      const {uid, displayName} = auth.currentUser;
      await addDoc(collection(db, 'messages'), {
        text: text,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
      })
      setText('')
      scroll.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <form className={style.container}>
      <MdInsertEmoticon size={35} />
      <input 
        className={style.input} 
        onChange={(e) => setText(e.target.value)} 
        value={text} 
        type="text" 
        placeholder='Escribe un mensaje...' 
      />
      <BiMicrophone size={35} /> 
      <button className={style.sendBtn} type='submit' onClick={uploadMsg}>
        <MdSend size={35} color='#fff'/>  
      </button>
    </form>
  )
}

export default SendMessage