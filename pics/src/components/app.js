import React from 'react';
// convention to import libraries above components
import axios from 'axios';
import SearchBar from './SearchBar';
require("dotenv").config();

// functional component
class App extends React.Component {
    // ASYNCHRONUS REQUEST: will take some amount of time for
    // axios to send request
    // for API to send a response back
    // => but time we get reponse back, will have exited onSearchSubmit method
    async onSearchSubmit(term) {
        const response = await axios
          .get("https://api.unsplash.com/search/photos", {
            params: {
              // query=cars --> would be the end result, takes in value from above
              query: term
            },
            headers: {
              Authorization: `Client-ID ${process.env.REACT_APP_MYAPIKEY}`
            }
          })
          console.log(response.data.results );
          
          // .then(resp => {
          //   console.log(resp.data.results, "HERE IS MY PROMISE");
          // }); 
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                {/* onSearchSubmit is a refrence to callback function defined above, should not be invoked and run immediately */}
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    };
}

export default App;

