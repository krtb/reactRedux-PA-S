import React from 'react';
import VideoItem from './VideoItem'

// add deconstructed prop
const VideoList = ({ videos }) => {
    // map over list of items
    // inside of videos array are many objects,
    // which we describe with video variable
    // map over array to produce brand new array
    const renderdList = videos.map((video)=>{
        return <VideoItem  video={video} />
    });

    return(
        <div>
            {renderdList}
        </div>
    )
}

export default VideoList