import Card from './Card'

function Highlights({coins}) {
  return (
    <div className='flex flex-col md:flex-row ml-24 '>
              {coins.map((coin,key) => {
                return (
                  <div key={key}>
                    <Card 
                    coinImg={coin.icon}
                    coinTitle={coin.symbol}
                    coinName={coin.name}
                    coinPrice={coin.price}
                    coinChange={coin.priceChange1d}
                    />
                  </div>
                )
              })}
    </div>
  )
}

export default Highlights