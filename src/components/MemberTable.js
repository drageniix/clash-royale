import React from 'react';
import { capitalizeRole, checkDonations } from '../utilities/members';
import { getMembers } from '../redux/selectors';
import { setQuery } from '../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class MemberTable extends React.Component {
    onClick = memberTag => () => {
        this.props.onClick(memberTag);
    };

    render() {
        return (
            <tbody>
                {this.props.members.map((member, index) => (
                    <tr
                        key={index}
                        className={
                            'clanMembers__' +
                            (member.eligibleForPromotion
                                ? 'promotion'
                                : member.onProbation
                                ? 'probation'
                                : member.dangerOfDemotion
                                ? 'demotion'
                                : 'row')
                        }
                    >
                        <td className="align-left">
                            {' '}
                            #{member.clanrank} ({member.trophies})
                        </td>
                        <td className="align-right">
                            {capitalizeRole(member)}
                        </td>
                        <td
                            className="pointer align-left member-link"
                            onClick={this.onClick(member.tag)}
                        >
                            {member.playername}
                        </td>
                        <td className="align-right">
                            {checkDonations(member)}
                        </td>
                        <td className="align-right">
                            {member.battles || '0'}
                            {member.missed > 0
                                ? ' (' + member.missed + 'M)'
                                : ''}
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    }
}

const mapStateToProps = state => ({
    members: getMembers(state.members, state.filters)
});

const mapDispatchToProps = dispatch => ({
    onClick: query => {
        window.scroll({ top: 150, left: 0, behavior: 'smooth' }); //can't use in tests
        dispatch(setQuery(query));
    }
});

MemberTable.propTypes = {
    members: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberTable);
