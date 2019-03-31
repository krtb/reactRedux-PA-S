import React from 'react';
import SearchBar from './SearchBar';

// functional component
class App extends React.Component {
    // callback to be passed to SearchBard component
    // Parent component should worry about the logic
    onSearchSubmit = (term) => {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                {/* onSearchSubmit is a refrence to callback function defined above, should not be invoked and run immediately */}
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    };
}

export default App;

