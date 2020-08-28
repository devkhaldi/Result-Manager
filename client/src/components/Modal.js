import React from 'react'
import ReactDom from 'react-dom'

const Modal = ({ title, children }) => {
  return ReactDom.createPortal(
    <div className='modal fade' id='modal-default'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
            <h4 className='modal-title'>{title}</h4>
          </div>
          <div className='modal-body'>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
