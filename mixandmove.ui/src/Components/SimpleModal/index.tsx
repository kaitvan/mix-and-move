import React, { useState } from 'react';
import {
    Button,
    Modal,
} from 'reactstrap';
import { SimpleModalProps } from '../../Helpers/Interfaces/SimpleModalInterfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SimpleModal = ({buttonLabel, className, id, children }: SimpleModalProps): JSX.Element => {
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    return (
        <div>
        <Button className={className} id={id} onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle}>
          {children}
          <FontAwesomeIcon icon="times-circle" />
        </Modal>
      </div>
    )
}

export default SimpleModal;