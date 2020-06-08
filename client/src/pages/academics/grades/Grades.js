import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Content from '../../../components/Content'
import Footer from '../../../components/Footer'

const Grades = () => {
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />
      <Content
        pageHeader='Grade form'
        description=''
        breadcrumbs={['Home', 'grades']}
        icon='fa fa-tachometer'>
        <div className='box'>
          <div className='box-header'>
            <div className='box-title'>Grades list</div>
            <div className='box-tools'>
              <button className='btn btn-sm btn-primary'>
                <i className='fa fa-plus' style={{ marginRight: '5px' }}></i>
                Add new
              </button>
            </div>
          </div>
          <div className='box-body '>
            <table className='table table-hover no-padding'>
              <tbody>
                <tr>
                  <th>Grade name</th>
                  <th className='text-center'>Mark from </th>
                  <th className='text-center'>Mark upto </th>
                  <th className='text-right'>Actions</th>
                </tr>
                {grades.map(grade => (
                  <tr>
                    <td>{grade.name}</td>
                    <td className='text-center'>{grade.from}</td>
                    <td className='text-center'>{grade.upto}</td>
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

const grades = [
  { name: 'A+', from: 80, upto: 100 },
  { name: 'A', from: 70, upto: 79 },
  { name: 'A-', from: 60, upto: 69 },
  { name: 'B', from: 50, upto: 59 },
  { name: 'C', from: 40, upto: 59 },
  { name: 'D', from: 33, upto: 39 },
  { name: 'F', from: 0, upto: 32 },
]

export default Grades
