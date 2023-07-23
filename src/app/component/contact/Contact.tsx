import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contactCard'>
        <h3>Shall I keep you in the loop?</h3>
        <p>Subscribe to my newsletter and stay up-to-date with my latest tech thoughts and projects. Or don&aps;t. I&aps;m a newsletter, not a cop.</p>
        <form action="" method="post">
            <input type="email" name="email" id="email" placeholder="Your email address" />
            <input type="submit" className="submit"value="Subscribe" />
        </form>
        <p className='subscribe'>You are subscriber number <span className='count'>388</span></p>
    </div>
  )
}

export default Contact