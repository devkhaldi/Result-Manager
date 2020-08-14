import React from 'react'
import Modal from '../../../components/Modal'

const SectionForm = ({ update }) => {
  return (
    <Modal title='Section form'>
      <form className='form-horizontal'>
        <div className='box-body'>
          {/* Section name */}
          <div className='row'>
            <div className='col-md-10'>
              <div className='form-group'>
                <label className='col-sm-4 control-label'>Section name</label>
                <div className='col-sm-8'>
                  <input type='text' className='form-control' />
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

export default SectionForm
