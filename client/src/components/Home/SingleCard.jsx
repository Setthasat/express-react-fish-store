import React from 'react'

function SingleCard({fish}) {
  return (
    <div className='bg-white w-[20rem] p-2 mt-2 m-6 h-[25rem] shadow-2xl rounded-lg grid-flow-col-dense items-center justify-center'>
      {fish.name}
      {fish.type}
    </div>
  )
}

export default SingleCard
