import React from 'react'
import './style.css'

const Contact = () => {
    return (
        <div className='contact-box'>
            <div style={{height: '50px'}}></div>
            <div className='vertical-line'></div>
            <div className='contact-form'>
                <p className='interest'>Interested in staying up to date with SmartX?</p>

                <div className='form'>
                    <input name='email' type='email' placeholder='EMAIL' className='input' />
                    <button type="submit" className='button'>SIGN UP</button>
                </div>
                
                <p className='clicking'>By clicking Sign Up, you agree to our <a href='#'>Privacy Policy</a> </p>
            </div>
        </div>
    )
}

export default Contact