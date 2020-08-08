import React, { useState } from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Footer from '../../../components/Footer'
import ClassForm from './ClassForm'

const Classes = () => {
  // control modal
  const [update, setUpdate] = useState(true)

  return (
    <React.Fragment>
      <ClassForm update={update} />
      <Header />
      <AcademicsSidebar />
      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            <i className='fa fa-sitemap' style={{ marginRight: '7px' }}></i>
            Classes list
            <small>Add, edit, delete</small>
          </h1>
          <a
            href='#'
            style={{
              float: 'right',
              position: 'relative',
              top: '-25px',
            }}
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#modal-default'
            onClick={e => setUpdate(false)}>
            <i style={{ marginRight: '5px' }} className='fa fa-plus mx-auto'></i>
            Add class
          </a>
        </section>
        <section className='content container-fluid'>
          <div className='box'>
            <div className='box-header'>
              <div className='box-title'>Classes list</div>
              <div className='box-tools'>
                <form>
                  <div className='input-group input-group-sm'>
                    <input
                      type='text'
                      style={{ width: '150px' }}
                      className='form-control pull-right'
                    />
                    <span className='input-group-btn'>
                      <button type='button' className='btn btn-default btn-flat'>
                        <i className='fa fa-search'></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className='box-body no-padding'>
              <table className='table table-hover'>
                <tbody>
                  <tr>
                    <th>class title</th>
                    <th>Subjects</th>
                    <th className='text-right'>Actions</th>
                  </tr>
                  {classList.map(cl => (
                    <tr>
                      <td>{cl.title}</td>
                      <td>
                        {cl.subjects.slice(0, cl.subjects.length - 1).join(', ') +
                          ', and ' +
                          cl.subjects.slice(-1)}
                      </td>
                      <td className='text-right'>
                        <a
                          href='#'
                          className='btn btn-sm btn-info'
                          style={{ marginRight: '2px' }}
                          data-toggle='modal'
                          data-target='#modal-default'
                          onClick={e => setUpdate(true)}>
                          <i className='fa fa-pencil'></i>
                        </a>
                        <a href='#' className='btn btn-sm btn-danger'>
                          <i className='fa fa-trash'></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      {/* /.control-sidebar
          Add the sidebar's background. This div must be placed
          immediately after the control sidebar */}
      <div className='control-sidebar-bg'></div>
    </React.Fragment>
  )
}

const classList = [
  { id: 1, title: 'One', subjects: ['Bangla', 'English', 'Math'] },
  { id: 2, title: 'Two', subjects: ['Bangla', 'English', 'Math'] },
]

export default Classes
