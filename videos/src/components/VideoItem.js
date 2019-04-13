import './VideoItem.css'
import React from 'react';

// destructure out prop being pass in from videlist, in videoItem parent component
const VideoItem = ({video, onVideoSelect}) => {
    return(
        // find root div of component and give it className === to component
        <div className="video-item item" >
            <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content" >
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem