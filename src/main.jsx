import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/Login.css';
import './styles/Sign-up.css';
import './styles/PlayGamePage.css';
import './styles/Game.css';
import './styles/Cards.css';
import './styles/Fonts.css';
import './styles/Navbar.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
