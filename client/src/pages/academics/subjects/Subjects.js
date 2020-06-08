import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Content from '../../../components/Content'
import Footer from '../../../components/Footer'

const Subjects = () => {
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />
      <Content
        pageHeader='Subjects managements'
        description=''
        breadcrumbs={['Home', 'subjects']}
        icon='fa fa-book'>
        <div className='box'>
          <div className='box-header'>
            <div className='box-title'>Subjects list</div>
            <div className='box-tools'>
              <button className='btn btn-sm btn-primary'>Add new</button>
            </div>
          </div>
          <div className='box-body '>
            <table className='table table-hover no-padding'>
              <tbody>
                <tr>
                  <th>Subject name</th>
                  <th className='text-right'>Actions</th>
                </tr>
                {subjects.map(subject => (
                  <tr>
                    <td>{subject}</td>
                    <td className='text-right'>
                      <a
                        href='#'
                        className='btn btn-sm btn-info'
                        style={{ marginRight: '10px' }}>
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
      </Content>
      <Footer />
      {/* /.control-sidebar
          Add the sidebar's background. This div must be placed
          immediately after the control sidebar */}
      <div className='control-sidebar-bg'></div>
    </React.Fragment>
  )
}

// Hard coded data

const subjects = ['Bangla', 'English', 'Math', 'Computer']

export default Subjects
