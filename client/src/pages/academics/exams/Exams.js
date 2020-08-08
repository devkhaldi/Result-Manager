import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Footer from '../../../components/Footer'
import ExamForm from './ExamForm'

const Exams = () => {
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />
      <ExamForm />
      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            <i className='fa fa-pencil' style={{ marginRight: '7px' }}></i>
            Exams Management
          </h1>
          <a
            href='#'
            style={{ float: 'right', position: 'relative', top: '-25px' }}
            className='btn btn-primary '
            data-toggle='modal'
            data-target='#modal-default'>
            <i style={{ marginRight: '5px' }} className='fa fa-plus mx-auto'></i>
            Add class
          </a>
        </section>
        <section className='content container-fluid'>
          <div className='box'>
            <div className='box-header'>
              <div className='box-title'>Exams list</div>
              <div className='box-tools'>
                <form>
                  <div className='input-group  input-group-sm'>
                    <input
                      type='text'
                      style={{ width: '150px' }}
                      className='form-control pull-right'
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

const exams = [{ name: '1st Tearminal', date: '14-08-2019' }]

export default Exams
