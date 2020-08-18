import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Footer from '../../../components/Footer'
import StudentForm from './StudentForm'

const Students = () => {
  return (
    <React.Fragment>
      <StudentForm />
      <Header />
      <AcademicsSidebar />
      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            <i className='fa fa-users' style={{ marginRight: '7px' }}></i>
            Student list
          </h1>
          <a href='#' style={{ float: 'right', position: 'relative', top: '-25px' }} className='btn btn-primary ' data-toggle='modal' data-target='#modal-default'>
            <i style={{ marginRight: '5px' }} className='fa fa-plus mx-auto'></i>
            Add student
          </a>
        </section>
        <section className='content container-fluid'>
          <div className='box'>
            <div className='box-header'>
              <form>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-sm-3'>
                      <div className='input-group input-group-sm'>
                        <input type='text' style={{ marginLeft: '10px' }} class='form-control pull-right' />
                        <span class='input-group-btn'>
                          <button type='button' class='btn btn-default btn-flat'>
                            <i className='fa fa-search'></i>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className='col-sm-3'>
                      <div className='form-group'>
                        <select class='form-control input-sm'>
                          <option>Select class</option>
                          <option>One</option>
                          <option>Two</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-3'>
                      <div className='form-group'>
                        <select class='form-control input-sm'>
                          <option>Select section</option>
                          <option>A</option>
                          <option>B</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-3'>
                      <div className='form-group' style={{ position: 'relative', top: '-6px' }}>
                        <select class='form-control input-sm'>
                          <option>2015</option>
                          <option>2016</option>
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                          <option>2020</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='box-body table-responsive no-padding'>
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
                        <a href='#' className='btn btn-sm btn-info' style={{ marginRight: '5px', marginLeft: '5px' }}>
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
