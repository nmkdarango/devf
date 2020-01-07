import React from 'react';
import {Modal} from 'react-bootstrap';
import MailForm from '../forms/MailForm';

function ModalMail({show, handleClose, smtpId}){
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>SMTP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MailForm onHandleCloseModal={handleClose} smtpId={smtpId} />
            </Modal.Body>
        </Modal>
    );
}

export default ModalMail;
