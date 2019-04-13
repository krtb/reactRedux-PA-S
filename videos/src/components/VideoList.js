import React from 'react';
import VideoItem from './VideoItem'

// destructure out props that come from parent component in App.js
const VideoList = ({ videos, onVideoSelect }) => {
    // map over list of items
    // inside of videos array are many objects,
    // which we describe with video variable
    // map over array to produce brand new array
    const renderdList = videos.map((video)=>{
        // add new prop that receives callback
        return <VideoItem onVideoSelect={onVideoSelect}  video={video} />
    });

    return(
        <div className="ui relaxed divided list" >
            {renderdList}
        </div>
    )
}

export default VideoList