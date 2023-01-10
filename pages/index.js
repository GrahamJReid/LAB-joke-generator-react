import { useState } from 'react';
import getJoke from '../api/jokeData';

let apiDelivery = '';

function Home() {
  const [value, setValue] = useState('');
  const [btnText, setbtnText] = useState('Get a Joke');
  const [deliveryValue, setDeliveryValue] = useState('');

  const setButton = (text) => {
    setbtnText(text);
  };

  const handleDelivery = () => {
    setDeliveryValue(apiDelivery);
    setbtnText('Get Another Joke');
  };

  const handleClick = () => {
    getJoke().then((jokedata) => {
      setValue(jokedata.setup);
      setDeliveryValue('');
      apiDelivery = jokedata.delivery;
      setButton('Get Punchline');
    });
  };

  return (
    <div>
      <div className="content-container">
        <h1 className="title">JOKEJOKEJOKE!</h1>
        <div className="content">
          <button
            className="buttonz"
            type="button"
            onClick={() => {
              if (btnText === 'Get a Joke') {
                handleClick();
              } else if (btnText === 'Get Punchline') {
                handleDelivery();
              } else if (btnText === 'Get Another Joke') {
                handleClick();
              }
            }}
          >{btnText}
          </button>
          <div className="joke-font">
            <div> setup: { value }</div>
            <div> punchline: { deliveryValue }</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
