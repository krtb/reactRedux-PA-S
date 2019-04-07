import React from 'react';

class SearchBar extends React.Component{
    // C.C. Step 1 = create default state value searchbard will have at the start
    state = {
        term: '',
    }

    // step 3 = create your callback arrow function, to capture this
    onInputChange = (e) => {
        // step 4 = change state with this.setState() function, pass in event target value that was input
        this.setState({
            term: this.e.target.value
        })
    }

    render(){
        return(
            
            <div className="ui segment">
                <form className="ui form" >
                    <div className="field" >
                        <label>Video Search</label>
                        {/* add default value from state to display on first render */}
                        {/* step 2 = adding in onChange callback method, that will eventually pass data to SearchBar callback */}
                        <input value={this.state.term} onChange={this.onInputChange} type="text" ></input>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default SearchBar
