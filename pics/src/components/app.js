import React from 'react';
import SearchBar from './SearchBar';

// functional component
const App = () => {
    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            {/* import searchbar to be rendered in index */}
            <SearchBar/>
        </div>
    );
};

export default App;

