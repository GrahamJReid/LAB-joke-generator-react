import axios from 'axios';
import { endpointValue } from '../components/endpointGenerator';

const getJoke = async () => {
  const jokeCall = await axios.get(endpointValue);
  return jokeCall.data;
};

export default getJoke;
