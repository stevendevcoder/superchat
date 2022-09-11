import React from 'react'
import { auth } from '../firebase'

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded tr-full max-w-[400px] h-fit`,
  name: 'text-gray-600 text-xs',
  sent: 'bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-full',
  received: 'bg-[#e5e5ea] text-black float-left rounded-full ',
  userInfo: `absolute mt-[-4rem] flex justify-between items-center gap-2`
}

const Message = ({message}) => {
  const messageClass = message.uid === auth.currentUser.uid ?
    `${style.sent}` : `${style.received}`

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <div className={style.userInfo}>
          <img src={message.photo} className='rounded-full w-[20px] h-[20px]' />
          <p className={style.name}>{message.name}</p>
        </div>
        <p>{message.text}</p>
      </div>
    </div>
  )
}

export default Message