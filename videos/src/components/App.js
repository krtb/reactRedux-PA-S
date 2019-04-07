// app should be a class based component
// will hold al of the different state for our Application
import React from 'react';
import SearchBar from './SearchBar'


class App extends React.Component{

    //TODO: wire up youtube api request, to pass to SeachBar component, only one that needs to be aware of data
    
    render() {
        return (
            // default styling from semantic adds small margins on the sides of searchbar component 
            <div className="ui container" >
            <div><SearchBar/></div>
            </div>
        );
    }
}

export default App