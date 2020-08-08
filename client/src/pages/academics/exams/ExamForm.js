import React from 'react'
import Modal from '../../../components/Modal'

const ExamForm = () => {
  return (
    <Modal title='Create subject'>
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
                  <select
                    className='form-control select2'
                    multiple='multiple'
                    data-placeholder='Select a State'
                    style={{ width: '100%' }}>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
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

export default ExamForm
