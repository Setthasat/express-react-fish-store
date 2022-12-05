import React from 'react'
import SingleCard from './SingleCard'

function CardContainer({fishes, setIndexArray, indexArray, setPrevIndex, prevIndex}) {

  function increaseIndexArray() {
    setPrevIndex(prevIndex + 4)
    setIndexArray(indexArray + 4)
  }

  function decreaseIndexArray() {
    if (prevIndex > 0){
      setPrevIndex(prevIndex - 4)
      setIndexArray(indexArray - 4)
    }
    
  }

  return (
    <div className='w-auto h-auto bg-red-200 mt-8 flex justify-center items-center'>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={decreaseIndexArray}
      > prev </button>
      <div className=''>
          {fishes.length >= 0 ? (
            <div className='grid grid-cols-4 gap-4'>
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
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={increaseIndexArray}
        > next </button>
    </div>
  )
}

export default CardContainer
