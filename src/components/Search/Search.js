import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({searchInputChanged}) => (
    <input type="text" className="search__box" placeholder="search by player name " onChange={(e) => searchInputChanged(e.target.value)} />
);

Search.propTypes = {
    searchInputChanged: PropTypes.func.isRequired,
}

export default Search;
