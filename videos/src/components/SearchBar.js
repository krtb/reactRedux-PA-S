import React from 'react';

class SearchBar extends React.Component{
    // C.C. Step 1 = create default state value searchbard will have at the start
    state = {
        term: '',
    }

    render(){
        return(
            
            <div className="ui segment">
                <form className="ui form" >
                    <div className="field" >
                        <label>Video Search</label>
                        {/* add default value from state to display on first render */}
                        {/* if you don't add an OnChange() event, input won't be allowed to change */}
                        <input value={this.state.term} type="text" ></input>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default SearchBar
