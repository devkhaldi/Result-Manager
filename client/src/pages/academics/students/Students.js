import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Content from '../../../components/Content'
import Footer from '../../../components/Footer'

const Students = () => {
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />
      <Content
        pageHeader='Student list'
        description=''
        breadcrumbs={['Home', 'students']}
        icon='fa fa-users'>
        <div className='box'>
          <div className='box-header'>
            <div className='box-title'></div>
            <div className='box-tools'>
              <button className='btn btn-sm btn-primary'>
                <i className='fa fa-plus' style={{ marginRight: '2px' }}></i>
                Add new
              </button>
            </div>
          </div>
          <div className='box-body no-padding'>
            <table className='table table-hover'>
              <tbody>
                <tr>
                  <th>Student name</th>
                  <th className='text-center'>Class </th>
                  <th className='text-center'>Section </th>
                  <th className='text-right'>Roll</th>
                  <th className='text-right'>Phone</th>
                  <th className='text-right'>Year</th>
                  <th className='text-right'>Actions</th>
                </tr>
                {students.map(student => (
                  <tr>
                    <td>{student.name}</td>
                    <td className='text-center'>{student.class}</td>
                    <td className='text-center'>{student.section}</td>
                    <td className='text-right'>{student.roll}</td>
                    <td className='text-right'>{student.phone}</td>
                    <td className='text-right'>{student.year}</td>
                    <td className='text-right'>
                      <a href='#' className='btn btn-sm btn-primary'>
                        <i className='fa fa-eye'></i>
                      </a>
                      <a
                        href='#'
                        className='btn btn-sm btn-info'
                        style={{ marginRight: '5px', marginLeft: '5px' }}>
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

const students = [
  {
    name: 'Md Rasel Islam',
    class: 'one',
    section: 'A',
    roll: 1001,
    phone: '01755739457',
    year: 2019,
  },
  {
    name: 'Md Enamul',
    class: 'one',
    section: 'A',
    roll: 1001,
    phone: '01755739457',
    year: 2019,
  },
  {
    name: ' Md Rocky',
    class: 'one',
    section: 'A',
    roll: 1001,
    phone: '01755739457',
    year: 2019,
  },

  {
    name: ' Md nisad',
    class: 'one',
    section: 'A',
    roll: 1001,
    phone: '01755739457',
    year: 2019,
  },
]

export default Students
