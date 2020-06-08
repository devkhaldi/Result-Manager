import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Content from '../../../components/Content'
import Footer from '../../../components/Footer'

const Sections = () => {
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />
      <Content
        pageHeader='Sections managements'
        description=''
        breadcrumbs={['Home', 'sections']}
        icon='fa fa-building-o'>
        <div className='box'>
          <div className='box-header'>
            <div className='box-title'>Sections list</div>
            <div className='box-tools'>
              <button className='btn btn-sm btn-primary'>Add new</button>
            </div>
          </div>
          <div className='box-body '>
            <table className='table table-hover no-padding'>
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

const sections = ['A', 'B']

export default Sections
