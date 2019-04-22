import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongsList extends Component {
    render(){
        return (
            <div>SONG LIST</div>
        )
    }
}

// returning a function, second set invokes functions that was returned
export default connect()(SongsList)