import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongsList extends Component {

    renderList(){
        // after new array with JSX elements created, want to return on function call
        return this.props.songs.map((song)=>{
            // this will return some JSX element
            return (
                <div className="item" key={song.title}  >
                    <div className="right floated content" >
                        <button className="ui primary button" >
                            Select
                        </button>
                    </div>

                    <div className="content" >{song.title}</div>
                </div>
            );
        })
    }

    render(){
        // this.props === {songs: state.songs}
        // how we get data from our redux store into a component
        console.log(this.props);
        return (
            <div className="ui divided list" >{this.renderList()}</div>
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