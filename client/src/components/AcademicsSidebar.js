import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import userImage from '../img/userImage.jpg'

const AcademicsSidebar = () => {
  return (
    <aside className='main-sidebar'>
      {/* sidebar: style can be found in sidebar.less  */}
      <section className='sidebar'>
        {/* Sidebar Menu  */}
        <ul className='sidebar-menu' data-widget='tree'>
          <li className='active'>
            <NavLink exact to='/'>
              <i className='fa fa-dashboard'></i> <span>Dashboard</span>
            </NavLink>
          </li>
          <li className='treeview'>
            <a>
              <i className='fa fa-building-o'></i>
              <span>Academics</span>
              <span className='pull-right-container'>
                <i className='fa fa-angle-left pull-right'></i>
              </span>
            </a>
            <ul className='treeview-menu'>
              <li>
                <NavLink exact to='/subjects'>
                  <i className='fa fa-book'></i>
                  <span>Subjects</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/sections'>
                  <i className='fa fa-building-o'></i>
                  <span>Sections</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/class'>
                  <i className='fa fa-sitemap'></i>
                  <span>Class</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/exams'>
                  <i className='fa fa-pencil'></i>
                  <span>Exams</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/grade'>
                  <i className='fa fa-signal'></i>
                  <span>Grade</span>
                </NavLink>
              </li>
            </ul>
          </li>
          {/* Students */}
          <li className='treeview'>
            <NavLink exact to='/students'>
              <i className='fa fa-users'></i> <span>Students</span>
            </NavLink>
          </li>
          <li className='treeview'>
            <NavLink exact to='/teachers'>
              <i className='fa fa-users'></i> <span>Teachers</span>
            </NavLink>
          </li>

          {/* Results */}
          <li className='treeview'>
            <a>
              <i className='fa fa-graduation-cap'></i>
              <span>Results</span>
              <span className='pull-right-container'>
                <i className='fa fa-angle-left pull-right'></i>
              </span>
            </a>
            <ul className='treeview-menu'>
              <li>
                <NavLink exact to='/results'>
                  <i className='fa fa-graduation-cap'></i>
                  <span>Results</span>
                </NavLink>
                <NavLink exact to='/result-templates'>
                  <i className='fa fa-graduation-cap'></i>
                  <span>Result Tempalates</span>
                </NavLink>
              </li>
            </ul>
          </li>
          {/* Settings */}
          <li className='treeview'>
            <a>
              <i className='fa fa-gear'></i>
              <span>Settings</span>
              <span className='pull-right-container'>
                <i className='fa fa-angle-left pull-right'></i>
              </span>
            </a>
            <ul className='treeview-menu'>
              <li>
                <NavLink exact to='/settings'>
                  <i className='fa fa-link'></i>
                  <span>Settings</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/backup-restore'>
                  <i className='fa fa-link'></i>
                  <span>Backup and Restore</span>
                </NavLink>
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
