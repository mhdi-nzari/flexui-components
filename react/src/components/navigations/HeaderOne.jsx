import React, { useState } from 'react'

const HeaderOne = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = (e) => {
    if (e) e.preventDefault()
    setIsActive(!isActive)
  }

  const items = [
    {
      id: 1,
      name: 'محصولات',
      link: '/products',
    },
    {
      id: 2,
      name: 'قیمت گذاری',
      link: '/pricing',
    },
    {
      id: 3,
      name: 'بلاگ',
      link: '/blog',
    },
    {
      id: 4,
      name: 'درباره ما',
      link: '/about-us',
    },
    {
      id: 5,
      name: 'تماس با ما',
      link: '/contact-us',
    },
  ]
  return (
    <div className="bg-white py-4 text-gray-500">
      <div className="container px-2 flex flex-wrap items-center justify-between">
        <div>
          <img
            src="https://tailwind-parsi.github.io/flexui-components/html-css/assets/images/Logo.svg"
            alt="logo"
          />
        </div>
        <ul className={`hidden md:flex gap-x-4`}>
          {items &&
            items.map((item) => (
              <button key={item.name}>
                <a
                  onClick={handleClick}
                  href={item.link}
                  className={`hover:text-secondary hover:font-bold transition-all duration-500 ${
                    isActive && 'text-secondary font-bold'
                  }`}
                >
                  {item.name}
                </a>
              </button>
            ))}
        </ul>
        <div className="hidden md:flex flex-wrap items-center gap-x-3">
          <button className="py-1.5 px-4 rounded-md hover:text-secondary hover:font-bold transition-all duration-500">
            <a href="#">ورود</a>
          </button>
          <button className="bg-primary text-white hover:bg- py-1.5 px-4 rounded-md">
            <a href="#">ثبت نام</a>
          </button>
        </div>
        <div className="flex md:hidden gap-x-3">
          <button className="bg-gray-100 rounded-md p-1.5">
            <a href="#">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                ></path>
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderOne
