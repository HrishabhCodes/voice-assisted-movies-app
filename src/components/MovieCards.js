import React from "react";
import MovieCard from "./MovieCard";
import { Grid, Typography } from "@mui/material";
import Grow from "@mui/material/Grow";

const infoCards = [
  { title: "Latest Movies", text: "Show me some latest movies" },
  {
    title: "Latest TV Shows",
    text: "List some latest TV Shows",
  },
  {
    title: "Movies by Search",
    text: "Search some movies on Spiderman",
  },
];

const MovieCards = ({ movies }) => {
  if (!movies.length) {
    return (
      <Grow in>
        <Grid className="container" container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="infocard"
            >
              <div className="helpCard">
                <Typography className="title" variant="h6">
                  <strong>{infoCard.title}</strong>
                </Typography>
                {infoCard.info ? (
                  <Typography variant="body1">
                    <strong>{infoCard.title.split(" ")[2]}:</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="body1">
                  <strong>Try saying: </strong>
                  <br />
                  <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className="container" container alignItems="stretch" spacing={3}>
        {movies.map((movie, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex" }}
          >
            <MovieCard movie={movie} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default MovieCards;
