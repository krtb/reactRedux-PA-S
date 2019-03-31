import React from 'react';

class SearchBar extends React.Component {

  state = {
    term: '',
  }

  onFormSubmit = (e) => {
    // will prevent form from being submitted automatically
    e.preventDefault();
    // whenever using Class based component,
    // reference props object with THIS
    this.props.onSubmit(this.state.term)

    // 1 => this.props = props that we've provided THIS instance of SearchBAr
    // 2 => onSubmit = callback function to  be pass in data
    // 3 => this.state.term = will send data on form submission
    
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