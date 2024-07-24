import React from 'react'
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    <div className='lg:w-[30%] mx-auto mt-10 text-center'>
        <p className='text-4xl'>For Better Expeience Download <span className='text-red-500 font-bold'>Tomato</span> App</p>
        <div className='w-full flex flex-col sm:flex-row justify-center items-center mt-4'>
            <img src={assets.play_store} />
            <img src={assets.app_store} />
        </div>
    </div>
  )
}

export default AppDownload