import {combineReducers} from 'redux' //named export exammple, need to look at documentation from that library to know which type

// reducer that will contain a static list of songs
// usually would not need reducer for this, just an example
const songsReducer = () => {
    // will return an array of objects,
    // each object is a different song
    return [
        {
            title: 'No SCrubs',
            duration: '4:05'
        },
        {
            title: 'Macarena',
            duration: '2:30 '
        },
        {
            title: 'All Star',
            duration: '3:15'
        },
        {
            title: 'Backstreet Boys',
            duration: '1:45'
        }
    ];
}

// default of null for selected song when app starts
const selectedSongReducer = (selectedSong = null, action) => {
    // if type is songSelected, return it's payload prop
    // has payload song arg that user is trying to select

    // wrote out if statement assuming that there will be other actions/types created in the future
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    // if not the correct type, return what ever currentyl selected song is
    return selectedSong
}

// keys of this object, will be the ones seen inside of our state object
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
// now any other file in project has access to combined set of reducers