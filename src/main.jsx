// main.jsx (importações de estilos globais, bibliotecas externas e renderização do componente)

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './index.css';
import './styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';


const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  // eslint-disable-next-line
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
