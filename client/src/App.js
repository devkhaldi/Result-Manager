import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import './App.css'

import Dashboard from './pages/academics/dashboard/Dashboad'
import Subjects from './pages/academics/subjects/Subjects'
import Sections from './pages/academics/sections/Sections'
import Classes from './pages/academics/classes/Classes'
import Exams from './pages/academics/exams/Exams'
import Grades from './pages/academics/grades/Grades'
import Students from './pages/academics/students/Students'
import Teachers from './pages/academics/teachers/Teachers'
import Results from './pages/academics/results/Results'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/subjects' component={Subjects} />
        <Route exact path='/sections' component={Sections} />
        <Route exact path='/class' component={Classes} />
        <Route exact path='/exams' component={Exams} />
        <Route exact path='/grade' component={Grades} />
        <Route exact path='/students' component={Students} />
        <Route exact path='/teachers' component={Teachers} />
        <Route exact path='/results' component={Results} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
