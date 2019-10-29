import React from "react";
import SearchBar from "./SearchBar";
import youtube from "./api/youtube";

const App = () => {
  this.onTermSubmit = Term => {
    // make sure data flows from child to parent
    //console.log(Term);

    youtube.get("/search", {
      params: {
        q: Term
      }
    })
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit} />
    </div>
  );
};

export default App;

// onFormSubmit in the searchbar is a callback to pass data
// from the child to the parent
