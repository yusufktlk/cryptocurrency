import React from 'react'
import List from './List'

function Market({coins}) {
  return (
    <div>
        <div className='md:m-10'>
            <h1 className='text-3xl font-bold mb-5 text-center'>Market Update</h1>
            <p className='mb-8 text-center'>Cryptocurrency Categories</p>

            <div className='flex flex-col md:flex-row md:justify-between md:ml-16 '>
               <div>
                    <a className='ml-1 md:ml-5 bg-[#19042D] p-2 rounded-lg' >Popular</a> 
                    <a className='ml-2 md:ml-5 bg-[#19042D] p-2 rounded-lg'>Metaverse</a> 
                    <a className='ml-2 md:ml-5 bg-[#19042D] p-2 rounded-lg'>Entartainment</a> 
                    <a className='ml-2 md:ml-5 bg-[#19042D] p-2 rounded-lg'>Energy</a> 
                    <a className='ml- 2md:ml-5 bg-[#19042D] p-2 rounded-lg'>Gaming</a> 
                    <a className='ml-2 md:ml-5 bg-[#19042D] p-2 rounded-lg'>Music</a>
                    <a className='ml-2 md:ml-5 bg-[#19042D] p-2 rounded-lg'>See All 12+</a>
               </div>
               <input className='rounded h-8 text-left mt-6 md:mt-0 ml-20 md:ml-0 w- bg-[#11001F] shadow-sm shadow-white mr-12' placeholder='Search Coin '/>
            </div>
        </div>
        
        <List coins ={coins} />

    </div>
  )
}

export default Market