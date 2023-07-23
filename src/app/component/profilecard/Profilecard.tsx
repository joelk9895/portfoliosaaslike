import Image from 'next/image'
import React from 'react'
import './profilecard.css'

const Profilecard = () => {
  return (
    <div className='profile-card'>
       <Image
        src="https://play-lh.googleusercontent.com/rCtjtoA6Fe3plDTg46E5vcDMBpwehjz-m1_5pfLNcQM-R4v4yJnNiCFEsiUIxXtTYrE"
        alt="Picture of the author"
        width={200}
        className='profile-image'
        height={200}/>
   <p>
        I&apos;m <span>Joel</span>, a developer and student from Kerala, India<br/>
        I&apos;m interested in Web Development, Machine Learning, Kernel Development, Music and Enterpreneurship.
   </p>
    </div>
  )
}

export default Profilecard