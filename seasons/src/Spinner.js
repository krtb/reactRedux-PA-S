import React from 'react';

const Spinner = props => {
    return (
            <div class="ui active dimmer">
                <div class="ui big text loader">{props.message}</div>
            </div>
    );
}

// to be run IF we forget to put in a message || decide not to
Spinner.defaultProps = {
    // default props to be passed in 
    message: "Loading..."
};

export default Spinner;
