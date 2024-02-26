import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import RelatedDeals from './pages/CardSection'
import CardSection from './pages/1stCard'
import Top from './pages/Top'
import Top2 from './pages/top2'
import Biulder2 from './pages/Biulder2'
import Biulder3 from './pages/Biulder3'
import Biulder4 from './pages/Biulder4'
import BestChoice from './pages/BestChoice'
import BestValue from './pages/BestValur'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Top/>
    <Top2/>
    <BestChoice/>
    <CardSection/>
    <BestValue/>
    <Biulder2/>
    <Biulder3/>
    <Biulder4/>
    <RelatedDeals/>
    <Footer/>
    </>
  )
}

export default App
