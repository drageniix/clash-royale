import { firstBy } from "../utilities/basic";

const filterOptions = {
    none: member => member,
    promotion: member => member.eligibleForPromotion,
    probation: member => member.onProbation,
    demotion: member => member.dangerOfDemotion
}

const sortOptions = {
    rank: {
        ascending : (a, b) => a.clanRank - b.clanRank,
        descending : (a, b) => b.clanRank - a.clanRank
    },
    name: {
        ascending: (a, b) => {
            const aName = a.name.toLowerCase()
            const bName = b.name.toLowerCase()
            return aName < bName ? -1 : aName > bName ? 1 : 0
        },
        descending: (a, b) => {
            const aName = a.name.toLowerCase()
            const bName = b.name.toLowerCase()
            return aName < bName ? 1 : aName > bName ? -1 : 0
        }
    },
    donations: {
        ascending: (a, b) => b.donations - a.donations,
        descending: (a, b) => a.donations - b.donations
    },
    warBattles : {
        ascending: (a, b) => b.warBattles - a.warBattles,
        descending: (a, b) => a.warBattles - b.warBattles
    },
    wins : {
        ascending: (a, b) => b.wins - a.wins,
        descending: (a, b) => a.wins - b.wins
    },
    losses : {
        ascending: (a, b) => b.losses - a.losses,
        descending: (a, b) => a.losses - b.losses
    },
    missed: {
        ascending: (a, b) => b.missedWarBattles - a.missedWarBattles,
        descending: (a, b) => a.missedWarBattles - b.missedWarBattles
    },
    role: {
        ascending(a, b){
            const aRole = getRoleValue(a.role)
            const bRole = getRoleValue(b.role)

            return aRole - bRole
        },
        descending(a, b){
            const aRole = getRoleValue(a.role)
            const bRole = getRoleValue(b.role)

            return bRole - aRole
        },
    },
}

sortOptions.wars = {
    ascending: firstBy(sortOptions.warBattles.ascending).thenBy(sortOptions.wins.ascending),
    descending: firstBy(sortOptions.missed.ascending).thenBy(sortOptions.warBattles.descending).thenBy(sortOptions.losses.ascending)
}

function getRoleValue(role){
    switch (role) {
        case 'leader':
            return 1
        case 'coleader':
            return 2
        case 'elder':
            return 3
        case 'member':
            return 4
        case 'new':
            return 5
    }
}

export const getMembers = (stateMembers, { filter = 'none', order = 'rank', dir = 'ascending' } = {}) => stateMembers
    .filter(filterOptions[filter])
    .sort(sortOptions[order][dir])
    
export const getSearchResult = (stateQuery, stateMembers) => stateQuery ? stateMembers.find(member => (
    member.name.toLowerCase().includes(stateQuery.toLowerCase().trim()) ||
    member.tag === stateQuery)) : undefined

export const getDirectionIndicator = ({ order , dir }, currentOrder) => (
    currentOrder.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) +
    (order  === currentOrder ? (dir === 'ascending' ? " ▼" : " ▲") : "")
)

export const getSelectedFilterClass = (stateFilter, filter) => "pointer filter__list--item" + (stateFilter === filter ? " filter__list--item--selected" : "")