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
            errorMessage: '',
        };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        // conditional rendering below
        if(this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage} </div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div> Lattitude: {this.state.lat} </div>
        }

        return <div> Loading... </div>
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
