import React, { useState } from "react";
import "../Forgotpasswordpage/Style.css"
import { useNavigate, Link, Navigate } from "react-router-dom";
function Forgotpass() {
  const [Name, setName] = useState("");
  const [Forgotpass, setForgotpass] = useState("");
  const [Forgotpassre, setForgotpassre] = useState("");
  const Navigate = useNavigate();
  let tempone;
  function check() {
    let temp = JSON.parse(localStorage.getItem("credentials")) ?? [];
    const user = temp.find((user) => user.username === Name);
    const userIndex = temp.findIndex((user) => user.username === Name);

    if (user && userIndex !== -1) {
      if ((user && Forgotpass !== "") || Forgotpassre !== "") {
        if (Forgotpass === Forgotpassre) {
          temp[userIndex].passowrd = Forgotpass;
          localStorage.setItem("credentials", JSON.stringify(temp));

          alert("Password updated successfully!");
          Navigate("/");
        } else {
          alert("Password doesn't match please check");
        }
      } else {
        alert("Please enter password");
      }
    } else {
      alert("You are not registered");
    }
  }
  return (
    <div class="base">
      <div class="forgotdiv">
        <h1>Create a new password!!</h1>
        <div class="resetpassdiv">
          <h6 class="forgotname">Name </h6>
          <input
            class="forgotnameinput"
            type="text"
            id="Forgotname"
            name="Forgotname"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <h6 class="forgotpasswordhead">New Password</h6>
          <input
            class="forgotpassinput"
            type="Password"
            id="Forgotpass"
            name="Namesign"
            onChange={(e) => setForgotpass(e.target.value)}
          ></input>
          <h6 class="forgotpassRe">Re-enter New Password</h6>
          <input
            class="forgotpassreinput"
            type="Password"
            id="Forgotpassre"
            name="forgotpassre"
            onChange={(e) => setForgotpassre(e.target.value)}
          ></input>
          <button class="forgotcreate" onClick={() => check()}>
            Set Password
          </button>
          <button class="forgotlogin" onClick={() => Navigate("/")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Forgotpass;
