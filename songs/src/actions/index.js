// ACTION CREATOR

// if we pass a song to this, will return an action type and our payload of the song
// this actionshould end up in our selectedSongReducer, inside of our rediucers file
export const selectSong = (song) => {
    // REUTURN AN ACTION, as plain JS object
    // payload prop is optional, type IS required
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
    // assume that will pass in song arg passed in above
};

