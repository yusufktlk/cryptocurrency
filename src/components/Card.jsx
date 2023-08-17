import React from 'react'

function Card({coinName, coinTitle,chart,coinImg,coinPrice,coinChange}) {
  return (
    <div className='bg-[#1B062A] w-72 h-44 rounded-lg p-8 mt-20 ml-10 '>
        <div className='flex justify-between mb-2'>
            <img className='w-10 h-10' src={coinImg} />
            <p className='ml-3 mt-2'>{coinTitle}</p>
            <p className='bg-[#C6C7C7] text-black text-sm rounded-md w-16 h-6 text-center mt-2 ml-3 '>{coinName}</p>
            <img className='w-10 h-10  ml-10 ' src='./arrow1.jpg' />
            <hr />
        </div>

        <div className='flex  '>
           <div className='flex flex-col mt-5'>
                <p className='font-bold text-lg text-green-600'>${Number(coinPrice).toFixed(4)}</p>
                <p className='text-lg'>%{coinChange}</p>
           </div>

           <div className='ml-24 mt-3'>
                {/* <img src={chart} className='w-20 h-20 mb-15' /> */}
           </div>
        </div>
    </div>
  )
}

export default Card