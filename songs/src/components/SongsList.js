import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongsList extends Component {
    render(){
        // this.props === {songs: state.songs}
        // how we get data from our redux store into a component
        console.log(this.props);
        
        return (
            <div>SONG LIST</div>
        )
    }
}

// going to take state object in redux store
// run calc on it, will cause data to show up as props inside this component
// function could be called anything else, 'getMyState' for example
// called with all state inside redux store
const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
    // object returned will show up as props inside our component
    
} 

// returning a function, second set invokes functions that was returned
// tell it that we want to get a list of sonds out of our redux store from provider

// configure connect component by passing in mapStateToProps, configed by passing in a function
export default connect(mapStateToProps)(SongsList)