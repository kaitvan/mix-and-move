import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalBody,
} from 'reactstrap';
import { SimpleModalProps } from '../../Helpers/Interfaces/SimpleModalInterfaces';

const SimpleModal = ({buttonLabel, className, id, children }: SimpleModalProps): JSX.Element => {
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    return (
        <div>
        <Button className={className} id={id} onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody className='simple-modal'>
            {children}
            <button onClick={toggle} className="close-modal-button"><i className="far fa-times-circle"></i></button>
          </ModalBody>
        </Modal>
      </div>
    )
}

export default SimpleModal;