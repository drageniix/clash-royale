import React from 'react';
import PropTypes from 'prop-types';
import { capitalizeRole } from '../../utilities/members';

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
            <p className="memberHeader__rank--role">{capitalizeRole(member)}</p>
        </div>
    </section>
);

MemberHeader.propTypes = {
    member: PropTypes.object
};

export default MemberHeader;
