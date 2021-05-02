import React from 'react'
import themeContext from '../themeContext'

function Navbar() {
  return (
    <div className="nav">
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#About">About</a> </li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar