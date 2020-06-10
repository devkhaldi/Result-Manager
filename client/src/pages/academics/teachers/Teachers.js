import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Content from '../../../components/Content'
import Footer from '../../../components/Footer'

const Teachers = () => {
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />
      <Content
        pageHeader='Teachers management'
        description=''
        breadcrumbs={['Home', 'teachers']}
        icon='fa fa-users'>
        <div className='box'>
          <div className='box-header'>
            <div className='box-title'>Teachers list</div>
            <div className='box-tools'>
              <button className='btn btn-sm btn-primary'>
                <i className='fa fa-plus' style={{ marginRight: '5px' }}></i>
                Add new
              </button>
            </div>
          </div>
          <div className='box-body no-padding'>
            <table className='table table-hover'>
              <tbody>
                <tr>
                  <th>Teacher name</th>
                  <th className='text-center'>Email </th>
                  <th className='text-center'>Phone </th>
                  <th className='text-right'>Actions</th>
                </tr>
                {teachers.map(teacher => (
                  <tr>
                    <td>{teacher.name}</td>
                    <td className='text-center'>{teacher.email}</td>
                    <td className='text-center'>{teacher.phone}</td>
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
      </Content>
      <Footer />
      {/* /.control-sidebar
          Add the sidebar's background. This div must be placed
          immediately after the control sidebar */}
      <div className='control-sidebar-bg'></div>
    </React.Fragment>
  )
}

const teachers = [
  { name: 'Md Enamul Islam', email: 'teacher@zwebtheme.com', phone: '01699386236' },
]

export default Teachers
