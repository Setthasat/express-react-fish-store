import React from 'react'
import { FcShipped } from 'react-icons/fc'

function Logo() {
  return (
    <div className='w-screen flex justify-center items-center'>
        <h1 className='flex justify-center items-center text-[10em] text-teal-600 font-mono font-bold'>
            Safe Store 
            <FcShipped className='ml-4 p-6 mt-8'/>
        </h1>
    </div>
  )
}

export default Logo
