import React from 'react'

export default function Nav (props) {
  return (
    <nav className='navbar navbar-expand-sm fixed-top navbar-light bg-warning navigation'>
      <i className='fas fa-bolt text-dark nav-icon'></i>
      <a className='navbar-brand text-dark' href='#card-list'>FlashApp</a>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link text-grey' href='#card-list'>Cards</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-grey' href='#create-card'><i className="fas fa-plus-circle text-dark"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
