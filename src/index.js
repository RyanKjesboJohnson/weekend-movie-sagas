import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/store.js'
import App from './components/App/App.jsx';
import { ThemeProvider, createTheme } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3fb585',
    },
    secondary: {
      main: '#ff9100',
    },
  },
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
