import React from 'react'
import Modal from '../../../components/Modal'

const StudentForm = () => {
  return (
    <Modal title='Subject form'>
      <form className='form-horizontal'>
        <div className='box-body'>
          <div class='nav-tabs-custom'>
            <ul class='nav nav-tabs'>
              <li class='active'>
                <a href='#tab_1' data-toggle='tab'>
                  General
                </a>
              </li>
              <li>
                <a href='#tab_2' data-toggle='tab'>
                  Academics info
                </a>
              </li>
            </ul>
            <div class='tab-content'>
              <div class='tab-pane active' id='tab_1'>
                <h1>General</h1>
              </div>

              <div class='tab-pane' id='tab_2'>
                <h1>Academics info</h1>
              </div>
            </div>
          </div>

          {/* Grade name */}

          <div className='row'>
            <div className='col-md-10'>
              <div className='form-group'>
                <label className='col-sm-4 control-label'></label>
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

export default StudentForm
