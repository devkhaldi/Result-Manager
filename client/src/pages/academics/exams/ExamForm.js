import React, { useState } from 'react'
import Modal from '../../../components/Modal'
import MultiSelect from 'react-multi-select-component'

const ExamForm = ({ update }) => {
  console.log(update)
  // Control form input
  const [name, setName] = useState(update !== null ? update.name : '')
  const [date, setDate] = useState(update ? update.date : '')
  const [classe, setClasse] = useState([])
  const published = useState(false)

  // classes fetched from database
  const options = [
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
  ]
  return (
    <Modal title='Subject Form'>
      <form className='form-horizontal'>
        <div className='box-body'>
          {/* Exam name input */}
          <div className='row'>
            <div className='col-md-10'>
              <div className='form-group'>
                <label className='col-sm-4 control-label'>Exam name</label>
                <div className='col-sm-8'>
                  <input type='text' className='form-control' />
                </div>
              </div>
            </div>
          </div>
          {/* Exam date */}
          <div className='row'>
            <div className='col-md-10'>
              <div className='form-group'>
                <label className='col-sm-4 control-label'>Exam date</label>
                <div className='col-sm-8'>
                  <div className='input-group date'>
                    <div className='input-group-addon'>
                      <i className='fa fa-calendar'></i>
                    </div>
                    <input type='text' className='form-control' id='datepicker' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Select class */}
          <div className='row'>
            <div className='col-md-10'>
              <div className='form-group'>
                <label className='col-sm-4 control-label'>Select class</label>
                <div className='col-sm-8'>
                  <MultiSelect
                    options={options}
                    value={classe}
                    onChange={setClasse}
                    labelledBy={'Select'}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Status */}
          <div className='row'>
            <div className='col-md-10'>
              <div className='form-group'>
                <label className='col-sm-4 control-label'>Status</label>
                <div className='col-sm-8'>
                  <select className='form-control'>
                    <option value='false'>Unpublished</option>
                    <option value='true'>Published</option>
                  </select>
                </div>
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

export default ExamForm
