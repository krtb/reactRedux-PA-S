// all code here related to configuration of AXIOS
// IMPORT AND REQUIRE ENV FILE WITH CREDS
import axios from 'axios';
require("dotenv").config();


// creates instance of axios client with a couple of defaulted properties
// .create allows us to make a customized little copy of it
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    // will pass in query string when we actually make use of this instance
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `${process.env.REACT_APP_YOUTUBE_KEY }`,
    },
});