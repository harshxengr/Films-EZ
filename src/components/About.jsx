import group10 from '../assets/common/Group 10.svg'
import objects from '../assets/common/OBJECTS.svg'
import cardBg from '../assets/common/cardBg.png'

const card = [{
  "name": "Projects",
  "number": "85+"
},
{
  "name": "Happy Clients",
  "number": "50+"
},
{
  "name": "Experts Team",
  "number": "10+"
}]

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

        <div className='w-full flex justify-center items-center'>
          {card.map((i) => (
            <div
              key={i.id}
              className='rotate-8 size-40 md:size-60 flex flex-col items-center justify-center gap-6 shadow-lg'
              style={{
                backgroundImage: `url(${cardBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: ''
              }}
            >
              <h1 className='font-semibold font-[Instrument_Sans] text-5xl text-[#233049]'>
                {i.number}
              </h1>
              <p className='text-[#F15D2B] font-[Instrument_Sans] text-xl'>
                {i.name}
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