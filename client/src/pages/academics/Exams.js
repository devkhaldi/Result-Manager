import React from 'react'
import Header from '../../components/Header'
import AcademicsSidebar from '../../components/AcademicsSidebar'
import Content from '../../components/Content'
import Footer from '../../components/Footer'

const displayMessage = () => {
  console.log({ message: 'Bonour tout le monde !' })
}

const Exams = () => {
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />
      <Content
        pageHeader='Dashboard'
        description='Control Panel'
        breadcrumbs={['Home', 'Class']}
        icon='fa fa-tachometer'>
        <h1>Exams</h1>
      </Content>
      <Footer />
      {/* /.control-sidebar
          Add the sidebar's background. This div must be placed
          immediately after the control sidebar */}
      <div className='control-sidebar-bg'></div>
    </React.Fragment>
  )
}

export default Exams
