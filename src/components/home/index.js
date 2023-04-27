import React from 'react'
import "./styles.css"


const Home = () => {
  return (
    <>
      <div className='hero-section'>
        <div className='hero-text'>
          <h1 className='hero-text-main'>SMARTX Entreprise</h1>
          <h1 className='hero-text-sub'>Redefining Excellence Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  </h1>
          <div className='form form-extra'>
            <input name='email' type='email' placeholder='EMAIL' className='extra' />
            <button type="submit" className='button'>SIGN UP</button>
            <p className='clicking'>Interested in our newsletter, Sign-up</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home