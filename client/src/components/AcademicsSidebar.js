import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import userImage from '../img/userImage.jpg'

const AcademicsSidebar = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.url = 'js/adminlte.js'
    document.querySelector('body').appendChild(script)
  }, [])
  return (
    <aside className='main-sidebar'>
      {/* sidebar: style can be found in sidebar.less  */}
      <section className='sidebar'>
        {/* Sidebar Menu  */}
        <ul className='sidebar-menu' data-widget='tree'>
          <li className='active'>
            <Link exact to='/'>
              <i className='fa fa-dashboard'></i> <span>Dashboard</span>
            </Link>
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
                <Link exact to='/subjects'>
                  <i className='fa fa-book'></i>
                  <span>Subjects</span>
                </Link>
              </li>
              <li>
                <Link exact to='/sections'>
                  <i className='fa fa-building-o'></i>
                  <span>Sections</span>
                </Link>
              </li>
              <li>
                <Link exact to='/class'>
                  <i className='fa fa-sitemap'></i>
                  <span>Class</span>
                </Link>
              </li>
              <li>
                <Link exact to='/exams'>
                  <i className='fa fa-pencil'></i>
                  <span>Exams</span>
                </Link>
              </li>
              <li>
                <Link exact to='/grade'>
                  <i className='fa fa-signal'></i>
                  <span>Grade</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* Students */}
          <li className='treeview'>
            <Link exact to='/students'>
              <i className='fa fa-users'></i> <span>Students</span>
            </Link>
          </li>
          <li className='treeview'>
            <Link exact to='/teachers'>
              <i className='fa fa-users'></i> <span>Teachers</span>
            </Link>
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
                <Link exact to='/results'>
                  <i className='fa fa-graduation-cap'></i>
                  <span>Results</span>
                </Link>
                <Link exact to='/result-templates'>
                  <i className='fa fa-graduation-cap'></i>
                  <span>Result Tempalates</span>
                </Link>
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
                <Link exact to='/settings'>
                  <i className='fa fa-link'></i>
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link exact to='/backup-restore'>
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
