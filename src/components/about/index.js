import React from 'react'
import './styles.css'
import '../about/styles.css'

const About = ({image, checker, children}) => {
  return (
    <>
      <section className='about-box'>
        {checker == "about" ? <div className='float image-box'>
            <img className='about-img' src={image} alt='content' />
        </div> : children}
       {checker == "tech" ? <div className='float image-box'>
            <img className='about-img' src={image} alt='content' />
        </div> : children}
    </section>
    </>
  )
}

export default About