import React, { useState } from 'react'
import bottomLeft from '../../assets/common/Footer Vector (1).svg'
import topRight from '../../assets/common/Footer Vector.svg'

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", text: "" });

  const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const showToast = (type, text) => {
    setToast({ show: true, type, text });
    setTimeout(() => {
      setToast({ show: false, type: "", text: "" });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      showToast("error", "Please fill all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      showToast("error", "Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        showToast("success", "Form Submitted Successfully");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        showToast("error", "Something went wrong. Try again!");
      }

    } catch {
      showToast("error", "Network Error. Check your connection.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative w-full min-h-screen overflow-hidden">

      <div className="absolute bottom-0 left-0 pointer-events-none opacity-85 z-0">
        <img src={bottomLeft} alt="" className="size-[400px]" />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none opacity-85 z-0">
        <img src={topRight} alt="" className="size-[400px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="px-4 md:px-16 lg:px-24 xl:px-40 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-36">

          <div className="flex flex-col justify-center">
            <p className="text-lg pr-2">
              Whether you have an idea, a question, or simply want to explore how V can work together, V&apos;re just a message away.
              <br />
              Let&apos;s catch up over coffee. Great stories always begin with a good conversation
            </p>
          </div>

          <div className="flex flex-col items-center">

            <h2
              className="text-2xl lg:text-3xl mb-4"
              style={{ color: '#333', fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              Join the Story
            </h2>

            <p className="text-md lg:text-lg mb-8">Ready to bring your vision to life? Let's talk.</p>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

              <input
                type="text"
                placeholder="Your name*"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="max-w-[807px] px-3 py-1 h-10 border bg-[#FFFFFF] border-[#EAEAEA] rounded-xs"
              />

              <input
                type="email"
                placeholder="Your email*"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-[807px] px-3 py-1 h-10 border bg-[#FFFFFF]  border-[#EAEAEA] rounded-xs"
              />

              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="max-w-[807px] px-3 py-1 h-10 border bg-[#FFFFFF]  border-[#EAEAEA] rounded-xs"
              />

              <textarea
                placeholder="Your message*"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="max-w-[807px] p-3 h-[120px] border bg-[#FFFFFF]  border-[#EAEAEA] rounded-xs resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="px-5 py-3 mt-1 rounded-full text-white bg-[#F15D2B] text-base font-medium self-center disabled:opacity-60 cursor-pointer"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>

            <div className="text-sm font-semibold text-[#F15D2B] mt-8">
              <a href="mailto:vernita@varnanfilms.co.in" className="hover:underline">
                vernita@varnanfilms.co.in
              </a>
              &nbsp;|&nbsp;
              +91 98736 84567
            </div>
          </div>
        </div>
      </div>

      {toast.show && (
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-5 py-3 rounded-lg text-white text-sm shadow-lg transition-all duration-300
         ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
          {toast.text}
        </div>
      )}

    </section>
  );
};

export default Contact;
