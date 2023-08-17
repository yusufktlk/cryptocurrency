import React from 'react'
import FeaturesCard from './FeaturesCard'

function Second() {
  return (
    <div>
        <div className='text-center mt-20'>
            <h1 className='text-4xl font-bold'>CryptoCap Amazin Features</h1>
            <p className='mt-10 mb-16 w-[550px] md:w-full ml-3 md:ml-0'>Explore sensational features to prepare your best investment in cryptocurrency</p>
        </div>

        <div className='flex flex-col md:flex-row ml-20 md:ml-0 '>
        <FeaturesCard 
        featuresImg={"./manage-portfolio-ic.png"}
        cardTitle={"Manage Portfolio"}
        cardText={"Buy and sell populer digital currencies, keep track of them in the one place."}
        />

        <FeaturesCard 
        featuresImg={"./protected-securely-ic.png"}
        cardTitle={"Protected Securely"}
        cardText={"All cash balances are covered by FDIC insurance, up to a maximum of $250,000."}
        />

        <FeaturesCard 
        featuresImg={"./cryptocurrency-ic.png"}
        cardTitle={"Cryptocurrency Variety"}
        cardText={"Supports a variety of the most popular digital currencies and always uptodate."}
        />

        <FeaturesCard 
        featuresImg={"./learn-best-practice-ic.png"}
        cardTitle={"Learn Best Practice"}
        cardText={"Easy to know how to crpytocurrency works and friendly to newbie."}
        />
        </div>

        <div className='flex justify-between mt-5 mx-4 md:mx-0 md:m-28 bg-[#1B062A] rounded-xl p-10  '>
           <div>
                <h1 className='text-2xl font-bold mb-3'>New In Cryptocurrency?</h1>
                <p className='w-2/3'>We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it</p>
            </div>
            <button className='bg-[#0EAF96] rounded-xl w-80 md:w-52 h-12 mt-14 md:mt-5'>Learn & Explore Now</button>
        </div>
        
    </div>
  )
}

export default Second