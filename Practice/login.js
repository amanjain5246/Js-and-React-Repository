//it is login page 
import React, { Component, useState } from 'react';
import Test from './Test';
import Calculator from './Calculator';
function Login () {
 const [username, setusername] = useState("");
 const [password, setpassword] = useState("");
const [ shift, setshift] = useState("")
const [go, setgo]= useState("");
  function check() {
    if (username=== "Aman"&& password ==="123"){
      setshift("yes")
    }
  }
  function back(){
    setgo("back") 
  }

        return (<div>{go ==="back" ? (<Test/>): username ==="Aman" && password ==="123" ? (<Calculator/>) : (<div>
            
                <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => setusername(e.target.value)}
        //   onChange={(e) => setfirstvalue(e.target.value)}
          placeholder="enter your username."
        />
        <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => setpassword(e.target.value)}
        placeholder="enter your password."
      />
        <input type="submit" value="LOGIN" onClick={() => check()} />
        <input type="submit" value="BACK" onClick={() => back()} />
            </div>)}</div>
        );
    }


export default Login;