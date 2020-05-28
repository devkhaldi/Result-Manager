import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/layout/Header'
import AcademicsSidebar from './components/layout/AcademicsSidebar'

function App() {
  useEffect(() => {
    console.log('Component rendred')
  }, [])
  return (
    <React.Fragment>
      <Header />
      <AcademicsSidebar />
      {/* /.control-sidebar
          Add the sidebar's background. This div must be placed
          immediately after the control sidebar */}
      <div className='control-sidebar-bg'></div>
    </React.Fragment>
  )
}

export default App
