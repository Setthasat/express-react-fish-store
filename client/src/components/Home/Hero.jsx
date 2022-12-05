import React from 'react'
import Fish from '../../assets/fish.jpg'

function Hero({ promotion }) {
    return (
        <div className='w-screen flex items-center'>
            <div className='flex justify-between items-center ml-[6rem]'>
                <div>
                    <p className='font-mono font-bold text-[2rem] '>Safety fish store</p>
                    <p className='text-[1.5rem] w-[42rem]'>{promotion.promotion}</p>
                    <button className='mt-6 h-auto p-3  shadow-2xl w-[6rem] rounded-lg hover:shadow-inner hover:bg-slate-900 text-white bg-slate-800'>Click me</button>
                </div>
                    <img alt='fish' src={Fish} className='w-[30rem] h-[15rem]'></img>
            </div>
        </div>
    )
}

export default Hero
