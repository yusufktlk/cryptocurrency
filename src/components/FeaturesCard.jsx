import React from 'react'

function FeaturesCard({featuresImg, cardTitle, cardText}) {
  return (
    <div className='flex flex-col text-center md:text-left bg-[#1B062A] m-8 rounded-xl  w-96 h-80 md:h-96 justify-start p-7'>
        <img src={featuresImg} className='w-24 h-24 mb-5 ml-28 md:ml-0'  />
        <h1 className='text-bold text-2xl mb-5'>{cardTitle}</h1>
        <p>{cardText}</p>
        <button className='text-[#0EAF96] text-center md:text-left mt-5'>See Explained</button>
    </div>
  )
}

export default FeaturesCard