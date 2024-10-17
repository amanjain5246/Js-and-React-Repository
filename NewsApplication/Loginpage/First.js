import React, { useState } from "react";
import "../Loginpage/Style.css";
import Home from "../Homepage/Home";
import Sign from "../Signuppage/Sign";
import eye from "../Images/1952631.jpg";
import credentials from "../Signuppage/Sign";
import key from "../Signuppage/Sign";
import { useNavigate, Link } from "react-router-dom";

function First() {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [visibility, setvisibility] = useState("no");
  let arr = [];
  let store;
  let storing;
  let stored;
  let sto;
  let tempone = [];

  const navigate = useNavigate();
  function checkValidation() {
    let tempone = JSON.parse(localStorage.getItem("credentials")) ?? [];
    console.log("tempone", tempone);

    const user = tempone.find((user) => user.username === Name);

    if (user) {
      if (user.passowrd === Password) {
        navigate("/Home");
      } else {
        setPassword("");

        alert("Password is incorrect");
      }
    } else {
      setName("");
      setPassword("");
      alert("You are not registered");
    }
  }

  function passvisibility() {
    if (visibility === "no") {
      setvisibility("yes");
    }
    if (visibility === "yes") {
      setvisibility("no");
    }
  }

  function gosignup() {
    setError("no");
  }

  return (
    <div>
      <div class="base">
        <div class="login">
          <h1>Welcome!</h1>
          <h3 class="subheading">Sign in to your account</h3>
          <div class="logindetails">
            <h6 class="usernameloginname">Name</h6>
            <input
              class="inputbox"
              value={Name}
              type="text"
              id="Name"
              name="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <h6 class="usernameloginpass">Password</h6>
            <div class="eyeimagefirst">
              <img
                src={eye}
                alt="eye"
                width="20px"
                height="20px"
                onClick={() => passvisibility()}
              />
            </div>
            <input
              class="inputbox"
              type={visibility === "yes" ? "text" : "password"}
              value={Password}
              id="Password"
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />
            <input class="checkbox" type="checkbox" name="remember"></input>
            <h5 class="remember">Remember me?</h5>
            <p class="forgotpassword" onClick={() => navigate("/Forgotpass")}>
              forgot password?
            </p>
            <button class="loginbutton" onClick={() => checkValidation()}>
              login
            </button>
            <button class="registeraccount" onClick={() => navigate("/Sign")}>
              Don't have account?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
