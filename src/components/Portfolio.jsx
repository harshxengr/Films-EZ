import bottomRightImg from '../assets/common/Footer Vector (2).svg'
import camGroup from '../assets/common/Cam Group.svg'
import subtract from '../assets/common/Subtract.svg'
import videoThumbNail from '../assets/common/videoThumbNail.png'
import { FaYoutube } from 'react-icons/fa'
import rectangle from '../assets/common/Rectangle 44.svg'
import rightArrow from '../assets/common/Vector 9.svg'
import leftArrow from '../assets/common/Vector 10.svg'

const Portfolio = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      <div className="absolute bottom-[25%] left-0 pointer-events-none opacity-85 z-0">
        <img src={camGroup} alt="" className="size-[450px]" />
      </div>
      <div className="absolute bottom-0 right-21 pointer-events-none opacity-85 z-0">
        <img src={bottomRightImg} alt="" className="size-[400px]" />
      </div>

      <div className='bg-red-100 flex flex-col items-center justify-between'>
        <div className="text-center bg-red-400">
          <h2 className="text-3xl font-serif">The Highlight Reel</h2>
          <p className="mt-2 text-gray-600">Watch the magic we've captured.</p>
        </div>

        <div className='h-1/2 bg-amber-200'>
          harsh
        </div>

        {/* <div className="w-1/2 relative flex justify-center items-center bg-red-300 z-10">
          <div className='absolute bg-amber-200'>
            <img src={subtract} alt="" className='size-[700px]' />
          </div>

          <div className="absolute flex justify-center rounded-lg border-0 bg-blue-200">
            <div className="">
              <img src={rectangle} alt="" className='size-[300px]' />
            </div>

            <div className="rounded-md overflow-hidden">
              <img
                src={videoThumbNail}
                alt="video preview"
                className="w-[480px] h-[300px] object-cover"
              />
            </div>

            <button className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <FaYoutube className='size-12 text-red-500' />
            </button>

            <div className="">
              <img src={rectangle} alt="" className='size-[300px]' />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Portfolio