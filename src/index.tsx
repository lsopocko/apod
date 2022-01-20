import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom'; 
import 'normalize.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import BrowseApods from './routes/apod/Browse';
import Saved from './routes/apod/Saved';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<BrowseApods></BrowseApods>} />
            <Route path="zapisane" element={<Saved></Saved>} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
