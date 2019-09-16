import React from 'react';

import {Modal,Button,Form} from 'react-bootstrap';

const OpportunityModal = ({show, handleClose, handleChangeTitle, handleChangeDescription, updateOpportunity}) => {
  return(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Opportunity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>New Opportunity Title:</Form.Label>
          <Form.Control type="text" placeholder="i.e. Java Developer" id="opportunityTitle" name="opportunityTitle" onChange={handleChangeTitle}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>New Opportunity Description:</Form.Label>
          <Form.Control type="text" placeholder="i.e. Java Developer" id="opportunityDescription" name="opportunityDescription" onChange={handleChangeDescription}/>
        </Form.Group>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={updateOpportunity}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OpportunityModal;
