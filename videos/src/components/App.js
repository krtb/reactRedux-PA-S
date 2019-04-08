// app should be a class based component
// will hold al of the different state for our Application
import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

class App extends React.Component{
    //TODO: wire up youtube api request, to pass to SeachBar component, only one that needs to be aware of data
    onTermSubmit = (term) => {
        // can call instance of youtube apy you created
        // pass in route that I want acces to, SEARCH ENDPOINT IN THIS CASE
        youtube.get('/search', {
            params: {
                q: term,
            }
        })
    }
    
    render() {
        return (
            // default styling from semantic adds small margins on the sides of searchbar component 
            <div className="ui container" >
            {/* when passing down props, can call anything */}
            <div><SearchBar onFormSubmit={this.onTermSubmit} /></div>
            </div>
        );
    }
}

export default App