import './VideoItem.css'
import React from 'react';
// when communicating down, parent to child, use props
// when communicating back up, make use of callBack func

// destructure out prop being pass in from videlist, in videoItem parent component
const VideoItem = ({video, onVideoSelect}) => {
    return(
        // add arrow function, want to call onVideoSelect with some arg
        // if placed without arrow func, will be called without video object
        <div onClick={() => onVideoSelect(video)} className="video-item item" >
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content" >
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem