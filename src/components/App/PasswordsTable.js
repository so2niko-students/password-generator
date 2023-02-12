import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "./LoginForm"


// const navigate = useNavigate();

function PasswordsTable() {
  const navigate = useNavigate();

  window.localStorage.setItem("isLoggedIn", true);

// useEffect(() => {
//   let userEmail = sessionStorage.getItem("email");
//   if(userEmail === "" || userEmail === null){
//     navigate("/login");
//   }
// }, [])



  /*check if logged in */

  // useEffect(() => {
  //   if (!localStorage.getItem("user-info")) {
  //     navigate("/register");
  //   }
  // });

  return (
    <div>
passwords table
    </div>
  )

}
export default PasswordsTable;

