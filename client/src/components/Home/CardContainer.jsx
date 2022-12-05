import React from 'react'
import SingleCard from './SingleCard'

function CardContainer({fishes}) {
  return (
    <div className='w-auto h-auto bg-red-200 mt-8'>
      {fishes.length >= 0 ? (
        <div className='grid grid-cols-6 gap-4'>
          {fishes.map((fish, _) => {
            return (
              <SingleCard fish={fish} key={fish._id} />
            );
          })}
        </div>
      ) : (
        <p> Fish is now empty</p>
      )}
    </div>
  )
}

export default CardContainer
