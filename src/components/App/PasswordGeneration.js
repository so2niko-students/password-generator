import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'




function PasswordGenerator() {

  const [password, setPassword] = useState('');
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);
  const [selectedChoices, setSelectedChoices] = useState(['lowercase', 'uppercase', 'numbers', 'symbols']);
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [errorMessage, seterrorMessage] = useState('');
  const navigate = useNavigate();
  
  const lowercaseList = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbersList = '0123456789';
  const symbolsList = "!@#$%^&*()?";

  useEffect(() => {
    generatePassword()
  }, [passwordLength]);

  const handleCheckbox = (type) => {
    let tempChoices = selectedChoices;
    if(tempChoices.includes(type)){
        const index = tempChoices.indexOf(type);
        tempChoices.splice(index,1);
    }
    else{
        tempChoices.push(type);
    }
        console.log(tempChoices);
    setSelectedChoices(tempChoices);
  }
  
  const generatePassword = () => {

    let passwordList = '';

    if (lowerCase) {
        passwordList += lowercaseList;
    }
    if (upperCase) {
        passwordList += uppercaseList;
    }
    if (numbers) {
        passwordList += numbersList;
    }
    if (symbols) {
        passwordList += symbolsList;
    }

    let currentPassword = '';
    const passwordListLength = passwordList.length;

    for (let i = 0; i < passwordLength; i++) {
      const passwordIndex = Math.floor(Math.random() * passwordListLength);
      currentPassword += passwordList[passwordIndex];
    }

    setPassword(currentPassword);
    
  }
  
  const sendPassword = () => {
    if(name) {
    axios.post('https://yarotbot.tk/postData', {
      name,
      email,
      pwd: password
    })
      .then(function (response) {
        console.log(response);
        if (response.data.code == 201) {
          navigate("/passwords-table");
        } 
        if (response.data.code == 403) {
        // not loggined + nagigate to
          seterrorMessage('You are not logined')
          navigate("/login");
        } else {
          seterrorMessage('Error. Try again later')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      seterrorMessage('Enter the name')
    }
  }

  return (
    <Form className="form-container">
      <h4 className='text-center text-danger'>{errorMessage}</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(ev) => setName(ev.currentTarget.value)} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(ev) => setEmail(ev.currentTarget.value)} type="text" placeholder="Enter email" />
      </Form.Group>
      <span>Generated password</span>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control value={password} disabled type="text" placeholder="Generated password" />
      </Form.Group>

      <Form.Label>Password length</Form.Label>
      <p style={{ marginBottom: 0 + 'rem' }}>{passwordLength}</p>
      <Form.Range min={6} max={30} step="1" defaultValue={passwordLength} onChange={(event) => setPasswordLength (event.currentTarget.value)} />
      
      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Customize your password</Form.Label>
        <Form.Check checked={symbols} disabled={selectedChoices.length === 1 && selectedChoices.includes('symbols')} onChange={() => { setSymbols(!symbols); handleCheckbox('symbols');}} type="checkbox" label=" Include symbols" />
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Check checked={numbers} disabled={selectedChoices.length === 1 && selectedChoices.includes('numbers')} onChange={() => { setNumbers(!numbers); handleCheckbox('numbers');}} type="checkbox" label="Include numbers" />
      </Form.Group>
        
      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Check checked={lowerCase} disabled={selectedChoices.length === 1 && selectedChoices.includes("lowercase")} onChange={() => { setLowerCase(!lowerCase); handleCheckbox('lowercase');}} type="checkbox" label="Include lowercase letters" />
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Check checked={upperCase} disabled={selectedChoices.length === 1 && selectedChoices.includes('uppercase')} onChange={() => { setUpperCase(!upperCase); handleCheckbox('uppercase');}} type="checkbox" label="Include uppercase letters" />
      </Form.Group>
          
      <Button onClick={generatePassword}  variant="primary" type="button">
        Generate Password
      </Button>{' '}

      <Button onClick={sendPassword} variant="success" type="button">
        Save
      </Button>
        
    </Form>
  );
}

export default PasswordGenerator;
