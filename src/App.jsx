import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import AboutTeam from './components/sections/AboutTeam'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'
import ServiceDetail from './components/sections/ServiceDetail'

function App() {
  return (
      <div className='flex flex-col items-center gap-4 md:gap-8 lg:gap-12'>
        <Navbar />
        <Hero />
        <AboutTeam />
        <About />
        <Services/>
        <ServiceDetail/>
        <Portfolio/>
        <Contact />
      </div>
  )
}

export default App
