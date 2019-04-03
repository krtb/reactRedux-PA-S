// all code here related to configuration of AXIOS
// getting unplash API to reply to our fetch request with sensitive credentials
import axios from 'axios';
require("dotenv").config();


// creates instance of axios client with a couple of defaulted properties
// .create allows us to make a customized little copy of it
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_MYAPIKEY}`
    }
});