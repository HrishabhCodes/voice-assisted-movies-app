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

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, query }) => {
        if (command === "newMovies") {
          let MOVIES_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${moviesKey}&language=en-US`;
          fetch(MOVIES_API_URL)
            .then((res) => res.json())
            .then((data) => {
              setMoviesList(data.results);
            });
        } else if (command === "newTVShows") {
          let MOVIES_API_URL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${moviesKey}&language=en-US`;
          fetch(MOVIES_API_URL)
            .then((res) => res.json())
            .then((data) => {
              setMoviesList(data.results);
            });
        } else if (command === "search") {
          let MOVIES_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${moviesKey}&language=en-US&query=${query}`;
          fetch(MOVIES_API_URL)
            .then((res) => res.json())
            .then((data) => {
              setMoviesList(data.results);
            });
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
          <div className="header">
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