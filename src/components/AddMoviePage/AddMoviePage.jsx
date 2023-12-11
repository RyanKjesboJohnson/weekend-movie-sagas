import { Box, Stack, Typography, Select, MenuItem, TextField, FormControl, InputLabel, FilledInput, Grid, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AddMoviePage(){
    const dispatch = useDispatch();
    const [newMovieTitle, setNewMovieTitle] = useState('')
    const [newMovieDescription, setNewMovieDescription] = useState('')
    const [newMovieURL, setNewMovieURL] = useState('')
    const [newMovieGenreID, setNewMovieGenreID] = useState(0)


    const populateNewTitle = (event) => {
        setNewMovieTitle(event.target.value)
    }
    const populateNewURL = (event) => {
        setNewMovieURL(event.target.value)
    }    
    const populateNewDescription = (event) => {
        setNewMovieDescription(event.target.value)
    }
    const populateNewGenre_ID = (event) => {
        setNewMovieGenreID(event.target.value)
    }

    const newMovieObject = {
        title: newMovieTitle,
        poster: newMovieURL,
        description: newMovieDescription,
        genre_id: newMovieGenreID
    }
    const postNewMovie = () => {
        console.log(newMovieObject);
        dispatch({
            type: 'CREATE_NEW_MOVIE',
            payload: newMovieObject
        })
        history.push('/')
    }

    const history = useHistory();
    const returnToTitlePage = () => {
        history.push('/')
    }

    return(            
    <Grid container   
    direction="column"
    // alignItems="center"
    justifyContent="center"
    >
        <Stack>
        <Grid>
            <Box>
            <TextField
            fullWidth
            sx={{ m: 2 }}
            id="outlined-multiline-flexible"
            label="Movie Title"
            multiline
            maxRows={4}
            onChange={populateNewTitle}
            value={newMovieTitle}
            />
        </Box>
        </Grid>
        <Grid>
        <Box>
            <TextField
            fullWidth sx={{ m: 2 }}
            id="outlined-textarea"
            label="Movie Poster URL"
            multiline
            maxRows={4}
            onChange={populateNewURL}
            value={newMovieURL}
            />
        </Box>
        </Grid>
        <Grid>
        <Box>
        <FormControl fullWidth sx={{ m: 2 }}>
            <InputLabel htmlFor="standard-adornment-amount">Description</InputLabel>
            <FilledInput             
            multiline
            rows={6}
            onChange={populateNewDescription}
            value={newMovieDescription}>
            </FilledInput>
        </FormControl>
        </Box>
        </Grid>
        <Grid>
        <Box>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Movie Genre</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newMovieGenreID}
                label="Movie Genre"
                onChange={() => populateNewGenre_ID(event)}                >
                    <MenuItem value={1}>Adventure</MenuItem>
                    <MenuItem value={2}>Animated</MenuItem>
                    <MenuItem value={3}>Biographical</MenuItem>
                    <MenuItem value={4}>Comedy</MenuItem>
                    <MenuItem value={5}>Disaster</MenuItem>
                    <MenuItem value={6}>Drama</MenuItem>
                    <MenuItem value={7}>Epic</MenuItem>
                    <MenuItem value={8}>Fantasy</MenuItem>
                    <MenuItem value={9}>Musical</MenuItem>
                    <MenuItem value={10}>Romantic</MenuItem>
                    <MenuItem value={11}>Science Fiction</MenuItem>
                    <MenuItem value={12}>Space-Opera</MenuItem>
                    <MenuItem value={13}>Superhero</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Box>
    </Grid>
    <Box>
        <Button onClick={postNewMovie}>
            Submit New Movie
        </Button>
        <Button onClick={returnToTitlePage}>
            Return to Title Page
        </Button>
    </Box>
    </Stack>
    </Grid>

    )
}