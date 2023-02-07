import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PasswordsTable from "./PasswordsTable";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



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
      

      /* set route to passwords table if logged in */

      navigate("/passwords-table");

    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  }

   /*local details*/

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
 
   useEffect(() => {
     if (localStorage.getItem("user-info")) {
       navigate("/add")
     }
   })

  //  const [details, setDetails] = useState({email: "", password: ""});

   async function submitHandler(e) 
   {
     e.preventDefault();

     console.log(email, password);

     let item = {email, password};
     let result = await fetch ("https://yarotbot.tk/login", {
      
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(item)
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result))
      navigate("/add");

  //  LoginInfo(details);
    }


  //change auth mode

  const changeAuthMode = () => {

    //! Change route when sign up form available from Dasha

    navigate("/register");
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
        <Form.Control type="email" placeholder="Enter email" onChange={e =>setEmail(e.target.value)} />
        <Form.Text className="taext-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e =>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Text className="taext-muted">
        {(inputError != "") ? (<div className="inputError">{inputError}</div>) : ""}
      </Form.Text>
      
      
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
}

export default LoginForm;

