import React from 'react';
import {Form, Container, Row, Col, Button} from 'react-bootstrap';
import firebase from '../../firebase';


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            usersRef: firebase.database().ref("users")


        }
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((createdUser) => {
            console.log(createdUser)
        })
        .catch((error) => {
            console.log((error))
        })
    }

    saveUser = (createdUser) => {
        return this.state.usersRef.child(createdUser.user.uid)
        .set({
            name: createdUser.user.displayName
        })
    }

    render() {
        console.log(`username: ${this.state.username}`)
        return (
            <>
            <Container>
                <Row>
                    <Col ></Col>
                    <Col xs={6}>
                        {/* <h1>Register!</h1>
                        <br />
                        {this.state.username}
                        <br />
                        {this.state.email}
                        <br />
                        {this.state.password}
                        <br />
                        {this.state.passwordConfirmation}
                        <br /> */}
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <div>Sign Up Now!</div>
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="username" type="text" placeholder="username" onChange={this.handleChange} />
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="name@example.com" onChange={this.handleChange} />
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control name="passwordConfirmation" type="password" placeholder="Confirm Password" onChange={this.handleChange}/>
                                <br />
                                <Button block type="submit">Submit</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col ></Col>
                </Row>
            </Container>
            </>
        );
    }
}


Register.propTypes = {
    
};

export default Register
