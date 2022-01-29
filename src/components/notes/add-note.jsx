import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import NoteService from "../../services/note-service";


export default function AddNoteModal(props) {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const _handleTitleChange = (event) => setTitle(event.target.value);
    const _handleContentChange = (value) => setContent(value);

    const _save = async () => {
        const result = await NoteService.create({ title, content });
        props.onSaved();
    }

    return (
        <Modal show={true} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Take a note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Control value={title} onChange={_handleTitleChange} name="title" placeholder="Title" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <ReactQuill theme="snow" value={content} onChange={_handleContentChange} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Cancel
                </Button>
                <Button onClick={_save} variant="primary">
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}