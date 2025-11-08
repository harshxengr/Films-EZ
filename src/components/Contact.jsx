import React from 'react'
import bottomLeft from '../assets/common/Footer Vector (1).svg'
import topRight from '../assets/common/Footer Vector.svg'

const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://your-server.com/api/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message }),
    });

    const data = await response.json();
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{ zIndex: 0, opacity: 0.85 }}
      >
        <img src={bottomLeft} alt="" className='size-[400px]' />
      </div>

      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{ zIndex: 0, opacity: 0.85 }}
      >
        <img src={topRight} alt="" className='size-[400px]' />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="px-4 md:px-16 lg:px-24 xl:px-40 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          <div className="flex flex-col justify-center">
            <p
              className="text-lg pr-2"
            >
              Whether you have an idea, a question, or simply want
              to explore how V can work together, V're just a
              message away.
              <br />
              Let's catch up over coffee.
              <br />
              Great stories always begin with a good conversation
            </p>
          </div>

          <div className="flex flex-col items-center">

            <h2
              className="text-2xl lg:text-3xl xl:text-4xl mb-4 lg:mb-6"
              style={{
                color: '#333333',
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
                fontWeight: 400
              }}
            >
              Join the Story
            </h2>

            <p className="text-md lg:text-xl mb-8 lg:mb-10">
              Ready to bring your vision to life? Let's talk.
            </p>

            <form className="contact-form w-full flex flex-col gap-4">

              <input
                type="text"
                placeholder="Your name*"
                required
                className="max-w-[807.55px] px-3 py-1 h-10 rounded-xs border border-[#EAEAEA] bg-white text-base text-[#757575]"
              />

              <input
                type="email"
                placeholder="Your email*"
                required
                className="max-w-[807.55px] px-3 py-1 h-10 rounded-xs border border-[#EAEAEA] bg-white text-base text-[#757575]"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="max-w-[807.55px] px-3 py-1 h-10 rounded-xs border border-[#EAEAEA] bg-white text-base text-[#757575]"
              />

              <textarea
                placeholder="Your message*"
                required
                rows={4}
                className="max-w-[807.55px] p-3 h-[120px] rounded-xs border border-[#EAEAEA] bg-white text-base text-[#757575] resize-none"
              />

              <button
                type="submit"
                className="px-5 py-3 mt-1 rounded-full text-white bg-[#F15D2B] text-base font-medium self-center"
              >
                Submit
              </button>
            </form>

            <div className="text-sm lg:text-base text-right font-semibold text-[#F15D2B] mt-8 lg:mt-10">
              vernita@varnanfilms.co.in | +91 98736 84567
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
