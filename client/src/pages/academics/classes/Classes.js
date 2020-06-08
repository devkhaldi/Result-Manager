import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Content from '../../../components/Content'
import Footer from '../../../components/Footer'

const Classes = () => {
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />
      <Content
        pageHeader='Class list'
        description='Add, Edit , Delete'
        breadcrumbs={['Home', 'classes']}
        icon='fa fa-tachometer'>
        <div className='box'>
          <div className='box-header'>
            <div className='box-title'>Classes list</div>
            <div className='box-tools'>
              <button className='btn btn-sm btn-primary'>Add new</button>
            </div>
          </div>
          <div className='box-body '>
            <table className='table table-hover no-padding'>
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

const classes = [
  { title: 'One', subjects: ['Bangla', 'English', 'Math'] },
  { title: 'Two', subjects: ['Bangla', 'English', 'Math'] },
]

export default Classes
