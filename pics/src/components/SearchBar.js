import React from 'react';

class SearchBar extends React.Component {

  state = {
    term: '',
  }

  // event handler, callback function
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }

    render(){
        return (
          <div className="ui segment">
            <form className="ui form">
              <div className="field">
                <label>Image Search</label>
                {/* take input value, force to uppercase each time filtered in, replace input value with transformed text */}
                <input type="text" value={this.state.term}  onChange={e => this.setState({term: e.target.value.toUpperCase() })}/>
              </div>
            </form>
          </div>
        );
    }
}

export default SearchBar;