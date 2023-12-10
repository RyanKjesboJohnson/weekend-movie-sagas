import { Box, Typography, TextField, FormControl, InputLabel, FilledInput, Grid } from "@mui/material";
import { useState } from "react";

export default function AddMoviePage(){
    const [newMovieTitle, setNewMovieTitle] = useState('')
    const [newMovieDescription, setNewMovieDescription] = useState('')
    const [newMovieURL, setNewMovieURL] = useState('')

    const populateNewTitle = (event) => {
        setNewMovieTitle(event.target.value)
    }
    const populateNewURL = (event) => {
        setNewMovieURL(event.target.value)
    }    
    const populateNewDescription = (event) => {
        setNewMovieDescription(event.target.value)
    }
    return(            
    <Grid container>
    <Box
        sx={{display:'flex'}} 
        component="form"
        noValidate
        autoComplete="off"
        >
        <Grid item s={12} sm={4} md={2}>
            <TextField
            sx={{ m: 2 }}
            id="outlined-multiline-flexible"
            label="Movie Title"
            multiline
            maxRows={4}
            onChange={populateNewTitle}
            value={newMovieTitle}
            />
        </Grid>
        <Grid item s={12} sm={4} md={2}>
            <TextField
            fullWidth sx={{ m: 2 }}
            id="outlined-textarea"
            label="Movie Poster URL"
            multiline
            maxRows={4}
            onChange={populateNewURL}
            value={newMovieURL}
            />
        </Grid>
        <FormControl fullWidth sx={{ m: 2 }}>
            <InputLabel htmlFor="standard-adornment-amount">Description</InputLabel>
            <FilledInput             
            multiline
            rows={6}
            onChange={populateNewDescription}
            value={newMovieDescription}></FilledInput>
        </FormControl>
    </Box>
    </Grid>
    
    )

}