import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/MovieCards";
import Footer from "./components/Footer";
import Icon from "./assets/icon-logo.jpeg";
import "./App.css";

const alanKey = process.env.REACT_APP_ALAN_KEY;
const moviesKey = process.env.REACT_APP_MOVIES_KEY;

const App = () => {
  const [moviesList, setMoviesList] = useState([]);

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMoviesList(data.results);
      });
  };

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, query }) => {
        if (command === "newMovies") {
          let MOVIES_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${moviesKey}&language=en-US`;
          fetchData(MOVIES_API_URL);
        } else if (command === "newTVShows") {
          let MOVIES_API_URL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${moviesKey}&language=en-US`;
          fetchData(MOVIES_API_URL);
        } else if (command === "search") {
          let MOVIES_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${moviesKey}&language=en-US&query=${query}`;
          fetchData(MOVIES_API_URL);
        } else if (command === "back") {
          setMoviesList([]);
        }
      },
    });
  }, []);

  return (
    <div className="app">
      <div className="main-cont">
        <div className="navbar">
          <div onClick={() => setMoviesList([])} className="header">
            <img className="icon" src={Icon} alt="icon" />
            <h1 className="heading">MovieBuff</h1>
          </div>
        </div>
        <NewsCards className="news-cards" movies={moviesList} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
