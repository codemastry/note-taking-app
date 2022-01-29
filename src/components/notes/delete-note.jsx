import React from "react";
import { Modal, Button } from "react-bootstrap";
import NoteService from "../../services/note-service";


export default function DeleteNoteModal(props) {
    const _handleDelete = async () => {
        const result = await NoteService.delete(props.note.id);
        props.onSaved();
    }

    return (
        <Modal show={true} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete {props.note.title}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Cancel
                </Button>
                <Button onClick={_handleDelete} variant="danger">
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}