// app should be a class based component
// will hold al of the different state for our Application
import React from 'react';
import SearchBar from './SearchBar'


class App extends React.Component{
    render() {
        return (
            <div><SearchBar/></div>
        );
    }
}

export default App