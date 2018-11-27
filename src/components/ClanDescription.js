import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import { getSearchResult } from '../redux/selectors';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

export const ClanDescription = ({ member }) => (
    <section className="description" id="description">
        <Search />
        {member ? <SearchResult /> : <div className="description__reqs" />}
    </section>
);

ClanDescription.propTypes = {
    member: PropTypes.object
};

export default connect(state => ({
    member: getSearchResult(state.query, state.members)
}))(ClanDescription);
