import React from "react";
import "../Homepage/Style.css"
import { useNavigate, Link } from "react-router-dom";

import { useState, useEffect } from "react";

function Home() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d63ad82a1c0e440181314e0519d82670"
    )
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error));
  }, []);

  const navigate = useNavigate();

  return (
    <div class="homebase">
      <div>
        <h1>Here are the Latest News for you!!</h1>
      </div>
      {Data.map((articles, index) => (
        <button
          class="moviestyle"
          key={articles.title}
          onClick={() => navigate("/Home/Details", { state: articles })}
        >
          {articles.title}
        </button>
      ))}
    </div>
  );
}

export default Home;
