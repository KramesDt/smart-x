import React from 'react'
import "./styles.css"


const Home = () => {
  return (
    <>
      <div className='hero-section'>
        {/* <img alt='heroimg' className='hero' src='https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' /> */}
        <div className='hero-text'>
          <h1 className='hero-text-main'>SMARTX Entreprise</h1>
          <h1 className='hero-text-sub'>Redefining Excellence Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  </h1>
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