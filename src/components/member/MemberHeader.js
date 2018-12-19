import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const MemberHeader = ({ member }) => (
    <section className="memberHeader">
        <div className="memberHeader__name">
            <p className="memberHeader__name--user">{member.playername}</p>
            <p className="memberHeader__name--tag">{member.tag}</p>
        </div>
        <div className="memberHeader__rank">
            <p className="memberHeader__rank--trophies">
                Rank #{member.clanrank} ({member.trophies})
            </p>
            <p className="memberHeader__rank--role capitalize">{member.role}</p>
        </div>
    </section>
);

MemberHeader.propTypes = {
    member: PropTypes.object
};

const mapStateToProps = state => ({
    member: state.individualMember
});

export default connect(mapStateToProps)(MemberHeader);
