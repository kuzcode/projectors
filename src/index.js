import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './Catalogue/Index';
import Projectors from './Catalogue/Projectors';
import Panel from './Catalogue/Panel';
import Speakers from './Catalogue/Speakers';
import Sensor from './Catalogue/Sensor';
import Dj from './Catalogue/Dj';
import Karaoke from './Catalogue/Karaoke';

import Contacts from './Contacts';
import Cart from './Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/panels" element={<Panel />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/sensor" element={<Sensor />} />
        <Route path="/dj" element={<Dj />} />
        <Route path="/karaoke" element={<Karaoke />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();