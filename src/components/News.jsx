import React from 'react'
import NewsCard from './NewsCard'

function News() {
  return (
    <div>
        <header className='text-center mt-36 mb-24'>
            <h1 className='text-4xl font-bold'> Learn About Cryptocurrency</h1>
            <p className='mt-8 text-lg'>Learn all about cryptocurrency to start investing</p>
        </header>

        <main>
            <div className='flex flex-col md:flex-row'>
                <div className='bg-[#1B062A] md:ml-20 mx-14 md:mx-0 rounded-xl mb-4 pb-6 md:pb-0 mt-5'>
                    <img className='object-fill rounded-xl' src='./crypto6.jpg' />
                    <p className='text-xl text-start ml-5 mt-5'>All about Investing in NFTs and related risks</p>
                    <button className='bg-gray-600 rounded-xl text-xs ml-5 w-24 h-5 mt-5'>CRYPTO BASIC</button>  
                    <p className='ml-5 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> 
                </div> 
                
                <div className='flex md:justify-end mr-8 md:mr-10 ml-8 md:ml-10'>
                    <NewsCard 
                        newsImg={"./crypto7.jpg"}
                        newsTitle={"Lorem"}
                        newsText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
                    />
                    <NewsCard 
                        newsImg={"./crypto8.jpg"}
                        newsTitle={"Lorem"}
                        newsText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
                    />     
                </div>
            </div>

            <div className='md:flex md:flex-row grid grid-cols-2 md:ml-0 justify-center mb-6'>
                <NewsCard 
                    newsImg={"./crypto.jpg"}
                    newsTitle={"Lorem"}
                    newsText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
                />
                <NewsCard 
                    newsImg={"./crypto2.jpg"}
                    newsTitle={"Lorem"}
                    newsText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
                />
                <NewsCard 
                    newsImg={"./crypto3.jpg"}
                    newsTitle={"Lorem"}
                    newsText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
                />
                <NewsCard 
                    newsImg={"./crypto4.jpg"}
                    newsTitle={"Lorem"}
                    newsText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
                />
            </div>
        </main>
    </div>
  )
}

export default News