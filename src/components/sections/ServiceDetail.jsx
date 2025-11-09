import exploreArrow from '../../assets/services/Arrow.svg'
import { servicesData } from '../../assets/data/servicesData'
import vector5 from '../../assets/services/Vector 5.png'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const ServiceDetail = () => {
    return (
        <div className="w-full lg:mt-24">
            {servicesData.map((service, index) => (
                <section
                    key={service.id}
                    id={service.id}
                    className="relative w-full min-h-screen py-12 px-6 md:px-16 lg:px-32 overflow-hidden snap-start"
                >

                    <div className="absolute bottom-32 left-8 md:left-20 lg:left-30 w-12 h-12 md:w-20 md:h-20 opacity-70 pointer-events-none">
                        <img src={service.decorativeIcons.topLeft} alt="" className="w-full h-full" />
                    </div>
                    <div className="absolute top-32 right-8 md:right-20 lg:right-28 w-12 h-12 md:w-20 md:h-20 opacity-70 pointer-events-none">
                        <img src={service.decorativeIcons.topRight} alt="" className="w-full h-full" />
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-20 lg:right-44 w-12 h-12 md:w-20 md:h-20 opacity-70 pointer-events-none">
                        <img src={service.decorativeIcons.middleRight} alt="" className="w-full h-full" />
                    </div>
                    <div className="absolute bottom-28 right-8 md:right-20 lg:right-32 w-12 h-12 md:w-20 md:h-20 opacity-70 pointer-events-none">
                        <img src={service.decorativeIcons.bottomRight} alt="" className="w-full h-full" />
                    </div>


                    <div className="relative z-10 min-h-screen flex flex-col justify-center">
                        <div className="max-w-7xl mx-auto w-full">

                            <div className="text-center mb-12 flex flex-col justify-center items-center gap-1">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#252729] px-4">
                                    {service.quote}
                                </h1>

                                <img src={vector5} alt="" className='w-200' />

                            </div>


                            {index === 0 && (
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="flex items-center text-center gap-1 md:gap-2 cursor-pointer text-[#ff6a3a] hover:text-[#ff5a1d] transition-colors mb-8 lg:mb-12 group outline-2 rounded-full px-3 py-1 md:px-4 md:py-2"
                                >
                                    <MdKeyboardArrowLeft className='size-6' />
                                    <span className="font-medium">Back</span>
                                </button>
                            )}


                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                                <div className="flex flex-col items-center">
                                    <div className="bg-white shadow-lg border border-gray-200 p-4">
                                        <div className="w-64 h-80 overflow-hidden bg-gray-100">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="mt-3 text-center font-[Halant] text-xl text-gray-900">
                                            {service.title}
                                        </div>
                                    </div>
                                </div>

                                <div className="order-1 lg:order-2 space-y-6">
                                    <div className="text-[#252729] space-y-4">
                                        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                                            {service.description}
                                        </p>

                                        <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-6">
                                            {service.tagline}
                                        </p>

                                        <ul className="space-y-3 text-base md:text-lg">
                                            {service.services.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <span className="text-[#ff6a3a] text-xl mt-0.5">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="w-full pt-6 flex items-center justify-center lg:justify-start">
                                        <button className="group flex flex-col items-center gap-3 text-[#252729] hover:text-[#ff6a3a] transition-colors">
                                            <span className="text-base md:text-lg font-medium">
                                                Explore Now
                                            </span>
                                            <img
                                                src={exploreArrow}
                                                alt="arrow"
                                                className="w-12 md:w-16 lg:w-24 h-6 md:h-8 group-hover:translate-x-2 transition-transform"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {index < servicesData.length - 1 && (
                                <div className="flex justify-center mt-12">
                                    <button
                                        onClick={() => {
                                            const nextSection = document.getElementById(servicesData[index + 1].id)
                                            nextSection?.scrollIntoView({ behavior: 'smooth' })
                                        }}
                                        className="animate-bounce text-[#ff6a3a] hover:text-[#ff5a1d] transition-colors"
                                    >
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default ServiceDetail
