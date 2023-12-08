import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import DetailsPage from '../DetailsPage/DetailsPage';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  //this function is triggered when a movie title is clicked
  const goToDetails = (id) => {
    console.log("in go to details function");
    console.log("this is the id of the movie:", id);
    dispatch({ type: 'SET_DETAILS_PAGE',
              payload: {movieId: id}})

  }

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img onClick={() => goToDetails(movie.id)} src={movie.poster} alt={movie.title}/>
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;
