import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './Components/Layout/Hero/Hero'
import Success from './Components/Success/Success'
import Software from './Components/Software/Software'
import Totc from './Components/Totc/Totc'
import Classroom from './Components/Classroom/Classroom'
import Features from './Components/Features/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Success />
      <Software />
      <Totc />
      <Classroom />
      <Features />
    </>
  )
}

export default App
