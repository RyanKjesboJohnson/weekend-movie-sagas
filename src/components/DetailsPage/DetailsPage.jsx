import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//This is the overarching page for the details.
//This page will getDetails for the passed in movie id.
export default function DetailsPage() {
    const dispatch = useDispatch();
    
//This is the useEffect and function that runs when the page starts up
    const currentMovieID = useSelector((store) => store.detailsPageMovieID.payload.movieId);
    const moviesArray = useSelector((store) => store.movies);

    useEffect(() => {
        setupDetailsPage();
        }, []);
    const setupDetailsPage = () => {
        console.log("in setupDetailsPage function");
        // console.log("this is the id received for movie in the details page:", currentMovieID);
        console.log(currentMovieID);

    }

    return(
        <div>
            {moviesArray.filter(movie => movie.id===currentMovieID).map(filteredMovie => (
                <span key={filteredMovie.id}>
                <div>{filteredMovie.title}</div>
                <div>{filteredMovie.description}</div>
                <img src={filteredMovie.poster}/>

                </span>
            ))}
        </div>
    );

}