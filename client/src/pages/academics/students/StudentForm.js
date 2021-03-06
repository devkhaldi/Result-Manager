import React from 'react'
import Modal from '../../../components/Modal'

const StudentForm = () => {
  return (
    <Modal title='Subject form'>
      <form className='form-horizontal'>
        <div className='box-body'>
          {/* Inputs*/}
          {inputs.map(inpt => (
            <div key={inpt.id} className='row'>
              <div className='col-md-10'>
                <div className='form-group'>
                  <label className='col-sm-4 control-label'>{inpt.label}</label>
                  <div className='col-sm-8'>
                    <input type='text' id={inpt.id} className='form-control' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* modal footer */}
        <div className='box-footer'>
          <div className='row'>
            <div className='col-md-10 '>
              <div className='form-group'>
                <div className='col-sm-4 control-label'></div>
                <div className='col-sm-8'>
                  <input type='submit' className='btn btn-primary' value='Submit' />
                  <a style={{ marginLeft: '5px' }} className='btn btn-default' href='' title='Cancel'>
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

const inputs = [
  { id: 'firstName', label: 'First name' },
  { id: 'middleName', label: 'Middle name' },
  { id: 'lastName', label: 'Last name' },
  { id: 'adress', label: 'Adress' },
  { id: 'region', label: 'Region' },
  { id: 'district', label: 'District' },
  { id: 'country', label: 'Country' },
  { id: 'fatherName', label: 'Father name' },
  { id: 'fatherPhone', label: 'Father phone' },
  { id: 'motherName', label: 'Mother name' },
  { id: 'motherPhone', label: 'Mother Phone' },
  { id: 'guardianName', label: 'Guardian name' },
  { id: 'guardianPhone', label: 'Guardian phone' },
  { id: 'dateBirth', label: 'Date birth' },
  { id: 'email', label: 'Email' },
  { id: 'sex', label: 'Sex' },
  { id: 'dateJoining', label: 'Date joining' },
  { id: 'class', label: 'Class' },
  { id: 'section', label: 'Section' },
]

export default StudentForm
