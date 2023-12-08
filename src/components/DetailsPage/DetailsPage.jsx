import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

//This is the overarching page for the details.
//This page will getDetails for the passed in movie id.
export default function DetailsPage() {
    const dispatch = useDispatch();
    
    useEffect(() => {

    });

    return(
        <div>
            All the details will go here!
        </div>
    );

}