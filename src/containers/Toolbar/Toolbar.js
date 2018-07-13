import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import './Toolbar.css';
import { filterByName } from '../../actions';

const Toolbar = ({ showSearch = true, dispatch }) => (
  <div className="siteHeader">
    <Header title="GyanMatrix - Footballers Arena" />
    { showSearch === true ? 
    <Search searchInputChanged={searchInput => dispatch(filterByName(searchInput))} />  : ''}
  </div>
);

export default connect()(Toolbar);
