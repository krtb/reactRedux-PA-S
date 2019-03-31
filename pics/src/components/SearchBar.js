import React from 'react';

class SearchBar extends React.Component {

  state = {
    term: '',
  }

  onFormSubmit = (e) => {
    // will prevent form from being submitted automatically
    e.preventDefault();
    // log out what user is inputting
    console.log(this.state.term);
    
  }

    render(){
        return (
          <div className="ui segment">
          {/* adding event handler that will trigger callBack function: don't want page to refresg every time user presses enter. 
              Instead want to pass in some custom logic of our own */}
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>Image Search</label>
                <input type="text" value={this.state.term}  onChange={e => this.setState({term: e.target.value })}/>
              </div>
            </form>
          </div>
        );
    }
}

export default SearchBar;