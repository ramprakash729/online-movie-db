import React from "react";

import { addMovieToList, handleMovieSearch } from "../actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
  }

  handleAddtoMovies = (movies) => {
    this.props.dispatch(addMovieToList(movies));
    this.setState({
      showSearchResults: false,
    });
  };

  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { result: movie, showSearchResults } = this.props.search;
    // console.log("RESULT", result);
    return (
      <div className="nav">
        <div className="search-container">
          <input type="text" onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddtoMovies(movie)}>
                    Add to movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
