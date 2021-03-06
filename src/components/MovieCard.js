import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MovieCard = ({
  movie: {
    overview,
    release_date,
    original_title,
    original_name,
    backdrop_path,
    first_air_date,
    vote_average,
  },
  i,
}) => {
  return (
    <Card className="card">
      <CardActionArea target="_blank">
        <CardMedia
          className="media"
          image={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        />
        <div className="details">
          <Typography variant="body2" color="textSecondary" component="h2">
            {release_date
              ? new Date(release_date).toDateString()
              : new Date(first_air_date).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            ★ {vote_average.toFixed(2)}
          </Typography>
        </div>
        <Typography
          className="original_title"
          gutterBottom
          variant="h5"
          component="h2"
        >
          {original_title || original_name}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardActions">
        <Typography variant="h5" color="textSecondary" component="h2">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
