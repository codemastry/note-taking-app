import React from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserService from "../../services/user-service";

export default function Register() {
    const [alert, setAlert] = React.useState({ show: false, message: '', variant: 'success' });
    const [registerInput, setRegisterInput] = React.useState({
        username: '',
        password: '',
        retypePassword: ''
    });

    const _handleChange = (event) => {
        const { name, value } = event.target;
        setRegisterInput(prevState => {
            return { ...prevState, [name]: value };
        });
    }

    const _handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setAlert(prevState => ({ ...prevState, show: false }));
            const result = await UserService.register(registerInput);
            setAlert({ variant: "success", message: "Registration successful!", show: true });
            setRegisterInput({ username: '', password: '', retypePassword: '' });
        }
        catch (error) {
            setAlert({ variant: "danger", message: error.Message, show: true });
        }
    }
    return (
        <>
            {alert.show &&
                <Alert variant={alert.variant}>{alert.message}</Alert>
            }
            <Card>
                <Card.Header>Create an account</Card.Header>
                <Card.Body>
                    <Form onSubmit={_handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" value={registerInput.username} onChange={_handleChange} placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" value={registerInput.password} onChange={_handleChange} placeholder="Password" type="password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Re-type password</Form.Label>
                            <Form.Control name="retypePassword" value={registerInput.retypePassword} onChange={_handleChange} placeholder="Re-type password" type="password" />
                        </Form.Group>
                        <Button type="submit" variant="primary">Create account</Button>
                        <Link to="/login" className="btn btn-link">Login</Link>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}