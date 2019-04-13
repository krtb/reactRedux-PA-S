import React from 'react';


const VideoDetail = ({video}) => {
    // instead of props.video => video
    if(!video){
       return <div>Loading...</div>
    }
    
    return (
        <div>{video.snippet.title}</div>
    )
}

export default VideoDetail