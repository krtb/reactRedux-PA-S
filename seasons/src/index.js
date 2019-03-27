import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    // initialized with props object
    constructor(props) {
        // have to call super, pass in props
        // extending, borrowing functionality
        // defnining here replaces/overrides constructor func
        // inside of React.Component class
        // to make sure parent gets called, call SUPER w/ props
        super(props)

        this.state = {
            // don't know value yet, will know later
            lat: null,
        };

    }

    render() {
        // User's Current Latitude is single piece of state that we care about here:

        // need to pass in 2 seperate function callbacks
        window.navigator.geolocation.getCurrentPosition(

            // first func called when location success
            // success Callback
            (position) => console.log(position),
            // fauilure callback, unable to determine
            (err) => console.log(err)

        );
        return <div>Lattitude: {this.state.lat}</div>;
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
