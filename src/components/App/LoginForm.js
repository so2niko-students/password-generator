import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import PasswordsTable from "./PasswordsTable";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    seterrorMessage("");

    //!check if logged in --- to rewrite using data.code

    if (localStorage.isLoggedIn == "true") {
      console.log(localStorage.isLoggedIn);
      navigate("/passwords-table");
    }
  }, [email, password]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const response = await axios
        .post("https://yarotbot.tk/login", {
          email,
          pwd: password,
        })
        .then(function (response) {
          console.log(response);

          // getting email and pwd from response

          let userData = JSON.parse(response.config.data);

          //errors

          if (response.data.code === 200) {
            localStorage.setItem(
              "response-code",
              JSON.stringify(response.data)
            );
            localStorage.setItem("user-info", response.config.data);
            localStorage.setItem("isLoggedIn", true);
            navigate("/passwords-table");
            console.log("logged in");
          } else if (!response) {
            seterrorMessage("No server response");
          } else if (userData.email.length === 0 || userData.pwd.length === 0) {
            seterrorMessage("Missing username or password");
          } else if (response.data.code === 403) {
            seterrorMessage("Invalid password or login");
          } else if (response.data.code === 500) {
            seterrorMessage("Server error. Call 911");
          }
        });
      // setEmail("");
      // setPassword("");
    } catch (error) {
      console.log("check login error", error);
    }
  };

  //change auth mode

  const changeAuthMode = () => {
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
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="taext-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Text className="taext-muted">
        <div className="errorMessage">{errorMessage}</div>
      </Form.Text>

      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
}

export default LoginForm;
