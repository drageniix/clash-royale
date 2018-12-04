import React from 'react';
import { getMembers } from '../../redux/selectors';
import { setQuery } from '../../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class AllMembers extends React.Component {
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
                        <td className="align-right capitalize">
                            {member.role}
                        </td>
                        <td
                            unselectable="on"
                            className="pointer align-left member-link"
                            onClick={this.onClick(member.tag)}
                        >
                            {member.playername}
                        </td>
                        <td className="align-right">
                            {member.donations || 'none'}
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
    onClick: query => dispatch(setQuery(query))
});

AllMembers.propTypes = {
    members: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllMembers);
