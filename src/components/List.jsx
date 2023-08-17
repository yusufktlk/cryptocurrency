import axios from "axios"
import { useState,useEffect } from "react"

function List() {

  const [coins, setCoins] = useState([""])
  
  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10')
    .then((res) => setCoins(res.data.coins))

  }, [])

  return (
    <div className='bg-[#14061e] w-10/12 m-auto rounded-xl pb-3 '>
      <div className="m-12 underline grid grid-cols-5 pt-5">
        <p>NO</p>
        <p>NAME</p>
        <p className="ml-28 md:ml-[265px]">CHANGE</p>
        <p className="ml-28 md:ml-64 w-24">LAST PRICE</p>
      </div>
              {coins.map((coin,key) => {
                return (
                <div key={key} className='justify-between m-10 grid grid-cols-5 items-center gap-x-12'>
                  <h1 className=" text-3xl">{coin.rank}</h1>
                  <h1 className="" >{coin.name} | {coin.symbol} </h1>
                  <img className='w-10 ' src={coin.icon}  /> 
                  <h1 className='font-bold'>{Number(coin.price).toFixed(4)}</h1>
                  <h1 className='' >{coin.priceChange1d}%</h1>
                  
                </div>
                )
              })}

              
    </div>
  )
}

export default List