import React from 'react'
import Modal from '../../../components/Modal'

const GradeForm = ({ update }) => {
  console.log(update)
  return (
    <Modal title='Subject form'>
      <form className='form-horizontal'>
        <div className='box-body'>
          {/* Grade name */}
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
  { id: 'gradeName', label: 'Grade name' },
  { id: 'markFrom', label: 'gradeFrom' },
  { id: 'markUpTo', label: 'markUpTo' },
  { id: 'comment', label: 'comment' },
]

export default GradeForm
