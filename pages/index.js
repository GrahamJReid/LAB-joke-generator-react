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
    setbtnText('get another joke');
  };

  const handleClick = () => {
    setValue('');
    setDeliveryValue('');
    getJoke().then((jokedata) => {
      setValue(jokedata.setup);
      apiDelivery = jokedata.delivery;
      setButton('get punchline');
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome Home!</h1>
      <button
        type="button"
        onClick={() => {
          if (btnText === 'Get a Joke') {
            handleClick();
          } else if (btnText === 'get punchline') {
            handleDelivery();
          } else if (btnText === 'get another joke') { handleClick(); }
        }}
      >{btnText}
      </button>
      <div> setup: { value }</div>
      <div> punchline:{ deliveryValue }</div>
    </div>
  );
}

export default Home;
