import React from 'react';
// convention to import libraries above components
import axios from 'axios';
import SearchBar from './SearchBar';
require("dotenv").config();

// functional component
class App extends React.Component {
  // when expecting an array/object default= empty [] / {}
  state = {
    images: [],
  }
          
    // ASYNC AWAIT SYNTAX
    // need to move over the async keyword when using arrow function to bind this
    onSearchSubmit = async (term) => {
        const response = await axios
          .get("https://api.unsplash.com/search/photos", {
            params: {
              query: term
            },
            headers: {
              Authorization: `Client-ID ${process.env.REACT_APP_MYAPIKEY}`
            }
          })
          // props object: passed down to SEARCHBARD COMPONENT INSTANCE
          console.log(this);
          this.setState({
            images: response.data.results
          })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                {/* onSearchSubmit is a refrence to callback function defined above, should not be invoked and run immediately */}
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    };
}

export default App;

