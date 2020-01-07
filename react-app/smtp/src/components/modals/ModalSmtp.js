import React from 'react';
import {Modal} from 'react-bootstrap';
import SmtpForm from '../forms/SmtpForm';

function ModalSmtp({show, handleClose, userId}){
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>SMTP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SmtpForm onHandleCloseModal={handleClose} userId={userId} />
            </Modal.Body>
        </Modal>
    );
}

export default ModalSmtp;