import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Footer from '../../../components/Footer'

const Classes = () => {
  return (
    <React.Fragment>
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
            style={{ float: 'right', position: 'relative', top: '-25px' }}
            className='btn btn-primary '>
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
                  <div className='input-group  input-group-sm'>
                    <input
                      type='text'
                      style={{ width: '150px' }}
                      class='form-control pull-right'
                    />
                    <span class='input-group-btn'>
                      <button type='button' class='btn btn-default btn-flat'>
                        <i className='fa fa-search'></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className='box-body  no-padding'>
              <table className='table table-hover'>
                <tbody>
                  <tr>
                    <th>class title</th>
                    <th>Subjects</th>
                    <th className='text-right'>Actions</th>
                  </tr>
                  {classes.map(cl => (
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
                          style={{ marginRight: '2px' }}>
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

const classes = [
  { title: 'One', subjects: ['Bangla', 'English', 'Math'] },
  { title: 'Two', subjects: ['Bangla', 'English', 'Math'] },
]

export default Classes
