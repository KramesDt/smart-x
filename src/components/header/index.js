import React from 'react'
import { MenuItems } from './menuItems'
import "./styles.css"

const Header = () => {
  return (
    <div>
      <nav className='navbar-items'>
        <h1 className='nav-logo'>SMART X</h1>
        <ul className='nav-menu'>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <a href={items.url} className={items.cName}>{items.title}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Header