import React from 'react'

function NewsCard({newsImg,newsTitle,newsText}) {
  return (
    <div className=' w-[250px] md:w-80 bg-[#150a20] m-5  rounded-xl '>
        <img src={newsImg} className='rounded-xl h-64'/>
        <button className='bg-gray-600 rounded-xl text-xs ml-5 w-24 h-5 mt-8'>CRYPTO BASIC</button>
        <h1 className='text-2xl font-bold mb-5 m-5'>{newsTitle}</h1>
        <p className='break-words m-5'>{newsText}</p>
    </div>
  )
}

export default NewsCard