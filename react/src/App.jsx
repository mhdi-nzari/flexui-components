import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import HeaderOne from './components/navigations/HeaderOne'
import HeaderOneDark from './components/navigations/HeaderOneDark'
import './index.css'

function App() {
  const [dark, setDark] = useState(false)
  const handleClick = () => {
    setDark(!dark)
  }
  return (
    <BrowserRouter>
      <div className="bg-gray-700 h-[100vh]">
        <button className="text-white" onClick={handleClick}>
          {dark ? (
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="#FEFCD7"
                d="M12 2a9.91 9.91 0 0 0-3 .46a10 10 0 0 1 0 19.08A10 10 0 1 0 12 2Z"
              />
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="#FDB813"
                d="m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"
              />
            </svg>
          )}
        </button>
        {dark ? <HeaderOne /> : <HeaderOneDark />}
      </div>
    </BrowserRouter>
  )
}

export default App
