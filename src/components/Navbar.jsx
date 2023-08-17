
function Navbar() {
  return (
    <div className='flex justify-between mt-8'>
        <h1 className='font-bold text-lg md:text-2xl ml-2 md:ml-16 '>Crypto<span className='text-[#0EAF96]'>Cap</span></h1>
        
        <div className='text-center mt-1 md:ml-20  '>
            <a className='text-[#0EAF96] md:mr-6'>Home</a>
            <a className='ml-3 md:ml-5'>Businesses</a>
            <a className='ml-3 md:ml-8'>Trade</a>
            <a className='ml-3 md:ml-12'>Market</a>
            <a className='ml-3 md:ml-14'>Learn</a>
        </div>

        <div className='mr-2 md:mr-16 flex justify-end'>
            <img className="w-5 md:w-6 h-5 md:h-6 mt-2" src='./world.png' />
            <select className='bg-[#11001F]  rounded-2xl m-2 mb-3'>
                <option>EN</option>
                <option>RUS</option>
                <option>TR</option>
            </select>
            <button className='bg-[#0EAF96] md:p-3 w-14 md:w-24 rounded-xl'>LOGIN</button>
        </div>
    </div>
  )
}

export default Navbar