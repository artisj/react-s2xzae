import React from "react";
import React, { useState } from "react";

class SearchBar extends React.Component {
  state = { Term: "" };

  onInputChange = event=> {
   this.setState({ Term: event.target.value });
  }

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.Term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.Term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
