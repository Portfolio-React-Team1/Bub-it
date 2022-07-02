import React, {useState, useRef} from 'react'
import './Modal.css'
import {BsXLg, BsBack} from 'react-icons/bs'

const Modal = ({closeModal}) => {
  const handleCopy = () => {
    const textCopy = document.getElementById('url')
    textCopy.select()
    textCopy.setSelectionRange(0, 9999)
    alert(`Copied`)
  }
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
            <input readOnly type='text' name='site' placeholder='bub.shortened.url' value='url copied' id='url'/>
            <span><BsBack onClick={handleCopy}/></span>
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