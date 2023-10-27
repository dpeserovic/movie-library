import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { setItem, getItem } from './utils/handleStorage';
import genreService from './api/services/genreService';

const initialize = async () => {
  if (getItem('genres') == null) {
    try {
      const response = await genreService.getMovieGenres();
      setItem('genres', response.genres);
    } catch (e) {
      console.error(e);
    }
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

initialize();
