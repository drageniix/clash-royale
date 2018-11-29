import React from 'react';
import { capitalizeRole, getMemberColor } from '../utilities/members';
import { getSearchResult } from '../redux/selectors';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const SearchResult = ({ member }) => (
    <section className="searchResult">
        <div
            className="searchResult__content"
            id={member && getMemberColor(member)}
        >
            <div className="searchResult__table--wrapper">
                {member && (
                    <table className="searchResult__table">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{member.playername}</td>
                            </tr>
                            <tr>
                                <td>Tag</td>
                                <td>{member.tag}</td>
                            </tr>
                            <tr>
                                <td>Trophies</td>
                                <td>{member.trophies}</td>
                            </tr>
                            <tr>
                                <td>Role</td>
                                <td>{capitalizeRole(member)}</td>
                            </tr>
                            <tr>
                                <td>Donations</td>
                                <td>{member.donations}</td>
                            </tr>
                            <tr>
                                <td>Donations Received</td>
                                <td>{member.donationsreceived}</td>
                            </tr>
                            <tr>
                                <td>War Battles (Last {member.wars})</td>
                                <td>{`${member.wins ||
                                    '0'}W - ${member.losses || '0'}L - ${
                                    member.missed
                                }M`}</td>
                            </tr>
                            <tr>
                                <td>War Grade</td>
                                <td>
                                    <p>Win Ratio: {member.winRatio}%</p>
                                    <p>
                                        Participation:{' '}
                                        {member.warParticipationRatio}%
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    </section>
);

SearchResult.propTypes = {
    member: PropTypes.object
};

export default connect(state => ({
    member: getSearchResult(state.query, state.members)
}))(SearchResult);
