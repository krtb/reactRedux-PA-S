// app should be a class based component
// will hold al of the different state for our Application
import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList  from './VideoList'
import VideoDetail from './VideoDetail'
import './App.css'

class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: null,
    }

    // to show something more than just `loading...` text
    componentDidMount(){
        this.onTermSubmit('buildings')
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
        // instant user searches for something, show them inside the videodetail
        this.setState({
            videos: resp.data.items,
            selectedVideo: resp.data.items[0],
            // now will see a video be selected to the left, when searching term
        })
    }

    // add new callback function, will always be arrow function
    // onVideoSelect, want to update state on app class
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
                <div className="ui grid" >
                    <div className="ui row" >
                        <div className="eleven wide column" >
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}

export default App