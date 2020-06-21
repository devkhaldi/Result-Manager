import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Footer from '../../../components/Footer'
import Boxes from './Boxes'
import QuickIcons from './QuickIcons'

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />

      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            <i className='fa fa-tachometer' style={{ marginRight: '7px' }}></i>
            Dashboard
            <small>Control panel</small>
          </h1>
        </section>
        <section className='content container-fluid'>
          <Boxes />
          <QuickIcons />
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

export default Dashboard
