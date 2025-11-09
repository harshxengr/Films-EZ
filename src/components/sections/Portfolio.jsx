import bottomRightImg from '../../assets/common/Footer Vector (2).svg'
import camGroup from '../../assets/common/Cam Group.svg'
// import subtract from '../../assets/common/Subtract.svg'
// import videoThumbNail from '../../assets/common/videoThumbNail.png'
// import { FaYoutube } from 'react-icons/fa'
// import rectangle from '../../assets/common/Rectangle 44.svg'
// import rightArrow from '../../assets/common/Vector 9.svg'
// import leftArrow from '../../assets/common/Vector 10.svg'

const Portfolio = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden border">

      <div className="absolute bottom-[25%] left-0 pointer-events-none opacity-85 z-0">
        <img src={camGroup} alt="" className="size-[450px]" />
      </div>
      <div className="absolute bottom-0 right-21 pointer-events-none opacity-85 z-0">
        <img src={bottomRightImg} alt="" className="size-[400px]" />
      </div>

      <div className='h-full bg-red-100 flex flex-col items-center justify-between'>
        <div className="text-center bg-red-400 py-10 text-[#252729]">
          <h2 className="text-3xl font-serif">The Highlight Reel</h2>
          <p className="mt-2 text-lg">Watch the magic we've captured.</p>
        </div>

        <div className='h-1/2 bg-amber-200'>
          
        </div>

        
      </div>
    </section>
  )
}

export default Portfolio