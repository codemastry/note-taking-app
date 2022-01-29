import React from "react";
import { Alert, Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Notes() {
    const [showAddModal, setShowAddmodal] = React.useState(false);
    const [showEditModal, setShowEditmodal] = React.useState(false);

    const _toggleShowAddModal = () => {
        setShowAddmodal(!showAddModal);
    }

    const _toggleShowEditModal = () => {
        setShowEditmodal(!showEditModal);
    }
    return (
        <>
            <Container>
                <div className="text-center mb-3">
                    <button onClick={_toggleShowAddModal} className="btn btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#addNoteModal">
                        <i className="bi bi-plus-lg"></i> Take a note
                    </button>
                </div>
                <Row>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i =>
                        <Col md="4" sm="6" key={i}>
                            <Card onClick={_toggleShowEditModal} className="mb-3 note-card">
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="light" size="sm">
                                        <i className="bi bi-trash-fill"></i> Delete
                                    </Button>
                                    <Button className="ms-1" variant="outline-secondary" size="sm">
                                        <i className="bi bi-pencil-square"></i> Edit
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>

            {showAddModal && <AddModal onClose={_toggleShowAddModal} />}
            {showEditModal && <EditModal onClose={_toggleShowEditModal} />}
        </>
    );
}


function AddModal(props) {
    return (
        <Modal show={true} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Take a note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Control name="title" placeholder="Title" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control rows="5" as="textarea" name="content" placeholder="Start typing..." />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={props.onClose}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}


function EditModal(props) {
    return (
        <Modal show={true} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div dangerouslySetInnerHTML={props.content}></div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.onClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}