import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    console.log(props);
    
    return (
        <div>
            SongDetail
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