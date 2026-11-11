import { Routes, Route } from 'react-router'
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
import Footer from './Components/Footer/Footer'
import News from './Components/News/News'
import Testimonial from './Components/Testimonial/Testimonial'
import Explore from './Components/Explore/Explore'
import BlockPage from './Components/Pages/BlockPage/BlockPage'
import List from './Components/Pages/BlockPage/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Success />
            <Software />
            <Totc />
            <Classroom />
            <Features />
            <Explore />
            <Testimonial />
            <News />
            <Footer />
          </>
        }
      />
      <Route
        path="/block"
        element={<BlockPage />}
      />
    </Routes>
  )
}

export default App
