import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalContainer } from 'react-modal-global';
import App from './App';
import { setItem, getItem } from './utils/handleStorage';
import genreService from './api/services/genreService';
import { modalController } from './utils/modalController';
import 'react-modal-global/styles/modal.scss';
import 'react-modal-global/styles/layouts.scss';

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
      <ModalContainer controller={modalController} />
    </React.StrictMode>
  );
}

initialize();
