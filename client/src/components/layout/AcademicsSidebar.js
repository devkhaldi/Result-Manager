import React from 'react'
import userImage from '../../img/userImage.jpg'

const AcademicsSidebar = () => {
  return (
    //  Left side column. contains the logo and sidebar
    <aside className='main-sidebar'>
      {/* sidebar: style can be found in sidebar.less  */}
      <section className='sidebar'>
        {/* Sidebar Menu  */}
        <ul className='sidebar-menu' data-widget='tree'>
          <li className='active'>
            <a href='#'>
              <i className='fa fa-dashboard'></i> <span>Dashboard</span>
            </a>
          </li>
          <li className='treeview'>
            <a href='#'>
              <i className='fa fa-building-o'></i>
              <span>Academics</span>
              <span className='pull-right-container'>
                <i className='fa fa-angle-left pull-right'></i>
              </span>
            </a>
            <ul className='treeview-menu'>
              <li>
                <a href='#'>
                  <i className='fa fa-book'></i>
                  <span>Subjects</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-building-o'></i>
                  <span>Departements</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-sitemap'></i>
                  <span>Class</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-pencil'></i>
                  <span>Exams</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-signal'></i>
                  <span>Grade</span>
                </a>
              </li>
            </ul>
          </li>
          {/* Students */}
          <li className='treeview'>
            <a href='#'>
              <i className='fa fa-users'></i> <span>Students</span>
            </a>
          </li>
          <li className='treeview'>
            <a href='#'>
              <i className='fa fa-users'></i> <span>Teachers</span>
            </a>
          </li>

          {/* Results */}
          <li className='treeview'>
            <a href='#'>
              <i className='fa fa-graduation-cap'></i>
              <span>Academics</span>
              <span className='pull-right-container'>
                <i className='fa fa-angle-left pull-right'></i>
              </span>
            </a>
            <ul className='treeview-menu'>
              <li>
                <a href='#'>
                  <i className='fa fa-graduation-cap'></i>
                  <span>Results</span>
                </a>
                <a href='#'>
                  <i className='fa fa-graduation-cap'></i>
                  <span>Result Tempalates</span>
                </a>
              </li>
            </ul>
          </li>
          {/* Settings */}
          <li className='treeview'>
            <a href='#'>
              <i className='fa fa-gear'></i>
              <span>Settings</span>
              <span className='pull-right-container'>
                <i className='fa fa-angle-left pull-right'></i>
              </span>
            </a>
            <ul className='treeview-menu'>
              <li>
                <a href='#'>
                  <i className='fa fa-link'></i>
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-link'></i>
                  <span>Backup and Restore</span>
                </a>
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
