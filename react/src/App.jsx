import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navigations from './components/navigations'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Navigations />
    </BrowserRouter>
  )
}

export default App
