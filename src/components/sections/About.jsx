import group10 from '../../assets/common/Group 10.svg'
import objects from '../../assets/common/OBJECTS.svg'
import cardBg from '../../assets/common/cardBg.png'


const card = [
  {
    "id": 1,
    "name": "Projects",
    "number": "85+",
    "rotation": "6deg"
  },
  {
    "id": 2,
    "name": "Happy Clients",
    "number": "50+",
    "rotation": "6deg"
  },
  {
    "id": 3,
    "name": "Experts Team",
    "number": "10+",
    "rotation": "6deg"
  }
]


const About = () => {
  return (
    <section className='min-h-screen w-full grid grid-cols-1 lg:grid-cols-2'>

      <div className='flex flex-col justify-between gap-12 px-4 py-12 lg:py-20 lg:pl-20 mt-20 items-center'>
        <h2 className="text-2xl lg:text-3xl font-serif font-normal text-[#252729] text-center tracking-normal">
          A montage of familiar faces and names.
        </h2>
        <p className="text-md lg:text-lg w-[80%] lg:w-[60%] font-sans font-normal text-[#252729] text-center leading-6 mb-12">
          Some stories come from the biggest names.<br />
          Others begin with bold, rising voices.<br />
          We’ve been fortunate to walk alongside both – listening, creating, and building stories that matter.
        </p>

        <div className='w-full flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-0 mt-6 md:mt-10 lg:mt-12'>
          {card.map((item, index) => (
            <div
              key={item.id}
              className='relative flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:z-20 hover:shadow-2xl
                  w-32 h-32 
                  sm:w-36 sm:h-36 
                  md:w-44 md:h-44 
                  lg:w-48 lg:h-48 
                  xl:w-52 xl:h-52'
              style={{
                backgroundImage: `url(${cardBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: `rotate(${item.rotation})`,
                marginLeft: index > 0 ? '-1.5rem' : '0',
              }}
            >
              <h1 className='font-semibold font-[Instrument_Sans] text-3xl md:text-5xl lg:text-6xl text-[#233049] leading-none'>
                {item.number}
              </h1>
              <p className='text-[#F15D2B] font-[Instrument_Sans] text-[clamp(0.75rem,2.5vw+0.25rem,0.875rem)] sm:text-[clamp(0.8125rem,2.25vw+0.25rem,0.9375rem)] md:text-[clamp(0.875rem,2vw+0.25rem,1rem)] lg:text-[clamp(0.9375rem,1.75vw+0.25rem,1.0625rem)] xl:text-[clamp(1rem,1.5vw+0.25rem,1.125rem)] text-center px-2 leading-tight font-medium'>
                {item.name}
              </p>
            </div>
          ))}
        </div>


      </div>
      <div className='grid grid-rows-2 gap-40'>

        <h2 className=" text-2xl md:text-3xl lg:text-4xl mt-12 md:mt-24 mr-12 ml-6 font-[Island_Moments] font-normal leading-14 tracking-normal text-center text-[#0F3255]">
          Every project is more than just a brief -
          <br />
          it&apos;s a new chapter waiting to be written.
          Together, we've crafted tales that inspire, connect, and endure.
        </h2>

        <div className='relative'>
          <div className='absolute -bottom-20 right-0 z-0'>
            <img src={group10} alt="" className='size-[620px]' />
          </div>

          <div className='absolute -bottom-20 right-0 z-0'>
            <img src={objects} alt="" className='size-[400px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About