import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './MovieList.css'
import DetailsPage from '../DetailsPage/DetailsPage';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';


function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const history = useHistory();
  //this function is triggered when a movie title is clicked
  const goToDetails = (id) => {
    console.log("in go to details function");
    // console.log("this is the id of the movie:", id);
    dispatch({ type: 'SET_DETAILS_PAGE',
              payload: {movieId: id}});
    history.push('/details')
  }

  const navigateToCreatePage = () => {
      history.push('/addmovie')
  }

  return (
    <Box>
      <Typography variant='h4'>Select a movie to see more details:</Typography>
      <Button sx={{m:3}} variant="outlined" color="primary" size="large" onClick={navigateToCreatePage}>
            Create Movie
        </Button>
      <Box className="movies">
        {movies.map(movie => {
          return (
            <Card key={movie.id} sx={{ minWidth: 150, m:5}}>
            <CardContent data-testid='movieItem'>
              <Typography variant="h6">{movie.title}</Typography>
              <img data-testid="toDetails" onClick={() => goToDetails(movie.id)} src={movie.poster} alt={movie.title}/>
            </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>

  );
}


export default MovieList;
