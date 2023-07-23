import React from 'react'
import './darkmode.css'

const Darkmode = () => {
  return (
    <div className="mode-switch">
    <label className="switch">
      <input type="checkbox" />
      <span className="slider">
        <svg className="slider-icon" viewBox="0 0 24 24" fill="none" height="20" stroke="#000" stroke-linecap="round"
          stroke-linejoin="round" stroke-width="2" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </span>
    </label>
  </div>
  )
}

export default Darkmode