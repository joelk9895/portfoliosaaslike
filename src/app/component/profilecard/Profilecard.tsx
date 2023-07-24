import Image from 'next/image'
import React from 'react'
import './profilecard.css'
import {motion} from 'framer-motion'

const Profilecard = () => {
  return (
    <motion.div className='profile-card'
    layout
    >
       <Image
        src="https://play-lh.googleusercontent.com/rCtjtoA6Fe3plDTg46E5vcDMBpwehjz-m1_5pfLNcQM-R4v4yJnNiCFEsiUIxXtTYrE"
        alt="Picture of the author"
        width={200}
        className='profile-image'
        height={200}/>
   <p>
        I&apos;m <span>Joel</span>, a developer and nstudent from Kerala, India<br/>
        I&apos;m interested in Web Development, Machine Learning, Kernel Development, Music and Enterpreneurship.
   </p>
    </motion.div>
  )
}

export default Profilecard