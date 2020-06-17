import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import userImage from '../img/userImage.jpg'

const AcademicsSidebar = () => {
  // control sidebar treeview
  // activeTreeView values : '',academics,results, settings
  const [activeTreeView, setActiveTreeView] = useState('')

  return (
    <aside className='main-sidebar'>
      {/* sidebar: style can be found in sidebar.less  */}
      <section className='sidebar'>
        {/* Sidebar Menu  */}
        <ul className='sidebar-menu' data-widget='tree'>
          <li className='active'>
            <Link exact='true' to='/'>
              <i className='fa fa-dashboard'></i> <span>Dashboard</span>
            </Link>
          </li>
          {/* Academics */}
          <li
            onClick={() => {
              activeTreeView === 'academics'
                ? setActiveTreeView('')
                : setActiveTreeView('academics')
              console.log(activeTreeView)
            }}
            className={`treeview ${activeTreeView === 'academics' && 'active'}`}>
            <a href='#'>
              <i className='fa fa-building-o'></i>
              <span>Academics</span>
              <span className='pull-right-container'>
                <i className='fa fa-angle-left pull-right'></i>
              </span>
            </a>
            <ul
              className={`treeview-menu ${
                activeTreeView === 'academics' && 'menu-open'
              }`}>
              <li>
                <Link exact='true' to='/subjects'>
                  <i className='fa fa-book'></i>
                  <span>Subjects</span>
                </Link>
              </li>
              <li>
                <Link exact='true' to='/sections'>
                  <i className='fa fa-building-o'></i>
                  <span>Sections</span>
                </Link>
              </li>
              <li>
                <Link exact='true' to='/class'>
                  <i className='fa fa-sitemap'></i>
                  <span>Class</span>
                </Link>
              </li>
              <li>
                <Link exact='true' to='/exams'>
                  <i className='fa fa-pencil'></i>
                  <span>Exams</span>
                </Link>
              </li>
              <li>
                <Link exact='true' to='/grade'>
                  <i className='fa fa-signal'></i>
                  <span>Grade</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* Students */}
          <li className='treeview'>
            <Link exact='true' to='/students'>
              <i className='fa fa-users'></i> <span>Students</span>
            </Link>
          </li>
          <li className='treeview'>
            <Link exact='true' to='/teachers'>
              <i className='fa fa-users'></i> <span>Teachers</span>
            </Link>
          </li>

          {/* Results */}
          <li
            onClick={() => {
              activeTreeView === 'results'
                ? setActiveTreeView('')
                : setActiveTreeView('results')
              console.log(activeTreeView)
            }}
            className={`treeview ${activeTreeView === 'results' ? 'active' : ''}`}>
            <a href='#'>
              <i className='fa fa-graduation-cap'></i>
              <span>Results</span>
              <span className='pull-right-container'>
                <i className='fa fa-angle-left pull-right'></i>
              </span>
            </a>
            <ul
              className={`treeview-menu ${
                activeTreeView === 'results' ? 'menu-open' : ''
              }`}
              style={
                activeTreeView === 'results' ? { display: 'block' } : { display: 'none' }
              }>
              <li>
                <Link exact='true' to='/results'>
                  <i className='fa fa-graduation-cap'></i>
                  <span>Results</span>
                </Link>
                <Link exact='true' to='/result-templates'>
                  <i className='fa fa-graduation-cap'></i>
                  <span>Result Tempalates</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* Settings */}
          <li
            onClick={() => {
              activeTreeView === 'settings'
                ? setActiveTreeView('')
                : setActiveTreeView('settings')
              console.log(activeTreeView)
            }}
            className={`treeview ${activeTreeView === 'settings' && 'active'}`}>
            <a href='#'>
              <i className='fa fa-gear'></i>
              <span>Settings</span>
              <span className='pull-right-container'>
                <i className='fa fa-angle-left pull-right'></i>
              </span>
            </a>
            <ul
              className={`treeview-menu ${activeTreeView === 'settings' && 'menu-open'}`}>
              <li>
                <Link exact='true' to='/settings'>
                  <i className='fa fa-link'></i>
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link exact='true' to='/backup-restore'>
                  <i className='fa fa-link'></i>
                  <span>Backup and Restore</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        {/* /.sidebar-menu  */}
      </section>
      {/* /.sidebar  */}
    </aside>
  )
}

export default AcademicsSidebar
