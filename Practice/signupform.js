import React, { useEffect, useState } from "react";
import Decision from "./Decision";
import Test from "./Test";
// import useState  from "react";
// import Decision from "./Decision";
// import Alternate from "./Alternate";
function Signupform() {
  //
  // below comment out code is for use ref
  //
  // let  = useRef();
  // let lNameRef = useRef();
  // let dtOfBirth = useRef();
  // let cityName = useRef();
  // let emailId = useRef();
  // let mobileNo = useRef();
  // state = { result: false, fstname : null };

  // const [result, setresult] = useState(false);
  // const [fNameRef, setfNameRef] = useState(fNameRef.current.value);
  // const [lNameRef, setlNameRef] = useState(lNameRef.current.value);
  // const [dtOfBirth, setdtOfBirth] = useState(dtOfBirth.current.value);
  // const [cityName, setcityName] = useState(cityName.current.value);
  // const [emailId, setemailId] = useState(emailId.current.value);
  // const [mobileNo, setmobileNo] = useState(mobileNo.current.value);
  // changeResult={()=> setState({result: false})}
  //
  //
  //

  const [result, setresult] = useState(false);
  const [fNameRef, setfNameRef] = useState("");
  const [lNameRef, setlNameRef] = useState("");
  const [dtOfBirth, setdtOfBirth] = useState("");
  const [cityName, setcityName] = useState("");
  const [emailId, setemailId] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [go, setgo] = useState("");
  const [data, setdata] = useState();
  const changeresult = () => {
    setresult(false);
  };

  const changeResultTrue = () => {
    setresult(true);
  };

  function checkValidation() {
    console.log("called");

    let firstName = fNameRef;
    let lastName = lNameRef;
    let datetOfBirth = dtOfBirth;
    let city = cityName;
    let email = emailId;
    let mobile = mobileNo;
    let dataof = data;
    console.log(firstName, lastName, datetOfBirth, city, email, mobile, dataof);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (firstName === "") {
      console.log("1");
      changeresult();
      console.log("First name is empty please enter your first name");
    } else if (lastName === "") {
      console.log("2");
      changeresult();
      console.log("First name is empty please enter your first name");
    } else if (city === "") {
      console.log("3");
      changeresult();
      console.log("City name is empty please enter your City name");
    } else if (!regex.test(email)) {
      console.log("4");
      changeresult();
      console.log("enter a valid email id");
    } else if (mobileNo.length < 10 || mobileNo.length > 10) {
      console.log("5");
      changeresult();
      console.log("please enter a valid phone number");
    } else {
      console.log("6");

      //  fetch post code

      fetch("https://dummyjson.com/posts/add", {
        method: "POST",

        body: JSON.stringify({
          title: fNameRef,
          body: lNameRef,
          userId: "122",
        }),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("DHRUV", json);

          setdata(json);
        })

        // .then(json => console.log(json))
        .catch((err) => console.log(err));
    }
  }
  // useEffect(() => {
  //     });
  //     useEffect(() => {
  //     });

  //   useEffect(() => {
  //     changeResultTrue();
  //   });
  // if(!catch(err)){
  function back() {
    setgo("back");
  }
  return (
    <div>
      {data ? (
        <Decision
          aman={{
            //added export
            firstName: fNameRef,
            lastName: lNameRef,
            dateOfBirth: dtOfBirth,
            city: cityName,
            email: emailId,
            mobile: mobileNo,
            dataof: data,
          }}
        />
      ) : go === "back" ? (
        <Test />
      ) : (
        <div>
          <h1>Sign Up Form</h1>

          <label for="firstName">First name:</label>
          <br />
          <input
            //  input type="text" value={fNameRef} />
            type="text"
            id="firstname"
            name="firstname"
            //  onChange={changefstname}
            onChange={(e) => setfNameRef(e.target.value)}
            placeholder="enter your first name."
          />
          <br />

          <label for="lastname">Last name:</label>
          <br />
          <input
            // ref={lNameRef}
            // input type="text" value={lNameRef}
            type="text"
            id="lastname"
            name="lastname"
            onChange={(e) => setlNameRef(e.target.value)}
            placeholder="enter your last name"
          />

          <br />

          <label for="DOB">DOB:</label>
          <br />
          <input
            // ref={dtOfBirth}
            // input type="date" value={dtOfBirth}
            type="date"
            id="DOB"
            name="DOB"
            max="2019-09-05"
            onChange={(e) => setdtOfBirth(e.target.value)}
            placeholder="enter your DOB"
          />
          <br />

          <label for="city">City:</label>
          <br />
          <input
            // ref={cityName}
            // input type="text" value={cityName}
            type="text"
            id="city"
            name="city"
            onChange={(e) => setcityName(e.target.value)}
            placeholder="enter your city"
          />
          <br />
          <br />

          <label for="email-id">Email-id:</label>
          <br />
          <input
            // ref={emailId}
            // input type="email" value={emailId}
            type="email"
            id="email-id"
            name="email-id"
            onChange={(e) => setemailId(e.target.value)}
            placeholder="enter your email-id"
          />
          <br />

          <label for="Mobile No.">Mobile No.:</label>
          <br />
          <input
            // ref={mobileNo}
            // input type="number" value={mobileNo}
            type="number"
            id="Mobile No."
            name="Mobile No."
            onChange={(e) => setmobileNo(e.target.value)}
            placeholder="enter your mobile number."
          />
          <br />

          <input
            type="submit"
            value="Submit"
            onClick={() => checkValidation()}
          />
          <input type="submit" value="BACK" onClick={() => back()} />
        </div>
      )}
    </div>
  );
}

export default Signupform;
