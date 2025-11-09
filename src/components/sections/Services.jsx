import filmProductionImg from '../../assets/services/ServiceImg1.png'
import brandingImg from '../../assets/services/ServiceImg2.png'
import artCurationImg from '../../assets/services/ServiceImg3.png'
import topDesign from '../../assets/common/topDesign.png'
import vector5 from '../../assets/common/Vector 5.svg'
import frame33 from '../../assets/common/Frame 33.svg'

const cards = [
  {
    title: "Film Production",
    img: filmProductionImg,
    rot: "6deg",
    barRot: "-8deg",
    mobileRot: "3deg",
  },
  {
    title: "Branding",
    img: brandingImg,
    rot: "0deg",
    barRot: "4deg",
    mobileRot: "0deg",
  },
  {
    title: "Art Curation",
    img: artCurationImg,
    rot: "-6deg",
    barRot: "32deg",
    mobileRot: "-3deg",
  }
];

const Services = () => {
  return (
    <section id='services' className="relative min-h-screen w-full py-6 sm:py-10 overflow-hidden">
      <div className='absolute bottom-0 w-full z-0'>
        <img src={frame33} alt="" className='w-full h-auto' />
      </div>

      <div className="relative z-10 max-w-7xl flex flex-col items-center justify-between mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 text-center">

        <div className='flex flex-col items-center justify-between gap-2 sm:gap-3 mb-8 sm:mb-12'>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mx-auto font-[Halant] px-4 leading-tight">
            The storyboard reveals the breadth of our craft.
          </h2>
          <img
            src={vector5}
            alt=""
            className='w-100 md:w-150 lg:w-200 max-w-full'
          />
        </div>

        <div className="relative w-full flex flex-col sm:flex-row items-center sm:items-end justify-center gap-8 sm:gap-6 md:gap-10 lg:gap-16 py-8 sm:py-12 lg:py-20 px-2 sm:px-4">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="relative transition-transform duration-300 hover:scale-105"
              style={{
                transform: `rotate(${window.innerWidth < 640 ? c.mobileRot : c.rot})`,
                marginTop: c.title === "Branding" ? (window.innerWidth < 640 ? '0' : '20px') : '0'
              }}
            >

              <div
                className="absolute -top-8 sm:-top-10 md:-top-12 z-10 w-32 sm:w-40 md:w-48 lg:w-52"
                style={{
                  transform: `translateX(-50%) rotate(${c.barRot})`,
                  left: window.innerWidth < 640
                    ? '50%'
                    : i === 0
                      ? '5%'
                      : i === 1
                        ? '50%'
                        : '90%'
                }}
              >
                <img src={topDesign} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="bg-white shadow-2xl border border-gray-200 p-4 w-full max-w-[280px] sm:max-w-60 md:max-w-[280px] lg:max-w-[320px] flex flex-col items-center">

                <div className="w-full h-64 sm:h-[260px] md:h-[280px] lg:h-80 bg-gray-100 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="mt-3 text-center font-[Halant] text-base sm:text-lg md:text-xl text-gray-900 font-medium">
                  {c.title}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
