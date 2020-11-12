import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

export const Search = ({ query, onQuery }) => (
  <div className="search">
    <label htmlFor="search-query">
      Search by the name and description
    </label>

    <input
      type="text"
      name="query"
      value={query}
      className="form-control"
      id="search-query"
      onChange={onQuery}
      placeholder="Write your query"
    />
  </div>
);

Search.propTypes = {
  query: PropTypes.string,
  onQuery: PropTypes.func.isRequired,
};

Search.defaultProps = {
  query: '',
};
