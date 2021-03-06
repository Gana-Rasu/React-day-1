import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Panel.css';
import './Cards.css';
import './Navbar.css';
import './Footer.css';
import './App.css'
import App from './App';
import Navbar from './Navbar';
import Panel from './Panel';
import Cards from './Cards';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Panel/>
    <Cards/>
    <App/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
