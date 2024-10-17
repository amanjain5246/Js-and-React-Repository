import React, {useState } from "react";

import Login from "./login";
import Signupform from "./signupform";

function Test() {
  const [flag, setflag] = useState("a");

  function log() {
    setflag("b");
  }
  function sign() {
    setflag("c");
  }
  function button() {
    setflag("");
  }
  return (
    <div>
      {flag === "b" ? (
        <Login />
      ) : flag === "c" ? (
        <Signupform />
      ) : flag !== "b" || "c" ? (<div>
          <input type="submit" value="LOGIN" onClick={() => log()} />
          <input type="submit" value="SIGN UP" onClick={() => sign()} />
          {/* button() */}
        </div>
        
      ) : (<></>
        
      )}
    </div>
  );
}

export default Test;