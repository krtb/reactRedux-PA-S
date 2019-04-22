import React from 'react';
import { connect } from 'react-redux';

// destructure out prop that you care about
const SongDetail = ({song}) => {
    // console.log(props);
    if(!song){
        return (
            <div>SELECT A SONG</div>
        )
    }
    
    return (
        <div>
            {song.title}
        </div>
    )
}

// will be called with entire state object,
// need to only return prop we care about
const mapStateToProps = (state) => {
    return {song: state.selectedSong}
}

// want to wrap with connect so that we can get some info from the redux store
export default connect(mapStateToProps)(SongDetail)