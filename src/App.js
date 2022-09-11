import React from 'react'
import Navbar from './components/Navbar'
import Chat from './components/Chat'

import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl relative`,
}

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className='w-screen h-screen bg-gray-800'>
      <div className={style.appContainer}>
        <section className={style.sectionContainer}>
          <Navbar/>

          {user ?
            <Chat />  
            :
            <h1 className='text-2xl text-center m-auto'>Inicia sesion para poder chatear con tus amigos :) !!</h1>
          }

          
        </section>
      </div>
    </div>
  );
}

export default App;
