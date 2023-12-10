import { Box, Stack, Typography, TextField, FormControl, InputLabel, FilledInput, Grid, Button } from "@mui/material";
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
        <select
        name="genre"
        onChange={() => populateNewGenre_ID(event)}
      >
        <option value={1}>Adventure</option>
        <option value={2}>Animated</option>
        <option value={3}>Biographical</option>
        <option value={4}>Comedy</option>
        <option value={5}>Disaster</option>
        <option value={6}>Drama</option>
        <option value={7}>Epic</option>
        <option value={8}>Fantasy</option>
        <option value={9}>Musical</option>
        <option value={10}>Romantic</option>
        <option value={11}>Science Fiction</option>
        <option value={12}>Space-Opera</option>
        <option value={13}>Superhero</option>
      </select>
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