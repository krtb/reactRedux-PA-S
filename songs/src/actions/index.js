// ACTION CREATOR
export const selectSong = (song) => {
    // REUTURN AN ACTION, as plain JS object
    // payload prop is optional, type IS required
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
    // assume that will pass in song arg passed in above
};

