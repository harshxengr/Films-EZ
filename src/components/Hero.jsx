import React from 'react'
import mandala from '../assets/common/Hero Mandala.svg'
import logo from '../assets/common/logo.svg'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-8 lg:px-20 xl:px-28">
      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-center">

        <div className="relative flex items-center justify-start pl-0 lg:pl-8">
          <div className="relative w-full max-w-[450px] aspect-square">

            <img 
              src={mandala} 
              alt="Mandala" 
              className="w-full h-full object-contain"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={logo} 
                alt="✓ Films" 
                className="w-[240px] h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center pr-0 lg:pr-12 xl:pr-20 space-y-12">

          <div className="flex flex-col items-center">
            <h1 
              className="text-5xl lg:text-6xl xl:text-6xl leading-tight italic font-normal"
              style={{ 
                color: '#2e4057', 
                fontFamily: "'Brush Script MT', cursive",
                fontWeight: 200
              }}
            >
              <div className="text-center">Varnan is where stories find
              their voice and form</div>
            </h1>
          </div>

          <div 
            className="text-lg lg:text-1xl xl:text-2xl font-light tracking-[0.1em]"
            style={{ color: '#F15D2B' }}
          >
            Films . Brands . Art
          </div>

          <div className="max-w-[500px]">
            <p 
              className="text-base lg:text-md leading-[1.6] text-center"
              style={{ 
                color: '#333333',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Since 2009, V've been telling stories - stories of people,
              their journeys, and the places that shape them.
              Some begin in polished boardrooms, others in humble
              village squares. But every story starts the same way - by
              listening with intention. V believes it takes trust, patience,
              and an eye for the unseen to capture what truly matters.
              V doesn't just tell stories - V honors them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero