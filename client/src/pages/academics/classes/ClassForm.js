import React from 'react'
import Modal from '../../../components/Modal'

const ClassForm = ({ update }) => {
  console.log(update)
  return (
    <React.Fragment>
      {update ? (
        <Modal title='update'>
          <h1>Update 1</h1>
        </Modal>
      ) : (
        <Modal title='create'>
          <h1>Create</h1>
        </Modal>
      )}
    </React.Fragment>
  )
}

export default ClassForm
