import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Home from "../Homepage/Home";
// import "../Detailspage/Styles.css";
import "../Detailspage/Style.css"
function Details() {
  const location = useLocation();
  const article = location.state;
  console.log({ article });


  
  return (
    <div class="base">
      <div class="newsblog">
        <div class="newsinside">
          <br />
          <h1>{article?.title}</h1>
          <br />
          <h4>{article?.content}</h4>
          {article?.url && (
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default Details;
