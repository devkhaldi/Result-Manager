import React from 'react'
import { Link } from 'react-router-dom'

const QuickIcons = () => {
  return (
    <div className='box'>
      <div className='box-header'>
        <h3 className='box-title'>
          <i className='fa fa-university'></i>
          Quick icons
        </h3>
      </div>

      <div className='box-body'>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-sitemap'></i> Class list
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-sitemap'></i> New class
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-book'></i> Subject list
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-book'></i> New subject
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-building-o'></i> Sections
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-users'></i> Teacher list
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-user'></i> New teacher
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-cog'></i> Configuration
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-support'></i> Manage language
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-archive'></i> Backup and restore
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-pencil'></i> Exam list
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-pencil'></i> New exam
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-pencil-square-o'></i> Mark
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-signal'></i> Grade list
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-signal'></i> New grade
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-users'></i> Student list
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-user'></i> New student
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-graduation-cap'></i> Result
        </Link>
        <Link to='/class' className='btn btn-app'>
          <i className='fa fa-certificate'></i> Certificate
        </Link>
      </div>
    </div>
  )
}

export default QuickIcons
