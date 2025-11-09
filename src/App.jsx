import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import AboutTeam from './components/sections/AboutTeam'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'

function App() {
  return (
      <div >
        <Navbar />
        <Hero />
        <AboutTeam />
        <About />
        <Services/>
        <Portfolio/>
        <Contact />
      </div>
  )
}

export default App
