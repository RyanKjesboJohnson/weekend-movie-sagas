import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

//This is the overarching page for the details.
//This page will getDetails for the passed in movie id.
export default function DetailsPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  //Local state elements populated from the movies store
  const currentMovieID = useSelector(
    (store) => store.detailsPageMovieID.payload.movieId);
  const moviesArray = useSelector((store) => store.movies);
  const movieGenresArray = useSelector((store) => store.movieDetails);
  const [currentMovieTitle, setCurrentMovieTitle] = useState('');
  const [currentMovieURL, setCurrentMovieURL] = useState('');
  const [currentMovieDescription, setCurrentMovieDescription] = useState('')


  //This is the useEffect and function that runs when the page starts up
  useEffect(() => {
    populateLocalState()
  }, []);

  //This function is called on useEffect above.
  //This populates the local state from the movies array of the current selected movie.
  const populateLocalState = () => {moviesArray
    .filter((movie) => movie.id === currentMovieID)
    .map((filteredMovie) => (
        setCurrentMovieTitle(filteredMovie.title),
        setCurrentMovieURL(filteredMovie.poster),
        setCurrentMovieDescription(filteredMovie.description)
    ))}

  //This is for the button to return to home
  const returnToHome = () => {
    history.push("/");
  };

  //The below UI leverages MUI.  
  //Particularly the features of Grid to orientate in columns.
  //Stack to stack items vertically.
  //Box to give padding around elements.
  //Typography is used to style the text.
  return (
    <div data-testid="movieDetails">
      <Grid container>

        <Grid item xs={12} sm={2} md={3}>
         <Stack>
            <Box color="primary" sx={{p:3}}><Typography variant="h5">{currentMovieTitle}</Typography></Box>
            <img src={currentMovieURL} /> 
         </Stack>  
        </Grid>

        <Grid item xs={12} sm={8} md={7}>
            <Box sx={{m:3}}>
                <Typography variant="body1">{currentMovieDescription}</Typography>   
            </Box>
        </Grid>

        <Grid item xs={12} sm={2} md={2}>
            <Stack>
                <Box sx={{m:3}}>
                <Typography variant="h5">Genres:</Typography>
                <Typography variant="body1">
                    {movieGenresArray.length>0 &&
                        <ul>
                        {movieGenresArray[0].map((genre, i) => (
                        <li key={i}>{genre.name}</li>
                        ))}
                        </ul>
                    }
                </Typography>
                </Box>
            <Button variant="outlined" color="secondary" size="large" data-testid="toList" onClick={returnToHome}>
                Back to Movie List
            </Button>
            </Stack>
        </Grid>
    </Grid>
    </div>
  );
}
