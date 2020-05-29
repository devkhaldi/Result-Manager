import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import AcademicsSidebar from './components/AcademicsSidebar'
import Content from './components/Content'
import Dashboard from './pages/academics/Dashboad'
import Subjects from './pages/academics/Subjects'
import Sections from './pages/academics/Sections'
import Class from './pages/academics/Class'
import Exams from './pages/academics/Exams'
import Grade from './pages/academics/Grade'
import Students from './pages/academics/Students'
import Teachers from './pages/academics/Teachers'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/subjects' component={Subjects} />
        <Route exact path='/sections' component={Sections} />
        <Route exact path='/class' component={Class} />
        <Route exact path='/exams' component={Exams} />
        <Route exact path='/grade' component={Grade} />
        <Route exact path='/students' component={Students} />
        <Route exact path='/teachers' component={Teachers} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
