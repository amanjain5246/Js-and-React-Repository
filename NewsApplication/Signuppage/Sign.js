import React, { useState } from "react";
import "../Signuppage/Style.css";
import eye from "../Images/1952631.jpg";
import Home from "../Homepage/Home";
import First from "../Loginpage/First";
import { useNavigate, Link, json } from "react-router-dom";

function Sign() {
  const [Namesign, setNamesign] = useState();
  const [Email, setEmail] = useState("");
  const [Passwordsign, setPasswordsign] = useState();
  const [Errorsign, setErrorsign] = useState("");
  const [visibility, setvisibility] = useState("no");
  const [Login, setLogin] = useState("");
  const regex = /^[a-zA-Z0-9]*$/;
  const regexpass = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();

  let storingarr = [];
  let storingobj = {};
  let objstringified;
  let tempone = [];
  let myobjtool = {};
  function Accountcreated() {
    const regex = /^[a-zA-Z0-9]*$/;
    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(Namesign)) {
      console.log("name is not properly filled");
      alert("name is not properly filled");
    } else if (!Regex.test(Email)) {
      console.log("email id is not filled properly");
      alert("Please fill you email id correctly");
    } else if (Passwordsign === "") {
      console.log("please enter a password");
      alert("passowrd is empty, Please Fill");
    } else {
      console.log("localStorage", localStorage);

      let tempone = JSON.parse(localStorage.getItem("credentials")) ?? [];
      console.log("temmpone", tempone);
      if (tempone && tempone.some((user) => user.username === Namesign)) {
        alert("username already exist!!");
        return;
      }
      storinglocal();
      navigate("/Home");
    }
  }
  function storinglocal() {
    let temp = JSON.parse(localStorage.getItem("credentials")) ?? [];
    myobjtool = {
      username: Namesign,
      passowrd: Passwordsign,
    };
    console.log(temp);

    temp.push(myobjtool);
    localStorage.setItem("credentials", JSON.stringify(temp));
  }

  function passvisibility() {
    if (visibility === "no") {
      setvisibility("yes");
    }
    if (visibility === "yes") {
      setvisibility("no");
    }
  }
  function gologin() {
    setLogin("yes");
  }
  return (
    <div>
      <div class="base">
        <div class="login">
          <h1>Create Account!</h1>
          <div>
            <h6 class="username">Name</h6>
            <input
              class="inputbox"
              type="text"
              id="Namesign"
              name="Namesign"
              onChange={(e) => setNamesign(e.target.value)}
            ></input>
            <h6 class="username">E-mail</h6>
            <input
              class="inputbox"
              type="email"
              id="Email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <h6 class="signpass">Password</h6>

            <div class="eyeimagesign">
              <img
                src={eye}
                alt="eye"
                width="20px"
                height="20px"
                onClick={() => passvisibility()}
              />
            </div>
            <input
              class="inputboxpass"
              type={visibility === "yes" ? "text" : "password"}
              id="Passwordsign"
              name="Passwordsign"
              onChange={(e) => setPasswordsign(e.target.value)}
            ></input>

            <button class="createbutton" onClick={() => Accountcreated()}>
              Create
            </button>
            <button class="haveaccount" onClick={() => navigate("/")}>
              Already have account?
            </button>
          </div>
          <br />

          <br />
          <br />

          <h6 class="subheading">Or create account using social media!</h6>
        </div>
      </div>
    </div>
  );
}

export default Sign;
