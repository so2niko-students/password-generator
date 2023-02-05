import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import PasswordsTable from "./PasswordsTable";
import { useState } from "react";
import axios from 'axios'

function RegisterForm() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

//     const addNewUser = async (newUser) => {
//   try {
//     const response = await axios.post('/users', newUser)
//     return response.data
//   } catch (err) {
//     console.error(err.toJSON())
//   }
// }
// addNewUser({ firstName: 'John', lastName: 'Smith' })


  return (
      <Form className="form-container">
      <h3 className="text-center">Sign up</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value = {email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value = {password} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control type="password" placeholder=" Repeat Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RegisterForm;