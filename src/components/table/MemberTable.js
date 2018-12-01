import React from 'react';
import FilterOptions from './FilterOptions';
import SortOptions from './SortOptions';
import AllMembers from './AllMembers';

export const MemberTable = () => (
    <div>
        <FilterOptions id="members" />
        <table className="clanMembers">
            <SortOptions />
            <AllMembers />
        </table>
    </div>
);

export default MemberTable;
