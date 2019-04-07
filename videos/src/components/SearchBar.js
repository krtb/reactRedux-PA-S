import React from 'react';

class SearchBar extends React.Component{
    // add in state to create a controlled SearchBar component
    state = {
        term: '',
    }

    render(){
        return(
            
            <div className="ui segment">
                <form className="ui form" >
                    <div className="field" >
                        <label>Video Search</label>
                        <input type="text" ></input>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default SearchBar
