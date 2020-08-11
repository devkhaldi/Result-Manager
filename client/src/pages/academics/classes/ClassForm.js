import React, { useState } from 'react'
import Modal from '../../../components/Modal'
import MultiSelect from 'react-multi-select-component'

const ClassForm = ({ update }) => {
  console.log(update)

  console.log('convert')
  console.log(convertSubjects(['english', 'test']))

  // Control form input
  const [title, setTitle] = useState(update ? update.title : '')
  const [subjects, setSubjects] = useState(update ? convertSubjects(update.subjects) : [])
  const [optionalSubjects, setOptionalSubjects] = useState(
    update ? convertSubjects(update.optionalSubjects) : []
  )

  // Subjects fetched from database
  const options = [
    { label: 'Bangala', value: 'bangala' },
    { label: 'English', value: 'english' },
    { label: 'Computer', value: 'computer' },
    { label: 'Math', value: 'math' },
  ]

  console.log(optionalSubjects)
  return (
    <Modal title='Class Form'>
      <form className='form-horizontal'>
        <div className='box-body'>
          {/* Class title input */}
          <div className='row'>
            <div className='col-md-10'>
              <div className='form-group'>
                <label className='col-sm-4 control-label'>Class title</label>
                <div className='col-sm-8'>
                  <input
                    value={update ? update.title : ''}
                    type='text'
                    className='form-control'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Class subjects input */}
          <div className='row'>
            <div className='col-md-10'>
              <div className='form-group'>
                <label className='col-sm-4 control-label'>Subjects</label>
                <div className='col-sm-8'>
                  <MultiSelect
                    options={options}
                    value={subjects}
                    onChange={setSubjects}
                    labelledBy={'Select'}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Class optional subjects */}
          <div className='row'>
            <div className='col-md-10'>
              <div className='form-group'>
                <label className='col-sm-4 control-label'>Optional subjects</label>
                <div className='col-sm-8'>
                  <MultiSelect
                    options={options}
                    value={optionalSubjects}
                    onChange={setOptionalSubjects}
                    labelledBy={'Select'}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* modal footer */}
          <div className='box-footer'>
            <div className='row'>
              <div className='col-md-10 '>
                <div className='form-group'>
                  <div className='col-sm-4 control-label'></div>
                  <div className='col-sm-8'>
                    <input type='submit' className='btn btn-primary' value='Submit' />
                    <a
                      style={{ marginLeft: '5px' }}
                      className='btn btn-default'
                      href=''
                      title='Cancel'>
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  )
}

// convert subjects to options for MultiSelect
// ['english', ...] => [{label: English, value : English},..]
const convertSubjects = subjects => {
  return subjects.map(subject => ({
    label: capitalize(subject),
    value: subject,
  }))
}

const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default ClassForm
