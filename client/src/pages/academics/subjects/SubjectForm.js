import React from 'react'
import Modal from '../../../components/Modal'

const SubjectForm = () => {
  return (
    <Modal title='Create subject'>
      <form className='form-horizontal'>
        <div className='box-body'>
          <div className='row'>
            <div className='col-md-10'>
              <div className='form-group'>
                <label className='col-sm-4 control-label'>Subject name</label>
                <div className='col-sm-8'>
                  <input type='text' className='form-control' />
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default SubjectForm
