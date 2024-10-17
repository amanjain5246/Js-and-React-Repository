import React, { Component, useState } from "react";

function Calculator() {
  const [firstvalue, setfirstvalue] = useState();
  const [secondvalue, setsecondvalue] = useState();
  const [operator, setoperator] = useState();
  let operation = 0;
  const [answer, setanswer] = useState();
  function Calculation() {
    console.log(firstvalue, firstvalue.type);
    console.log(secondvalue, secondvalue.type);
    console.log(operator);

    if (operator === "+") {
      operation = Number(firstvalue) + Number(secondvalue);
      update();
    }
    if (operator === "-") {
      operation = Number(firstvalue) - Number(secondvalue);
      update();
    }
    if (operator === "*") {
      operation = Number(firstvalue) * Number(secondvalue);
      update();
    }
    if (operator === "/") {
      operation = Number(firstvalue) / Number(secondvalue);
      update();
    }
    console.log(answer);
  }
  function update() {
    
    setanswer(operation);
    // console.log(answer); 
  }
  return (
    <>
      <div>
        <input
          type="number"
          id="firstvalue"
          name="firstvalue"
          onChange={(e) => setfirstvalue(e.target.value)}
          placeholder="enter your first number."
        />
        <br />
        <input
          type="expression"
          id="operator"
          name="operator"
          onChange={(e) => setoperator(e.target.value)}
          placeholder="enter your arithmetic operator."
        />
        <br />
        <input
          type="number"
          id="secondvalue"
          name="secondvalue"
          onChange={(e) => setsecondvalue(e.target.value)}
          placeholder="enter your second number."
        />

        <input type="submit" value="calculate" onClick={() => Calculation()} />
      </div>
      <div>
        <br/>
        <br/>
  <h1>Answer:   {answer}</h1>
      </div>
    </>
  );
}

export default Calculator;
