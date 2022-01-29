import React from "react";
import { InputGroup, Button, Card, Col, Container, FormControl, Row } from "react-bootstrap";
import NoteService from "../../services/note-service";
import AddNoteModal from "./add-note";
import DeleteNoteModal from "./delete-note";
import EditNoteModal from "./edit-note";

export default function Notes() {
    const [notes, setNotes] = React.useState([]);
    const [showAddModal, setShowAddmodal] = React.useState(false);
    const [showEditModal, setShowEditmodal] = React.useState(false);
    const [selectedNoteForEdit, setselectedNoteForEdit] = React.useState(null);
    const [showDeleteModal, setShowDeletemodal] = React.useState(false);
    const [selectedNoteForDelete, setselectedNoteForDelete] = React.useState(null);

    React.useEffect(() => {
        _loadNotes();
    }, []);

    const _loadNotes = async () => {
        const notes = await NoteService.all();
        setNotes(notes);
    }

    const _toggleShowAddModal = () => setShowAddmodal(!showAddModal);
    const _toggleShowEditModal = () => setShowEditmodal(!showEditModal);
    const _toggleShowDeleteModal = () => setShowDeletemodal(!showDeleteModal);

    const _editNote = async (note) => {
        setselectedNoteForEdit(note);
        setShowEditmodal(true);
    }

    const _deleteNote = async (note) => {
        setselectedNoteForDelete(note);
        setShowDeletemodal(true);
    }

    const _onSaved = async () => {
        setShowAddmodal(false);
        setShowEditmodal(false);
        setShowDeletemodal(false);
        _loadNotes();
    }

    const _extractText = (s) => {
        var span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    };
    return (
        <>
            <Container>
                <div className="text-center mb-3">
                    <button onClick={_toggleShowAddModal} className="btn btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#addNoteModal">
                        <i className="bi bi-plus-lg"></i> Take a note
                    </button>
                </div>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search..."
                        aria-label="Search..."
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="secondary" id="basic-addon2"><i className="bi bi-search"></i> Search</Button>
                </InputGroup>
                <Row>
                    {notes.map((note, i) =>
                        <Col md="4" sm="6" key={i}>
                            <Card className="mb-3 note-card">
                                <Card.Body>
                                    <Card.Title onClick={() => _editNote(note)} >{note.title}</Card.Title>
                                    <Card.Body onClick={() => _editNote(note)} >{_extractText(note.content)}</Card.Body>
                                    <Button onClick={() => _deleteNote(note)} variant="light" size="sm">
                                        <i className="bi bi-trash-fill"></i> Delete
                                    </Button>
                                    {/* <Button className="ms-1" variant="outline-secondary" size="sm">
                                        <i className="bi bi-pencil-square"></i> Edit
                                    </Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>

                {notes.length === 0 && <NoNote />}
            </Container>

            {showAddModal && <AddNoteModal onClose={_toggleShowAddModal} onSaved={_onSaved} />}
            {showEditModal && <EditNoteModal note={selectedNoteForEdit} onClose={_toggleShowEditModal} onSaved={_onSaved} />}
            {showDeleteModal && <DeleteNoteModal note={selectedNoteForDelete} onClose={_toggleShowDeleteModal} onSaved={_onSaved} />}
        </>
    );
}

const NoNote = function () {
    return (
        <>
            <p className="text-center no-note">You dont have any note. Click "Take a note" to add a new one</p>
        </>
    )
}