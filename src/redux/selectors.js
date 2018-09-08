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
    wars: {
        ascending: (a, b) => b.warBattles - a.warBattles,
        descending: (a, b) => a.warBattles - b.warBattles
    },
    missed: {
        ascending: (a, b) => b.missedWarBattles - a.missedWarBattles,
        descending: (a, b) =>  a.missedWarBattles - b.missedWarBattles
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
    }
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

export const getMembers = (stateMembers, stateFilter, stateOrder, stateDir) => stateMembers
    .filter(filterOptions[stateFilter])
    .sort(sortOptions[stateOrder][stateDir])
    
export const getSearchResult = (stateQuery, stateMembers) => stateQuery ? stateMembers.find(member => (
    member.name.toLowerCase().includes(stateQuery.toLowerCase().trim()) ||
    member.tag === stateQuery)) : undefined

//Tangent Styling -- Untested
export const getDirectionIndicator = (stateOrder, stateDir, order) => (
    order.replace(/^./, function (str) { return str.toUpperCase(); }) +
    (stateOrder === order ? (stateDir === 'ascending' ? " ▼" : " ▲") : "")
)

export const getSelectedFilterClass = (stateFilter, filter) => "pointer filter__list--item" + (stateFilter === filter ? " filter__list--item--selected" : "")