import React, {useState} from 'react'
import Modal from './Modal'
import { ReactDimmer } from 'react-dimmer';

const InputShortener = () => {
    const [isModalOpen, setModal] = useState(false);

    const handleClick = () => {
        setModal((prevState) => !prevState);
      };
    return (
        <div className='inputContainer'>
            <h1>URL <span>Shortener</span></h1>
            <div>
                <input type="text" placeholder='Paste a link to shorten it' />
                <button onClick={handleClick}>shorten</button>
            </div>

            {isModalOpen && <Modal closeModal={setModal} />}

            <ReactDimmer
            isOpen={isModalOpen}
            exitDimmer={setModal}
            zIndex={1}
            blur={0.5}
            /> 
        </div>
    )
}

export default InputShortener
