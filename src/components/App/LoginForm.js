import { useState } from "react";
import { useNavigate } from "react-router-dom";


import PasswordsTable from "./PasswordsTable";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate } from "react-router-dom";



function LoginForm({Login, error}) {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  
  const [user, setUser] = useState({name: "", email: ""});
  const [inputError,setError] = useState("");
  const navigate = useNavigate();

  const LoginInfo = info => {
    console.log(info);

    if (info.email == adminUser.email && info.password == adminUser.password) {
      console.log("Logged in");
      

      /* set route to passwords table, if logged in */
      navigate("/passwords-table");

      // setUser({
        

      // })
    } else {
      console.log("Details do not match");
      setError("Details do not match");

    }

  }


 



    
  


  
  
   /*local details*/

   const [details, setDetails] = useState({email: "", password: ""});

   const submitHandler = e => {
     e.preventDefault();

   LoginInfo(details);
 }





  //change auth mode

  let [authMode, setAuthMode] = useState("login");
  const changeAuthMode = () => {
    setAuthMode(authMode === "login" ? "signup" : "login");
  };

  return (
    <Form className="form-container" onSubmit={submitHandler}>
      <h3 className="text-center">Log In</h3>
      <div className="text-center padding-down">
        Not registered yet?{" "}
        <span className="link-primary" onClick={changeAuthMode}>
          Sign Up
        </span>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e =>setDetails({...details, email: e.target.value})} value = {details.email} />
        <Form.Text className="taext-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e =>setDetails({...details, password: e.target.value})} value = {details.password}/>
      </Form.Group>
      
      {(inputError != "") ? (<div className="inputError">{inputError}</div>) : ""}
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;

