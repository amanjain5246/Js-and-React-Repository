import React, { useState } from "react";

function Test() {
  // let abc = "abc";
  function Tes() {
    setnum("");
    setnumnew("");
    setope();
    setres("");
  }
  function backspace() {
    if (ope) {
      // Remove last character from numnew
      setnumnew((prev) => prev.slice(0, -1));
    } else {
      // Remove last character from num
      setnum((prev) => prev.slice(0, -1));
    }
  }
  let solution = 0;
  const [num, setnum] = useState("");
  const [numnew, setnumnew] = useState("");
  const [ope, setope] = useState();
  const [res, setres] = useState("");

  // function abcdef() {
  //   <label>{res}</label>;
  // }
  function Calc() {
    if (ope === "+") {
      solution = Number(num) + Number(numnew);
      console.log(num, numnew);

      setres(solution);
    }
    if (ope === "-") {
      solution = Number(num) - Number(numnew);
      setres(solution);
    }
    if (ope === "*") {
      solution = Number(num) * Number(numnew);
      setres(solution);
    }
    if (ope === "/") {
      solution = Number(num) / Number(numnew);
      setres(solution);
    }
    setnum("");
    setnumnew("");
  }

  function Operator(val) {
    if (val === "*") {
      setope("*");
    }
    if (val === "/") {
      setope("/");
    }
    if (val === "+") {
      setope("+");
    }
    if (val === "-") {
      setope("-");
    }
    if (val === "=") {
      Calc();
      console.log(res);
      setope("");
    }
  }

  function Numb(val) {
    // if (res) {
    //   setnum(res);
    // }
    if (res) {
      setnum(res);
      setnumnew((prevnum) => prevnum + val);
      setres("");
    } else if (ope) {
      // setnum(res)
      setnumnew((prevnum) => prevnum + val);
      setres("");
    } else {
      setnum((prevnum) => prevnum + val);
    }

    // if (val === "1") {
    //   if (ope || res) {
    //     setnumnew((prevnum) => prevnum + "1");
    //     setres("");
    //   } else {
    //     setnum((prevnum) => prevnum + "1");
    //   }
    // }
    // if (val === "2") {
    //   if (ope || res) {
    //     setnumnew((prevnum) => prevnum + "2");
    //     setres("");
    //   } else {
    //     setnum((prevnum) => prevnum + "2");
    //   }
    // }
    // if (val === "3") {
    //   if (ope || res) {
    //     setnumnew((prevnum) => prevnum + "3");
    //     setres("");
    //   } else {
    //     setnum((prevnum) => prevnum + "3");
    //   }
    // }
    // if (val === "4") {
    //   if (ope || res) {
    //     setnumnew((prevnum) => prevnum + "4");
    //     setres("");
    //   } else {
    //     setnum((prevnum) => prevnum + "4");
    //   }
    // }
    // if (val === "5") {
    //   if (ope || res) {
    //     setnumnew((prevnum) => prevnum + "5");
    //     setres("");
    //   } else {
    //     setnum((prevnum) => prevnum + "5");
    //   }
    // }
    // if (val === "6") {
    //   if (ope || res) {
    //     setnumnew((prevnum) => prevnum + "6");
    //     setres("");
    //   } else {
    //     setnum((prevnum) => prevnum + "6");
    //   }
    // }
    // if (val === "7") {
    //   if (ope || res) {
    //     setnumnew((prevnum) => prevnum + "7");
    //     setres("");
    //   } else {
    //     setnum((prevnum) => prevnum + "7");
    //   }
    // }
    // if (val === "8") {
    //   if (ope || res) {
    //     setnumnew((prevnum) => prevnum + "8");
    //     setres("");
    //   } else {
    //     setnum((prevnum) => prevnum + "8");
    //   }
    // }
    // if (val === "9") {
    //   if (ope || res) {
    //     setnumnew((prevnum) => prevnum + "9");

    //     setres("");
    //   } else {
    //     setnum((prevnum) => prevnum + "9");
    //   }
    // }
    // if (val === "0") {
    //   if (ope || res) {
    //     setnumnew((prevnum) => prevnum + "0");
    //     setres("");
    //   } else {
    //     setnum((prevnum) => prevnum + "0");
  }
  // }
  // }

  return (
    <div
      style={{
        height: "100vh", // Ensure the div takes full height
        backgroundImage: "linear-gradient(to bottom right,#98FB98, #FFFACD)",
      }}
    >
      <div>
        <div
          style={{ width: "40%", padding: "10px", backgroundColor: "#3366CC" }}
        >
          <br />
          <label>
            {num} {ope} {numnew}
          </label>
          <label>{res}</label>
        </div>

        <div
          style={{
            padding: "10px",
            paddingleft: "30%",
            width: "40%",
            backgroundColor: "#0052cc",
            lineHeight: "120px",
          }}
        >
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "2px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="C"
            onClick={() => Tes()}
          />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="<--"
            onClick={() => backspace()}
          />
          <br />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="7"
            onClick={() => Numb("7")}
          />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="8"
            onClick={() => Numb("8")}
          />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="9"
            onClick={() => Numb("9")}
          />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="*"
            onClick={() => Operator("*")}
          />
          <br />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="4"
            onClick={() => Numb("4")}
          />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="5"
            onClick={() => Numb("5")}
          />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="6"
            onClick={() => Numb("6")}
          />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="/"
            onClick={() => Operator("/")}
          />
          <br />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="1"
            onClick={() => Numb("1")}
          />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="2"
            onClick={() => Numb("2")}
          />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="3"
            onClick={() => Numb("3")}
          />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "10%",
              textalign: "center",
            }}
            value="-"
            onClick={() => Operator("-")}
          />
          <br />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "33%",
              textalign: "center",
            }}
            value="0"
            onClick={() => Numb("0")}
          />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              // paddingleft: "50px",
              paddingleft: "100px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#D95368",
              float: "33%",
              textalign: "center",
            }}
            value="="
            onClick={() => Operator("=")}
          />
          <input
            type="submit"
            style={{
              margin: "10px",
              borderRadius: "5px",
              padding: "30px",
              fontsize: "20px",
              // border: "20px",
              bordercolor: "blue",
              backgroundColor: "#C8A9E8",
              float: "33%",
              textalign: "center",
            }}
            value="+"
            onClick={() => Operator("+")}
          />
        </div>
      </div>
    </div>
  );
  // }
}

export default Test;
