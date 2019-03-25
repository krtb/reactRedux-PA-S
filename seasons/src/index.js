import React from 'react';
import ReactDOM from 'react-dom';

// functional component
const App = () => {

    // need to pass in 2 seperate function callbacks
    window.navigator.geolocation.getCurrentPosition(

        // first func called when location success
        // success Callback
        (position) => console.log(position, 'SUCCESS'),
        // fauilure callback, unable to determine
        (err) => console.log(err, 'FAILURE')

    );
    
    return <div>Hi there!</div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
