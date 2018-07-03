import React from 'react'

export default function Nav (props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-warning'>
      <i className='fas fa-bolt text-dark nav-icon'></i>
      <a className='navbar-brand text-dark float-left' href='#'>FlashApp</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link text-dark' href='#home'>Home</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-grey' href='#cards'>Cards</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}