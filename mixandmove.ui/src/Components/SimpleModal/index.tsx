import React, { useState } from 'react';
import {
    Button,
    Modal,
} from 'reactstrap';
import { SimpleModalProps } from '../../Helpers/Interfaces/SimpleModalInterfaces';



const SimpleModal = ({buttonLabel, className, id}: SimpleModalProps): JSX.Element => {
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    return (
        <div>
        <Button className={className} id={id} onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle}>
          {React.cloneElement(SimpleModalProps.children)}
          <i className="far fa-times-circle" onClick={toggle}></i>
        </Modal>
      </div>
    )
}

export default SimpleModal;