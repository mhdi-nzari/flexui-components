import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderOne = () => {
  const items = [
    {
      id: 1,
      href: '/products',
      name: 'محصولات',
    },
    {
      id: 2,
      href: '/pricing',
      name: 'قیمت گذاری',
    },
    {
      id: 3,
      href: '/blog',
      name: 'بلاگ',
    },
    {
      id: 4,
      href: '/about-us',
      name: 'درباره ما',
    },
    {
      id: 5,
      href: '/contact-us',
      name: 'تماس با ما',
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
        <div className={`hidden md:flex gap-x-4`}>
          {items &&
            items.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                // onClick={handleClick}
                // className={`hover:text-secondary hover:font-bold transition-all duration-500 ${
                //   isActive && 'text-secondary font-bold'
                // }`}
                className={({ isActive }) => {
                  return (
                    'hover:text-secondary hover:font-bold transition-all duration-500' +
                    (isActive ? ' text-secondary font-bold' : '')
                  )
                }}
              >
                {item.name}
              </NavLink>
            ))}
        </div>
        <div className="hidden md:flex flex-wrap items-center gap-x-3">
          <button className="py-1.5 px-4 rounded-md hover:text-secondary hover:font-bold transition-all duration-500">
            <a href="#">ورود</a>
          </button>
          <button className="bg-primary text-white hover:bg- py-1.5 px-4 rounded-md">
            <a href="#">ثبت نام</a>
          </button>
        </div>
        <div className="flex md:hidden gap-x-3">
          <div className="bg-gray-100 rounded-md p-1.5 md:hidden ">
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </a>
          </div>
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
