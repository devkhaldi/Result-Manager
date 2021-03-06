import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Footer from '../../../components/Footer'
import SectionForm from './SectionForm'

const Sections = () => {
  return (
    <React.Fragment>
      <SectionForm />
      <Header />
      <AcademicsSidebar />
      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            <i className='fa fa-building-o' style={{ marginRight: '7px' }}></i>
            Sections management
          </h1>
          <a
            href='#'
            style={{ float: 'right', position: 'relative', top: '-25px' }}
            className='btn btn-primary '
            data-toggle='modal'
            data-target='#modal-default'>
            <i style={{ marginRight: '5px' }} className='fa fa-plus mx-auto'></i>
            Add section
          </a>
        </section>
        <section className='content container-fluid'>
          <div className='box'>
            <div className='box-header'>
              <div className='box-title'>Sections list</div>
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
            <div className='box-body no-padding'>
              <table className='table table-hover'>
                <tbody>
                  <tr>
                    <th>section name</th>
                    <th className='text-right'>Actions</th>
                  </tr>
                  {sections.map(subject => (
                    <tr>
                      <td>{subject}</td>
                      <td className='text-right'>
                        <a
                          href='#'
                          className='btn btn-sm btn-info'
                          style={{ marginRight: '2px' }}
                          data-toggle='modal'
                          data-target='#modal-default'>
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

const sections = ['A', 'B']

export default Sections
