import React from 'react'
import './styles.css'

const imgLink = 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'

const Technology = (props) => {
    return (
        <>
            <section className='about-box'>
                <div className='float text-box'>
                    <h2 className='some-text'>Technology</h2>
                    <p className=''> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div className='float image-box'>
                    <img className='about-img' src={imgLink} />
                </div>
            </section>
        </>)
}

export default Technology