import React, { Component } from 'react';

// ##STYLES
import './NavSearch.scss';

class NavSearch extends Component {
  render() {
    return (
      <div className="navSearchBox">
        <p className="searchTitle">연관검색어</p>
        <ul className="searchResults">
          {this.props.searchLists.results &&
            this.props.searchLists.results.map(el => {
              return <li>{el.word}</li>;
            })}
        </ul>
      </div>
    );
  }
}
export default NavSearch;
