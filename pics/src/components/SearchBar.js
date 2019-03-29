import React from 'react';

class SearchBar extends React.Component {

  // event handler, callback function
  onInputChange(e) {
    console.log(e.target.value);
  }

    render(){
        return (
          <div className="ui segment">
            <form className="ui form">
              <div className="field">
                <label>Image Search</label>
                {/* onInputChange not with (), or would be called every time component rendered */}
                <input type="text"  onChange={this.onInputChange}/>
              </div>
            </form>
          </div>
        );
    }
}

export default SearchBar;