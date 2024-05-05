import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./Navbar";
// import AuthComponent from "./AuthComponent";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b82ac7a4d3444a27afd252c1701d9de1`
        );
        setData(response.data.articles);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]); // Fetch data whenever category changes

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <Navbar handleCategoryChange={handleCategoryChange} />
      {/* <AuthComponent /> */}
      <div className="container">
        <h1>Top Headlines in India - {category}</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="news-container">
            {data.map((article, index) => (
              <div className="article" key={index}>
                <h2>{article.title}</h2>
                <p className="author">
                  By {article.author || "Unknown"} |{" "}
                  {new Date(article.publishedAt).toDateString()}
                </p>
                <img
                  className="image"
                  src={article.urlToImage}
                  alt={article.title}
                />
                <p className="description">
                  {article.description ? article.description : "Read more..."}
                  <a href={article.url}> Read More</a>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
