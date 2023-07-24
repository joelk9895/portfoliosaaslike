import React from 'react'
import './pgmatch.css'
import Image from 'next/image'

const Pgmatch = () => {
  return (
    <div className='pgmatch'>
        <Image src={"/asset/pgmatch.png"} className='pgmatchbg' alt="map" width={1500} height={1500} />
        <div className="circular-bg-pgmatch"></div>
        <div className="Link"> 
        <p>Go To</p>
        </div>
    </div>
  )
}

export default Pgmatch