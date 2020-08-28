import React, { useState } from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Footer from '../../../components/Footer'
import GradeForm from './GradeForm'

const Grades = () => {
  const [update, setupdate] = useState(null)
  return (
    <React.Fragment>
      <GradeForm update={update} />
      <Header />
      <AcademicsSidebar />
      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            <i className='fa fa-signal' style={{ marginRight: '7px' }}></i>
            Grades list
          </h1>
          <a
            href='#'
            style={{ float: 'right', position: 'relative', top: '-25px' }}
            className='btn btn-primary '
            data-toggle='modal'
            data-target='#modal-default'
            onClick={e => setupdate(null)}>
            <i style={{ marginRight: '5px' }} className='fa fa-plus mx-auto'></i>
            Add grade
          </a>
        </section>
        <section className='content container-fluid'>
          <div className='box'>
            <div className='box-header'>
              <div className='box-title'>Grades list</div>
              <div className='box-tools'>
                <form>
                  <div className='input-group  input-group-sm'>
                    <input type='text' style={{ width: '150px' }} class='form-control pull-right' />
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
                        <a href='#' className='btn btn-sm btn-info' style={{ marginRight: '2px' }} data-toggle='modal' data-target='#modal-default' onClick={e => setupdate(grade)}>
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
