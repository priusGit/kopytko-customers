import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kopytko-2137.firebaseio.com'
});

export default instance;