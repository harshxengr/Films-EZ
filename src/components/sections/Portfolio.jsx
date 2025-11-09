import bottomRightImg from '../../assets/common/Footer Vector (2).svg'
import camGroup from '../../assets/common/Cam Group.svg'
import videoThumbnail from '../../assets/common/videoThumbnail.png'
import { FaYoutube } from 'react-icons/fa'
import subtractImg from '../../assets/common/Subtract.svg'
import rightArrow from '../../assets/common/Vector 9.svg'
import leftArrow from '../../assets/common/Vector 10.svg'
import rectangleWhite from '../../assets/common/Rectangle 44.png'

const Portfolio = () => {
  return (
    <section id='portfolio' className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute bottom-[25%] left-0 pointer-events-none opacity-85 z-0">
        <img src={camGroup} alt="" className="size-[400px]" />
      </div>
      <div className="absolute bottom-0 right-21 pointer-events-none opacity-85 z-0">
        <img src={bottomRightImg} alt="" className="size-[400px]" />
      </div>

      <div className='min-h-screen py-12 px-4'>
        <div className="h-full mx-auto flex flex-col gap-16 justify-between items-center">
          <div className="text-center text-[#252729]">
            <h2 className="text-3xl font-serif mb-4">The Highlight Reel</h2>
            <p className="text-lg md:text-xl text-[#555]">Watch the magic we've captured.</p>
          </div>

          <div className="w-full mx-auto flex items-center justify-center">
            <div className="relative">
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30"
                aria-label="Previous video"
              >
                <img src={leftArrow} alt="" className='size-20 cursor-pointer' />
              </button>

              <div className='relative w-[640px] h-[400px]'>
                <img
                  src={subtractImg}
                  alt="Film strip frame"
                  className='w-full h-full object-contain'
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] aspect-video">
                  <div className="relative w-full h-full bg-black rounded-sm overflow-hidden shadow-2xl">
                    <img
                      src={videoThumbnail}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />

                    <button
                      className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-all group"
                      aria-label="Play video"
                    >
                      <div className="cursor-pointer transition-all rounded-full flex items-center justify-center group-hover:scale-110 duration-300 shadow-xl">
                        <FaYoutube className="text-red-700 text-6xl" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* <img src={rectangleWhite} alt="" className='absolute top-0 right-0 z-20  w-[70px] h-[200px] bg-amber-200'/> */}
              
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30"
                aria-label="Next video"
              >
                <img src={rightArrow} alt="" className='size-20 cursor-pointer ' />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Portfolio