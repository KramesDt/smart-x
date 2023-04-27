import React from 'react'
import { MenuItems } from './menuItems'
import "./styles.css"
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <nav className='navbar-items'>
        <h1 className='nav-logo'>SMART X</h1>
        <div className='menu-icons'>
        </div>
        <ul className='nav-menu'>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <a href={items.url} className={items.cName}>{items.title}</a>
              </li>
            )
          })}
        </ul>
        <a href='./' className='contact-link'>Contact Us</a>
        <FaBars className='header-menu' style={{fontSize: "20px"}}/>
      </nav>
    </div>
  )
}

export default Header