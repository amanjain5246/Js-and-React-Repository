import React, { Component, createRef } from "react";
import Decision from "./Decision";
// import Decision from "./Decision";
// import Alternate from "./Alternate";
class Test extends Component {


  constructor() {
    super();
    this.fNameRef = createRef();
    this.lNameRef = createRef();
    this.dtOfBirth = createRef();
    this.cityName = createRef();
    this.emailId = createRef();
    this.mobileNo = createRef();
    this.state = { result: false, fstname : null };
    // this.newState = { };
  }

    // componentWillUnmount() {
    //   this.fNameRef = null;
    // }

    componentDidCatch () {

    }


  // createRef=this.inputRef();
  changeResult = () => {
    this.setState({ result: false });
  };
  changeResultTrue = () => {
    this.setState({ result: true });
  };
  changefstname = () => {
  this.setState({fstname: this.fNameRef.current.value});
  setTimeout(() => {
    console.log(this.state.fstname);

  }, 1000);
  
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(this.state.fstname);
  }
  checkValidation() {
    console.log("called");
    // function Out(props){
    //   return (
    //   <h6>{props.firstname}</h6>,
    //   <h6>{props.lastname}</h6>,
    //   <h6>{props.dtOfBirth}</h6>,
    //   <h6>{props.city}</h6>,
    //   <h6>{props.emailId}</h6>,
    //   <h6>{props.mobileNo}</h6>
    //   )
    //   }

    let firstName = this.fNameRef.current.value;
    let lastName = this.lNameRef.current.value;
    let dtOfBirth = this.dtOfBirth.current.value;
    let cityName = this.cityName.current.value;
    let emailId = this.emailId.current.value;
    let mobileNo = this.mobileNo.current.value;
    console.log(firstName, lastName, dtOfBirth, cityName, emailId, mobileNo);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const num = /^[0-9\b\+\-\(\)]+$/;
    // let mobileNo_length = mobileNo.length
    // let result = false;
    if (firstName === "") {
      console.log("1");
      this.changeResult();
      console.log("First name is empty please enter your first name");
      // return false;
      // let result = false;
    }
    // return false;
    else if (lastName === "") {
      console.log("2");
      this.changeResult();
      console.log("First name is empty please enter your first name");
      // result = false;
    }

    // if(dtOfBirth){
    //   console.log("you are very young please STAY AWAY, It's ILLEGAL");
    //   let result = false;
    // }
    else if (cityName === "") {
      console.log("3");
      this.changeResult();
      console.log("City name is empty please enter your City name");
      // result = false;
    }
    // if(cityName==""){
    //   console.log("City name is empty please enter your City name");
    // }
    else if (!regex.test(emailId)) {
      console.log("4");
      this.changeResult();
      console.log("enter a valid email id");
      // result = false;
    } else if (mobileNo.length < 10 || mobileNo.length > 10) {
      console.log("5");
      this.changeResult();
      console.log("please enter a valid phone number");
      // result = false;
    } else {
      this.changeResultTrue();
      console.log("6");
      // console.log(<><h6>{Out.firstname}</h6>
      // <h6>{Out.lastname}</h6>
      // <h6>{Out.dtOfBirth}</h6>
      // <h6>{Out.city}</h6>
      // <h6>{Out.emailId}</h6>
      // <h6>{Out.mobileNo}</h6></>);we
      // "you have filled the form correctly"
      // result = true;
    }
  }

  render() {
    return (
      <div>
        {this.state.result ? (
          <Decision
            values={{
              firstname: this.fNameRef.current.value,
              lastName: this.lNameRef.current.value,
              dtOfBirth: this.dtOfBirth.current.value,
              city: this.cityName.current.value,
              emailId: this.emailId.current.value,
              mobileNo: this.mobileNo.current.value,
            }}
          />
        ) : (
          <div>
            <h1>Sign Up Form</h1>

            <label for="firstname">First name:</label>
            <br />
            <input
              ref={this.fNameRef}
              type="text"
              id="firstname"
              name="firstname"
              onChange={this.changefstname}
              placeholder="enter your first name."
              //   onChange={(evt) => { console.log(evt.target.value); }}
            />
            <br />

            <label for="lastname">Last name:</label>
            <br />
            <input
              ref={this.lNameRef}
              type="text"
              id="lastname"
              name="lastname"
              placeholder="enter your last name"
              // temp2={inputRef.current.value}
            />
            <br />

            <label for="DOB">DOB:</label>
            <br />
            <input
              ref={this.dtOfBirth}
              type="date"
              id="DOB"
              name="DOB"
              max="2019-09-05"
              placeholder="enter your DOB"
              // temp3={inputRef.current.value}
            />
            <br />

            <label for="city">City:</label>
            <br />
            <input
              ref={this.cityName}
              type="text"
              id="city"
              name="city"
              placeholder="enter your city"
              // temp4={inputRef.current.value}
            />
            <br />
            <br />

            <label for="email-id">Email-id:</label>
            <br />
            <input
              ref={this.emailId}
              type="email"
              id="email-id"
              name="email-id"
              placeholder="enter your email-id"
              // temp5={inputRef.current.value}
            />
            <br />

            <label for="Mobile No.">Mobile No.:</label>
            <br />
            <input
              ref={this.mobileNo}
              type="number"
              id="Mobile No."
              name="Mobile No."
              placeholder="enter your mobile number."
              // temp6={inputRef.current.value}
            />
            <br />

            <input
              type="submit"
              value="Submit"
              onClick={() => this.checkValidation()}
            />
          </div>
        )}
      </div>
    );
  }
}
export default Test;

/*

function (props){
return (
<h6>{props.firstname}</h6>
<h6>{props.lastname}</h6>
<h6>{props.dtOfBirth}</h6>
<h6>{props.city}</h6>
<h6>{props.emailId}</h6>
<h6>{props.mobileNo}</h6>
)
}
*/
