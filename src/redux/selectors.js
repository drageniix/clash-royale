const filterOptions = {
    none: member => member,
    promotion: member => member.eligibleForPromotion,
    probation: member => member.onProbation,
    demotion: member => member.dangerOfDemotion
};

const sortOptions = {
    rank: {
        ascending: (a, b) => a.clanrank - b.clanrank,
        descending: (a, b) => b.clanrank - a.clanrank
    },
    name: {
        ascending: (a, b) => {
            const aName = a.playername.toLowerCase();
            const bName = b.playername.toLowerCase();
            return aName < bName ? -1 : aName > bName ? 1 : 0;
        },
        descending: (a, b) => {
            const aName = a.playername.toLowerCase();
            const bName = b.playername.toLowerCase();
            return aName < bName ? 1 : aName > bName ? -1 : 0;
        }
    },
    donations: {
        ascending: (a, b) => b.donations - a.donations,
        descending: (a, b) => a.donations - b.donations
    },
    warBattles: {
        ascending: (a, b) => b.battles - a.battles,
        descending: (a, b) => a.battles - b.battles
    },
    wins: {
        ascending: (a, b) => b.wins - a.wins,
        descending: (a, b) => a.wins - b.wins
    },
    losses: {
        ascending: (a, b) => b.losses - a.losses,
        descending: (a, b) => a.losses - b.losses
    },
    missed: {
        ascending: (a, b) => b.missed - a.missed,
        descending: (a, b) => a.missed - b.missed
    },
    role: {
        ascending(a, b) {
            const aRole = getRoleValue(a.role);
            const bRole = getRoleValue(b.role);

            return aRole - bRole;
        },
        descending(a, b) {
            const aRole = getRoleValue(a.role);
            const bRole = getRoleValue(b.role);

            return bRole - aRole;
        }
    },
    wars: {
        ascending: (a, b) =>
            b.warParticipationRatio +
            b.winRatio -
            (a.warParticipationRatio + a.winRatio),
        descending: (a, b) =>
            a.warParticipationRatio +
            a.winRatio -
            (b.warParticipationRatio + b.winRatio)
    }
};

function getRoleValue(role) {
    switch (role) {
        case 'leader':
            return 1;
        case 'coleader':
            return 2;
        case 'elder':
            return 3;
        case 'member':
            return 4;
        case 'new':
            return 5;
    }
}
export const isPastDate = stateCurrent => stateCurrent === 0;

export const getMembers = (
    stateMembers,
    { filter = 'none', order = 'rank', dir = 'ascending' } = {}
) => {
    return stateMembers
        .filter(filterOptions[filter])
        .sort(sortOptions[order][dir]);
};
export const getDirectionIndicator = ({ order, dir }, currentOrder) =>
    currentOrder
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase()) +
    (order === currentOrder ? (dir === 'ascending' ? ' ▼' : ' ▲') : '');

export const getSelectedFilterClass = (stateFilter, filter) =>
    'pointer filter__list--item' +
    (stateFilter === filter ? ' filter__list--item--selected' : '');
