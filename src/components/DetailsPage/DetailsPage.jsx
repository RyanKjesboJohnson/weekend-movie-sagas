import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//This is the overarching page for the details.
//This page will getDetails for the passed in movie id.
export default function DetailsPage() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        setupDetailsPage();
        }, []);

    const setupDetailsPage = () => {
        console.log("in setupDetailsPage function");
        const currentMovieID = useSelector(store => store.detailsPageMovieID)
        console.log("this is the id received for movie in the details page:", currentMovieID);
    }

    return(
        <div>
            All the details will go here!
        </div>
    );

}