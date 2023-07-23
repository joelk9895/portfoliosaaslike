import React from 'react'
import './opinio.css'
import Image from 'next/image'

const Opinio = () => {
  return (
    <div className='opinio'>
        <Image src={"/asset/opinio.png"} className='opiniobg' alt="map" width={1500} height={1500} />
        <div className="circular-bg pink"></div>
        <div className="Link"> 
        <p>Go To</p>
        </div>
    </div>
  )
}

export default Opinio