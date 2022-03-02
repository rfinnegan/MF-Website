import React from 'react'
import Router from './router'
import Navbar from './components/navbar/Navbar'

import './styles/colors.css'
import './styles/elements.css'
import './styles/responsive.css'
import './styles/typography.css'
import './styles/app.css'


const App = () => {
  

  return (
    <div id="app-content" class="app-content">
      <Navbar />
    <div class="router">
      <Router />
    </div>
    </div>
  )
}

export default App
