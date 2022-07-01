import React from 'react'
import './Modal.css'
import {BsXLg, BsBack} from 'react-icons/bs'

const Modal = ({closeModal}) => {
  return (
    // Modal 
    <div className='modal'>
      <div className="modal-header">
        <h3 className='modal-title'>Your Shortened Bub-URL:</h3>  
        <BsXLg
          onClick={() => {
            closeModal(false);
          }}
          className='modal-close'
        />
      </div>
      <div className="modal-body">
        {/* Form for input  */}
        <form>
          <div className='input__copy'>
            <input type='text' name='site' placeholder='bub.shortened.url' />
            <span><BsBack /></span>
          </div>
          <div className='buttons'>
            <button>Detailed Stats</button>
            <button>My URLs</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal