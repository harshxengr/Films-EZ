import React, { useState } from 'react'
import logo from '../assets/common/logo.svg'
import mailIcon from '../assets/common/mail.svg'
import menuIcon from '../assets/common/Menu.svg'
import closeIcon from '../assets/common/Menu-Close.svg'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Their Stories', href: '#stories' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Varnan', href: '#varnan' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 p-4">
      <nav className="h-20 flex items-center justify-between gap-6 px-4 sm:px-6 bg-white/50">
        <a href="#home">
          <img src={logo} alt="V Films" className="h-9 w-auto" />
        </a>

        <div className='flex items-center justify-between gap-8'>
          <div className={`hidden items-center gap-6 ${isOpen ? 'lg:flex' : 'lg:hidden'}`}>
            <ul className="flex items-center gap-8 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm tracking-wide text-[#1e1e1e] transition-colors hover:text-[#f15d2b]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-[#f15d2b] px-4 py-3 text-sm  text-white shadow-[0px_12px_30px_rgba(241,93,43,0.25)] transition-transform hover:-translate-y-[2px]"
            >
              Let&apos;s Talk
              <span className="relative block size-4 overflow-visible">
                <img
                  src={mailIcon}
                  alt=""
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </span>
            </a>
          </div>

          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="inline-flex items-center justify-center"
            onClick={() => setIsOpen((v) => !v)}
          >
            <img
              src={isOpen ? closeIcon : menuIcon}
              alt=""
              className="size-10"
            />
          </button>
        </div>
      </nav>

      <div
        className={`origin-top border-t border-[#f1c6b5] bg-[#fff5ee] shadow-xl transition-all duration-300 lg:hidden ${isOpen ? 'scale-y-100 opacity-100' : 'pointer-events-none scale-y-0 opacity-0'
          }`}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full px-4 py-3 text-lg font-medium text-[#1d1d1d] transition-colors hover:bg-[#fde5d8]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f15d2b] px-6 py-3 text-lg font-semibold text-white"
          >
            Let&apos;s Talk
            <img src={mailIcon} alt="" className="h-5 w-auto" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar