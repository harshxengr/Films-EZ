import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutTeam from './components/AboutTeam'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

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
