import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css';
import { CatContextProvider } from './Context/CatContext.jsx';
//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <CatContextProvider>
  <Router>
    <App />
  </Router>
  </CatContextProvider>, document.getElementById('app'));
  
