import React from 'react'
import { connect } from 'react-redux';
import { getMembers } from '../redux/selectors'
import { setQuery } from '../redux/actions'
import PropTypes from 'prop-types'

export class TopPlayers extends React.Component {
    onClick = memberTag => () => {
        this.props.onClick(memberTag)
    }

    render() {
        return (
            <div className="topPlayers">
                <h4>{this.props.title}</h4>
                <table>
                    <tbody>
                        {this.props.members.map((member, index) => (
                            <tr key={index}>
                                <td>{index + 1}.</td>
                                <td className='pointer member-link' onClick={this.onClick(member.tag)}>
                                    {member.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state, { order }) => ({
    members: getMembers(state.api.members, { order }).slice(0, 3),
})

const mapDispatchToProps = dispatch => ({
    onClick: query => dispatch(setQuery(query))
})

TopPlayers.propTypes = {
    title: PropTypes.string.isRequired,
    members: PropTypes.array.isRequired,
    onClick: PropTypes.function
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPlayers)