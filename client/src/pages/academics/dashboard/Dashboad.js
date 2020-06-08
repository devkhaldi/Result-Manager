import React from 'react'
import Header from '../../../components/Header'
import AcademicsSidebar from '../../../components/AcademicsSidebar'
import Content from '../../../components/Content'
import Footer from '../../../components/Footer'
import Boxes from './Boxes'
import QuickIcons from './QuickIcons'

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />
      <Content
        pageHeader='Dashboard'
        description='Control Panel'
        breadcrumbs={['Home', 'Dashboard']}
        icon='fa fa-tachometer'>
        <Boxes />
        <QuickIcons />
      </Content>
      <Footer />
      {/* /.control-sidebar
          Add the sidebar's background. This div must be placed
          immediately after the control sidebar */}
      <div className='control-sidebar-bg'></div>
    </React.Fragment>
  )
}

export default Dashboard
