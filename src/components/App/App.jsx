import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import DetailsPage from '../DetailsPage/DetailsPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import SearchAppBar from '../AppBar/AppBar';

function App() {
  return (
    
    <Container className="App">
      <CssBaseline>
        <SearchAppBar />
        <Router>        
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/details" exact>
            <DetailsPage />
          </Route>

          {/* Add Movie page */}
          
        </Router>
      </CssBaseline>
    </Container>
  );
}


export default App;
