import React from 'react';


const VideoDetail = ({video}) => {
    // instead of props.video => video
    if(!video){
       return <div>Loading...</div>
    }

    return (
        <div className="ui segment" >
            <div className="ui header" >
                {video.snippet.title}
            </div>
            <p>
                {video.snippet.description}
            </p>
        </div>
    )
}

export default VideoDetail