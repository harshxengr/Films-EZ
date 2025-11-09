import card from '../../assets/common/cardbg.png'
import pin from '../../assets/common/pin.png'
import teamSilhouettes from '../../assets/common/Group2.svg'
import indiagate from '../../assets/common/indiagate.svg'
import vector1 from '../../assets/common/Vector (1).svg'
import vector2 from '../../assets/common/Vector (2).svg'
import vector3 from '../../assets/common/Vector (3).svg'

const AboutTeam = () => {
  return (
    <section className="min-h-screen lg:max-h-screen w-full overflow-hidden">
      <div className="grid grid-rows-2 md:grid-cols-5 gap-6 items-center pt-12 md:py-12">

        <div className="row-span-1 md:col-span-2 relative h-[640px] mx-6 md:mx-16">

          <div className="relative md:left-24 sm:w-[280px] w-[340px] md:w-[420px] lg:w-[480px]">
            <div className="relative shadow-xl rounded-sm -rotate-6 p-6 md:p-8 text-[#3a4a4a] font-serif leading-relaxed"
            style={{
              backgroundImage: `url(${card})`
            }}>
              <p className="text-sm sm:text-base md:text-[17px]">
                Some craft films. Some build brands. Some curate art. We bring it all together -
                a collective of storytellers driven by one belief: every project deserves to be
                more than just a message; it should become a masterpiece.
                <br /><br />
                From first spark to final frame, from raw ideas to timeless visuals -
                we shape stories that stay with you.
              </p>
            </div>

            <img src={pin} alt="clip" className="absolute right-0 -top-12 w-10 md:w-12 rotate-8 opacity-95 pointer-events-none" />
          </div>
          
          <div className="absolute md:-left-10 -bottom-6">
            <img src={indiagate} alt="arch" className='size-80' />
          </div>
        </div>

        <div className="row-span-1 md:col-span-3 relative flex flex-col justify-between items-center text-center h-full md:mr-16 px-4">

          <div className="relative w-full h-full flex justify-center items-center lg:items-end">

            <img src={teamSilhouettes} alt="team silhouettes" className="w-[55%] sm:h-screen/2 md:h-auto drop-shadow-[0_16px_12px_rgba(0,0,0,0.12)]" />
            <div className='absolute left-0 bottom-16 lg:-left-32 lg:-bottom-12 w-1/3 gap-2 flex flex-col items-center justify-center'>
              <img src={vector1} alt="" className='size-20 md:size-30 lg:size-40' />
              <p className='w-full text-[#103255] text-start font-[Island_Moments] text-sm md:text-lg lg:text-xl'>Branding Experts</p>
            </div>
            <div className='absolute right-0 top-24 lg:bottom-44 w-1/4 gap-2 flex flex-col items-center justify-center'>
              <p className='w-full text-[#103255] text-right font-[Island_Moments] text-sm md:text-lg lg:text-xl'>Art Curators</p>
              <img src={vector2} alt="" className='size-20 md:size-30 lg:size-40' />
            </div>
            <div className='absolute top-20 left-6 lg:top-0 lg:left-44 w-1/3 flex flex-col items-center justify-center'>
              <p className='w-full text-[#103255] text-start font-[Island_Moments] text-sm md:text-lg lg:text-xl'>Film Makers</p>
              <img src={vector3} alt="" className='size-20 md:size-30 lg:size-40' />
            </div>
          </div>

          <div className="w-full flex flex-col items-center text-center justify-between gap-6 mt-16">
            <h3 className="text-2xl md:text-3xl font-[Halant] text-[#3d2f2b]">Take a closer look at the stories V bring to life.</h3>
            <a href="#portfolio">
              <button className="inline-block font-[Instrument_Sans] bg-[#ff6a3a] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#ff5a1d] transition cursor-pointer">
                View Portfolio
              </button>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutTeam
