import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Content from '../../../components/Content'
import Footer from '../../../components/Footer'

const Exams = () => {
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />
      <Content
        pageHeader='Exams Management'
        description=''
        breadcrumbs={['Home', 'exams']}
        icon='fa fa-pencil'>
        <div className='box'>
          <div className='box-header'>
            <div className='box-title'>Exams list</div>
            <div className='box-tools'>
              <button className='btn btn-sm btn-primary'>Add new</button>
            </div>
          </div>
          <div className='box-body no-padding'>
            <table className='table table-hover'>
              <tbody>
                <tr>
                  <th>Exam name</th>
                  <th>Exam date</th>
                  <th className='text-right'>Actions</th>
                </tr>
                {exams.map(exam => (
                  <tr>
                    <td>{exam.name}</td>
                    <td>{exam.date}</td>
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

const exams = [{ name: '1st Tearminal', date: '14-08-2019' }]

export default Exams
