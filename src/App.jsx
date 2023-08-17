import './App.css'
import Navbar from './components/Navbar'
import First from './components/First'
import Card from './components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import List from './components/List'
import Highlights from './components/Highlights'
import Second from './components/Second'
import Market from './components/Market'
import Middle from './components/Middle'
import News from './components/News'

function App() {
  
  const [coins, setCoins] = useState([""])
  
  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=4')
    .then((res) => setCoins(res.data.coins))

  }, [])
  
  

  return (
    <>
      <div>
          <Navbar />

          <First />


           <Highlights coins={coins} />

           <Second />

           <Market coins ={coins} />

          <Middle />

          <News />


      </div>
    </>
  )
}

export default App
