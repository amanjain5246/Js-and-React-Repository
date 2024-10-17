import React, { useState, useEffect } from "react";
import Test from "./Test";

function FirstApi() {
  const [data, setdata] = useState([]);
  
  function New() {
    console.log(data);
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setdata(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div>
        <h1>
          {/* {data ? ({data}) : (null) } */}
          All the information related to the first API will be displayed here.
        </h1>
        <button type="submit" value="click me" onClick={() => New()}>
          {" "}
          click meeeeee
        </button>

        <div>
          <ul>
            {data.map((element) => (
              <li key={element.title}>{element.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// element = {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

export default FirstApi;
