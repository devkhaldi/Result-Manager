import React from 'react'
import userImage from '../../img/userImage.jpg'

const Header = () => {
  return (
    //  Main Header
    <header className='main-header'>
      {/* Logo  */}
      <a href='index2.html' className='logo'>
        {/* mini logo for sidebar mini 50x50 pixels  */}
        <span className='logo-mini'>
          <b>A</b>LT
        </span>
        {/* logo for regular state and mobile devices  */}
        <span className='logo-lg'>
          <b>Admin</b>LTE
        </span>
      </a>

      {/* Header Navbar  */}
      <nav className='navbar navbar-static-top' role='navigation'>
        {/* Sidebar toggle button */}
        <a href='#' className='sidebar-toggle' data-toggle='push-menu' role='button'>
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
