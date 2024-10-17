import React from "react";
// import Test from "./Test";

function Decision(props) {
  console.log(props);
  
  const {title, body, id} = props.aman.dataof;
  const {firstName, lastName} = props.aman;
  // const [data, setdata] = useState([]);
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/posts/add")
  //       .then((response) => response.json())
  //       .then((json) => setdata(json))
  // .then(response => console.log(response.json()))

  //       .catch((error) => console.error(error));
  //   }, []);

  return (
    <div>
      <div>
        {title + body + id} {firstName + lastName}
        {/* <div>
          <ul>
            {dataof.map((element) => (
              <li key={element.title}>{element.title}</li>  
            ))}
          </ul>
        </div> */}
      </div>
      <h1>YOU HAVE FILLED THE FORM CORRECTLY</h1>
      {/* <div>
          <ul>
            {data.map((element) => (
              <li key={element.title}>{element.title}</li>
              // <li key={element.body}>{element.body}</li> 

              
            ))}
          </ul>
        </div> */}

      {/* {/* <h2>{"firstname is -" + props.values.firstName}</h2> */}
      {/* <h2>{"lastname is -" + props.values.lastName}</h2>
      <h2>{"DOB is -" + props.values.dateOfBirth}</h2>
      <h2>{"city is -" + props.values.city}</h2>
      <h2>{"emailid is -" + props.values.email}</h2>
      <h2>{"mobile no is -" + props.values.mobile}</h2> */} 
      {/* <h2>{ }</h2> */}
    </div>
  );
}

export default Decision;
