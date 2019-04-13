// app should be a class based component
// will hold al of the different state for our Application
import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList  from './VideoList'

class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: null,
    }
    

    // want to take list of videos received and set them as state on our APP component, will allow it to udpate, redender itself
    //  allow us to render newly fetched videos onto the screen
    onTermSubmit = async term => {
        const resp = await youtube.get('/search', {
            params: {
                q: term,
            }
        })
        //  can see data in console => network => xhr => preview
        // here is wher list of videos is being returned
        this.setState({
            videos: resp.data.items
        })
    }

    // add new callback function, will always be arrow function
    onVideoSelect = (video) => {
        // will be called with a video object, fetched from youtube api
        this.setState({
            selectedVideo: video
        })
    }
    
    render() {
        return (
            // default styling from semantic adds small margins on the sides of searchbar component 
            <div className="ui container" >
            {/* when passing down props, can call anything */}
            <div><SearchBar onFormSubmit={this.onTermSubmit} /></div>
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App