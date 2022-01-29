import React from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserService from "../../services/user-service";

export default function Login() {
    const [alert, setAlert] = React.useState({ show: false, message: '', variant: 'success' });
    const [loginInput, setLoginInput] = React.useState({
        username: '',
        password: '',
    });

    const _handleChange = (event) => {
        const { name, value } = event.target;
        setLoginInput(prevState => {
            return { ...prevState, [name]: value };
        });
    }

    const _handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setAlert(prevState => ({ ...prevState, show: false }));
            const result = await UserService.login(loginInput);
            localStorage.setItem("token", result.token);
            localStorage.setItem("username", result.username);
            setAlert({ variant: "success", message: "Login successful!", show: true });
            setLoginInput({ username: '', password: '' });
            window.location = "/";
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
                <Card.Header>Sign in to note taking app</Card.Header>
                <Card.Body>
                    <Form onSubmit={_handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" value={loginInput.username} onChange={_handleChange} placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" value={loginInput.password} onChange={_handleChange} placeholder="Password" type="password" />
                        </Form.Group>
                        <Button type="submit" variant="primary">Login</Button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}