import card from '../../assets/common/cardbg.png'
import pin from '../../assets/common/pin.png'
import teamSilhouettes from '../../assets/common/Group2.svg'
import indiagate from '../../assets/common/indiagate.svg'
import vector1 from '../../assets/common/Vector (1).svg'
import vector2 from '../../assets/common/Vector (2).svg'
import vector3 from '../../assets/common/Vector (3).svg'

const AboutTeam = () => {
  return (
    <section className="min-h-screen w-full overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center py-12">

        <div className="col-span-1 md:col-span-2 relative h-[640px] mx-16">

          <div className="absolute top-0 left-20 transform -rotate-8 shadow-xl">
            <img src={card} alt="paper note" className="w-[380px] h-[300px]" />
            <div className="absolute top-0 left-0 p-8  text-[#3a4a4a] leading-7 md:text-sm lg:text-md font-serif">
              <p>
                Some craft films. Some build brands. Some curate art. We bring it all together - a collective of storytellers driven by one belief: every project deserves to be more than just a message; it should become a masterpiece.
                <br />
                From first spark to final frame, from raw ideas to timeless visuals - we shape stories that stay with you.
              </p>
            </div>

            <img src={pin} alt="clip" className="absolute -right-3 -top-5 w-10 opacity-90 rotate-8" />
          </div>

          <div className="absolute -left-10 -bottom-6">
            <img src={indiagate} alt="arch" className='size-80' />
          </div>
        </div>

        <div className="col-span-3 relative flex flex-col justify-between items-center text-center h-full mr-16">

          <div className="relative w-full h-full flex justify-center items-end">

            <img src={teamSilhouettes} alt="team silhouettes" className="w-[55%] h-auto drop-shadow-[0_16px_12px_rgba(0,0,0,0.12)]" />
            <div className='absolute -left-32 -bottom-12 w-1/3 gap-2 flex flex-col items-center justify-center'>
              <img src={vector1} alt="" className='size-40' />
              <p className='w-full text-[#103255] text-start font-[Island_Moments] text-xl'>Branding Experts</p>
            </div>
            <div className='absolute right-0 bottom-44 w-1/4 gap-2 flex flex-col items-center justify-center'>
              <p className='w-full text-[#103255] text-right font-[Island_Moments] text-xl'>Art Curators</p>
              <img src={vector2} alt="" className='size-40' />
            </div>
            <div className='absolute top-0 left-44 w-1/3 flex flex-col items-center justify-center'>
              <p className='w-full text-[#103255] text-start font-[Island_Moments] text-xl'>Film Makers</p>
              <img src={vector3} alt="" className='size-40' />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-serif text-[#3d2f2b] mb-6">Take a closer look at the stories V bring to life.</h3>
            <button className="inline-block bg-[#ff6a3a] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#ff5a1d] transition cursor-pointer">View Portfolio</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutTeam
