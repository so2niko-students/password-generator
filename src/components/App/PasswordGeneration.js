import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function PasswordGenerator() {

  const [password, setPassword] = useState('');
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [passwordLength, setPasswordLength] =useState(8)


  return (
    <Form className="form-container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password Generator</Form.Label>
        <Form.Control disabled type="text" placeholder="Generated password" />
      </Form.Group>

      <Form.Label>Password length</Form.Label>
      <p style={{marginBottom: 0 + 'rem'}}>6</p>
      <Form.Range min="6" max="30" step="1" />
      
      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Customize your password</Form.Label>
        <Form.Check checked={symbols} onchange={() => setSymbols (!symbols)} type="checkbox" label=" Include symbols" />
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Check checked={numbers} onchange={() => setNumbers (!numbers)} type="checkbox" label="Include numbers" />
      </Form.Group>
        
      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Check checked={lowerCase} onchange={() => setLowerCase (!lowerCase)} type="checkbox" label="Include lowercase letters" />
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Check checked={upperCase} onchange={() => setUpperCase (!upperCase)} type="checkbox" label="Include uppercase letters" />
      </Form.Group>
          
      <Button variant="primary" type="submit">
        Generate Password
      </Button>{' '}

      <Button variant="success" type="submit">
        Save
      </Button>
        
    </Form>
  );
}

export default PasswordGenerator;