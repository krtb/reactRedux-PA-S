import React from 'react';
// convention to import libraries above components
import axios from 'axios';
import SearchBar from './SearchBar';
require("dotenv").config();

// functional component
class App extends React.Component {
    // ASYNC AWAIT SYNTAX
    async onSearchSubmit(term) {
        const response = await axios
          .get("https://api.unsplash.com/search/photos", {
            params: {
              query: term
            },
            headers: {
              Authorization: `Client-ID ${process.env.REACT_APP_MYAPIKEY}`
            }
          })
          // console.log(response.data.results );
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

