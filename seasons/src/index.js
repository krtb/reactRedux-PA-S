import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {

        // need to pass in 2 seperate function callbacks
        window.navigator.geolocation.getCurrentPosition(

            // first func called when location success
            // success Callback
            (position) => console.log(position),
            // fauilure callback, unable to determine
            (err) => console.log(err)

        );
        return <div>Lattitude: </div>;
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
