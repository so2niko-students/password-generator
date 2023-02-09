import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import PasswordsTable from "./PasswordsTable";
import { useState } from "react";
import axios from 'axios'

function RegisterForm() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [repeatedpassword, setrepeatedpassword] = useState()
  const [errorMessage, seterrorMessage] = useState('')
  const navigate = useNavigate();



  function sendNewUser() {

    if (password == repeatedpassword) {
      console.log(email, password);
      axios.post('https://yarotbot.tk/register', {
        email,
        pwd: password
      })
        .then(function (response) {
          console.log(response);
          if (response.data.code == 201) {
            navigate("/login");
          } else {
            seterrorMessage('Registation error')
            setPassword('')
            setrepeatedpassword('')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }


  return (
    <Form className="form-container">
      <h3 className="text-center">Sign up</h3>
      <h4 className='text-center text-danger'>{errorMessage}</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(ev) => setEmail(ev.currentTarget.value)} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(ev) => setPassword(ev.currentTarget.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control value={repeatedpassword} onChange={(ev) => setrepeatedpassword(ev.currentTarget.value)} type="password" placeholder=" Repeat Password" />
      </Form.Group>
      <Button variant="primary" type="button" onClick={sendNewUser}>
        Submit
      </Button>
    </Form>
  );
}

export default RegisterForm;