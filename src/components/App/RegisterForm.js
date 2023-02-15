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
    if (email) {
    if (password) {
    if (password == repeatedpassword) {
      axios.post('https://yarotbot.tk/register', {
        email,
        pwd: password
      })
        .then(function (response) {
          console.log(response);
          if (response.data.code == 201) {
            navigate("/login");
          } 
          if (response.data.code == 402) {
            seterrorMessage('User already exists')
            setPassword('')
            setrepeatedpassword('')
          } else {
            seterrorMessage('Registration error')
            setPassword('')
            setrepeatedpassword('')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      seterrorMessage('Repeated password is not equal to password')
      setPassword('')
      setrepeatedpassword('')
    }
  } else {
    seterrorMessage('Enter password')
    setPassword('')
    setrepeatedpassword('')
  }
  } else {
    seterrorMessage('Enter login')
  }


  }


  
  const changeAuthType = () => {
    navigate("/login");
  }


  return (
    <Form className="form-container">
      <h3 className="text-center">Sign up</h3>
      <div className="text-center padding-down">
      Already have an account?{" "}
        <span className="link-primary" onClick={changeAuthType}>
          Log in here
        </span>
      </div>
      <h4 className='text-center text-danger'>{errorMessage}</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control value={email} onChange={(ev) => setEmail(ev.currentTarget.value)} type="text" placeholder="Enter login" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" >
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(ev) => setPassword(ev.currentTarget.value)} type="password" placeholder="Enter password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control value={repeatedpassword} onChange={(ev) => setrepeatedpassword(ev.currentTarget.value)} type="password" placeholder="Repeat Password" />
      </Form.Group>
      <Button variant="primary" type="button" onClick={sendNewUser}>
        Sign Up
      </Button>
    </Form>
  );
}

export default RegisterForm;