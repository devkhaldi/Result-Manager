import React, { useState } from 'react'
import $ from 'jquery'
import userImage from '../img/userImage.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handelOpen = () => {
    const body = document.querySelector('body')
    if (isOpen)
      if (window.innerWidth > 767) body.classList.add('sidebar-collapse')
      else body.classList.add('sidebar-open')
    else if (window.innerWidth > 767) body.classList.remove('sidebar-collapse')
    else body.classList.remove('sidebar-open')
    setIsOpen(!isOpen)
  }
  return (
    <header className='main-header'>
      {/* Logo  */}
      <Link to='/' className='logo'>
        <span className='logo-mini'>
          <b>R</b>M
        </span>
        <span className='logo-lg'>
          <b>Results</b>Managemer
        </span>
      </Link>

      {/* Header Navbar  */}
      <nav className='navbar navbar-static-top' role='navigation'>
        {/* Sidebar toggle button */}
        <a
          onClick={() => handelOpen()}
          className='sidebar-toggle'
          data-toggle='push-menu'
          role='button'>
          <span className='sr-only'>Toggle navigation</span>
        </a>
        {/* Navbar Right Menu  */}
        <div className='navbar-custom-menu'>
          <ul className='nav navbar-nav'>
            {/* User Account Menu  */}
            <li className='dropdown user user-menu'>
              {/* Menu Toggle Button  */}
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
                {/* The user image in the navbar */}
                <img src={userImage} className='user-image' alt='User Image' />
                {/* hidden-xs hides the username on small devices so only the image appears.  */}
                <span className='hidden-xs'>Alexander Pierce</span>
              </a>
              <ul className='dropdown-menu'>
                {/* The user image in the menu  */}
                <li className='user-header'>
                  <img
                    src='dist/img/user2-160x160.jpg'
                    className='img-circle'
                    alt='User Image'
                  />
                  <p>
                    Alexander Pierce - Web Developer
                    <small>Member since Nov. 2012</small>
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
