import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "./LoginForm";
import PasswordGenerator from "./PasswordGeneration";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function PasswordsTable() {
  window.localStorage.setItem("isLoggedIn", true);
  const [userFulldata, setUserFullData] = useState([]);
  const [allUserData, setAllUserData] = useState("");
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user-info"));

  //retrieve user data from json

  const retrieveUserData = async () => {
    const response = await axios
      .get("dataSample.json")
      // return response.data;

      .then(function (response) {
        let responseData = response.data;
       setUserFullData(responseData);
        console.log(userFulldata);
        
      });
  };

  useEffect(() => {
    const getAlluserData = async () => {
      const allUserData = await retrieveUserData();
      if (allUserData) setAllUserData(allUserData);
    };
    getAlluserData();
  }, []);

  //press add new entry button

  const switchToGeneratePwd = () => {
    navigate("/newpassword");
  };

  return (
    <div>
      <div className="table-container">
        <div className="passwords-table-header">
          <h4> Hello, <span className="userName">{userData.email}</span>!</h4>
          <Button variant="primary" type="button" onClick={switchToGeneratePwd}>
            Add new entry
          </Button>
        </div>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Website</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {userFulldata.map((user) => {
         return(
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.website}</td>
              <td>{user.email}</td>
              <td>{user.pwd}</td>
            </tr>)
          
        })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default PasswordsTable;
