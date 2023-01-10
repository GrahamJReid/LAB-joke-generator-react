/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import getJoke from '../api/jokeData';

let apiDelivery = '';
function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState('');
  const handleClick = () => {
    getJoke().then((jokedata) => {
      setValue(jokedata.setup);
      apiDelivery = jokedata.delivery;
    });
  };
  const [deliveryValue, setDeliveryValue] = useState('');
  const handleDelivery = () => {
    setDeliveryValue(apiDelivery);
  };
  return (
    <>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
        <button type="button" onClick={handleClick}>Get a joke?</button>
        <div> setup: { value }</div>
        <button type="button" onClick={handleDelivery}>Punchline</button>
        <div> punchline:{ deliveryValue }</div>

      </div>
    </>
  );
}

export default MyApp;
