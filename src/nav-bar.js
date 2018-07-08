import React from 'react'

export default function Nav(props) {
  const activeStatusList = window.location.hash === '#card-list'
    || window.location.hash === '#create-card'
    || window.location.hash === '#delete-card'
    || window.location.hash === '#edit-card'
    ? 'nav-item active'
    : 'nav-item'
  const activeStatusPractice = window.location.hash === '#practice-cards'
    ? 'nav-item active'
    : 'nav-item'

  return (
    <nav className='navbar navbar-expand-sm fixed-top navbar-light bg-warning navigation'>
      <i className='fas fa-bolt text-dark nav-icon'></i>
      <a className='navbar-brand text-dark' href='#card-list'>FlashApp</a>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className={activeStatusList}>
            <a className='nav-link text-grey' href='#card-list'>All Cards</a>
          </li>
          <li className={activeStatusPractice}>
            <a className='nav-link text-grey' href='#practice-cards'>Practice</a>
          </li>
          <li className='nav-item'>
            <a
              title='Add Card'
              className='nav-link text-grey'
              href='#create-card'>
              <i className='fas fa-plus-circle text-dark'></i></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
