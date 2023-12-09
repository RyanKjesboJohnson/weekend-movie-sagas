import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('SET_DETAILS_PAGE', setupDetailsPage);
}

//This saga function gets all movies
function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
    console.log(moviesResponse.data);
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

//this saga is called when a movie title is clicked
function* setupDetailsPage(movieID) {
  try {
    yield put({
      type: 'SET_DETAILS_PAGE_MOVIE_ID',
      payload: movieID
    })
    yield console.log("this is the movieID saga",movieID.payload.movieId);
    const response = yield axios({
      method: 'GET',
      url: `/api/movies/${Number(movieID.payload.movieId)}`
    })
    yield put({
      type: 'SET_MOVIE_DETAILS',
      payload: response.data
    })
  } catch (error) {
    console.log("setupDetailsPage error:", error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}
const movieDetails = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE_DETAILS':
      const movieDetails = action.payload;
      console.log(movieDetails);
      return [movieDetails]
    default:
      return state;
  }
}


// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

//setting a redux state for the movie details
const detailsPageMovieID = (state=0, action) => {
  switch (action.type) {
    case 'SET_DETAILS_PAGE_MOVIE_ID':
      console.log("this is from row 66 of store", action.payload);
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    detailsPageMovieID,
    movieDetails
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
