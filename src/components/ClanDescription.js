import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import { getSearchResult } from '../redux/selectors';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

export const ClanDescription = ({ admin, member }) => (
    <section className="description" id="description">
        <Search />
        {member ? (
            <SearchResult />
        ) : (
            <div className="description__reqs">
                <p>
                    <strong>Member:</strong> Donate at least{' '}
                    {admin.minDonations} cards weekly and participate in{' '}
                    {admin.minWarBattles}
                    /10 war battles, missing a maximum of 1 war day battle when
                    you participated in collection day.
                </p>
                <p>
                    <strong>Elder:</strong> Have at least {admin.minTrophies}{' '}
                    trophies and donate more than {admin.elderDonations} cards.
                    Must participate in at least {admin.elderWarBattles}
                    /10 wars. Kicking members and sending invitations to those
                    below basic member requirements requires permission.
                </p>
            </div>
        )}
    </section>
);

ClanDescription.propTypes = {
    admin: PropTypes.object.isRequired,
    member: PropTypes.object
};

export default connect(state => ({
    admin: state.api.admin,
    member: getSearchResult(state.query, state.api.members)
}))(ClanDescription);
