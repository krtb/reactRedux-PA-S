import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

   state = {
       lat: null,
       errorMessage: '',
   }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent(){
        // conditional rendering below
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            // passing down state as props to component
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request" />
    }

    render() {

        // any time we make a component, want it to not have as many returns for exacty this reason
        // condition where no matter what, always want to return what's wrapped inside of a copmonent
        // with some common element
        return(
            <div className=" border red ">
                {/* no matter what the result, will always surround with item that has red border */}
                {this.renderContent()}
            </div>
        )

    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
