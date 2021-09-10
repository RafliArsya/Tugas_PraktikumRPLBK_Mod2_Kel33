import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import data from './data.json';
import CardList from './components/CardList';
import CardInfo from "./components/CardInfo";
import Quotes from "./components/Quotes";

const quotes = "Laptop Harga Merakyat Kualitas Sultan";
const author = "@puput_we";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList data={data} />
    <CardInfo
    title="Promo 9.9 Harga Super MURAH"
    tglPost="1 September 2021"
    info="Cermati brosur kami ya dan bandingkan harganya, promo yang kami berikan benar benar termurah di Salatiga, 
    tidak percaya ? Silakan datang langsung ke Sultan Copm Store di RUKO Pancasila No 8, atau kunjungi Olshop kami di Shoppe : SultanCompStore33 dan dapatkan Extra Cashback hingga 98%"
    author={author}
    />
    <Quotes author="Owner" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
