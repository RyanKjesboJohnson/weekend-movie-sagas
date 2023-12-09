import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

//This is the overarching page for the details.
//This page will getDetails for the passed in movie id.
export default function DetailsPage() {
  const dispatch = useDispatch();

  //This is the useEffect and function that runs when the page starts up
  const currentMovieID = useSelector(
    (store) => store.detailsPageMovieID.payload.movieId
  );
  const moviesArray = useSelector((store) => store.movies);

  useEffect(() => {
    // setupDetailsPage();
  }, []);
  // const setupDetailsPage = () => {
  //     console.log("in setupDetailsPage function");
  //     console.log("this is the id received for movie in the details page:", currentMovieID);
  //     console.log(currentMovieID);
  // }

  //This is for the button to return to home
  const history = useHistory();
  const returnToHome = () => {
    history.push("/");
  };

  const movieGenresArray = useSelector((store) => store.movieDetails);
  console.log(movieGenresArray[0]);
  return (
    <div data-testid="movieDetails">
      {moviesArray.length>0 && 
      <>{moviesArray
        .filter((movie) => movie.id === currentMovieID)
        .map((filteredMovie) => (
          <span key={filteredMovie.id}>
            <div>{filteredMovie.title}</div>
            <div>{filteredMovie.description}</div>
            <img src={filteredMovie.poster} />
          </span>
        ))}
        </>
        }
      <h2>Genres:</h2>
      {movieGenresArray.length>0 &&
      <ul>
        {movieGenresArray[0].map((genre, i) => (
          <li key={i}>{genre.name}</li>
        ))}
      </ul>
        }
      <div>
        <button data-testid="toList" onClick={returnToHome}>
          Back to Movie List
        </button>
      </div>
    </div>
  );
}
