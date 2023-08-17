import React from 'react'

function Middle() {
  return (
    <div className='flex flex-col text-center md:text-left md:flex-row justify-between md:px-20 px-8 '>
        <div id='left' className='mt-32 md:mt-64 md:ml-16'>
            <h1 className='text-4xl mb-5'>How To Get Started</h1>
            <p>Simple and easy way to start your investment in cryptocurrency</p>
            <button className='bg-[#0EAF96] mt-14 p-3 rounded-lg'>Get Started</button>
        </div>

        <div id='right' className='mt-20 md:mt-28 md:mr-14 '>
            <div id='card' className='flex bg-[#1B062A] p-3 rounded-xl'>
                <img src='create-account-ic.png' className='w-20 h-20 ' />
                    <div className='ml-5'>
                        <h1 className='text-3xl'>Create Your Account</h1>
                        <p className='mt-3'>Your account and personal identify are guaranteed safe.</p>
                    </div>
            </div>

            <div id='card' className='flex mt-14 bg-[#1B062A] p-3 rounded-xl' >
                <img src='bank-account-ic.png' className='w-20 h-20' />
                    <div className='ml-5'>
                        <h1 className='text-3xl'>Connect Bank Account</h1>
                        <p className='mt-3'>Connect the bank account to start transactions.</p>
                    </div>
            </div>

            <div id='card' className='flex mt-14 bg-[#1B062A] p-3 rounded-xl'>
                <img src='build-portfolio-ic.png' className='w-20 h-20' />
                    <div className='ml-5'>
                        <h1 className='text-3xl'>Start Build Portfolio</h1>
                        <p className='mt-3'>Buy and sell popular currencies and keep track of them.</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Middle