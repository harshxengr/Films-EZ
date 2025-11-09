import mandala from '../../assets/common/Hero Mandala.svg'
import logo from '../../assets/common/logo.svg'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 2xl:px-32 py-12 md:py-16 lg:py-20 mt-8 md:mt-8 lg:mt-12">
      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

        <div className="relative flex items-center justify-center lg:justify-start order-1 lg:order-1">
          <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] aspect-square">

            <img
              src={mandala}
              alt="Mandala"
              className="w-full h-full object-contain animate-[spin_60s_linear_infinite]"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={logo}
                alt="✓ Films"
                className="w-40 sm:w-48 md:w-56 lg:w-60 xl:w-72 h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 order-2 lg:order-2 px-4 sm:px-6">

          <div className="flex flex-col items-center w-full">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center leading-tight sm:leading-tight md:leading-snug italic font-normal max-w-full"
              style={{
                color: '#2e4057',
                fontFamily: "'Brush Script MT', cursive",
                fontWeight: 200
              }}
            >
              <span className="block">Varnan is where stories find</span>
              <span className="block">their voice and form</span>
            </h1>
          </div>

          <div
            className="w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-center font-[Halant] tracking-wide sm:tracking-wider md:tracking-widest"
            style={{ color: '#F15D2B' }}
          >
            Films . Brands . Art
          </div>

          <div className="max-w-full sm:max-w-[450px] md:max-w-[500px] lg:max-w-[520px] xl:max-w-[550px]">
            <p
              className="text-sm md:text-base lg:text-md xl:text-lg leading-relaxed sm:leading-[1.6] md:leading-[1.7] text-center font-[Instrument_Sans]"
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
