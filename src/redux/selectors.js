const filterOptions = {
    none: member => member,
    promotion: member => member.eligibleForPromotion,
    probation: member => member.onProbation,
    demotion: member => member.dangerOfDemotion
}

const sortOptions = {
    rank: {
        ascending : (a, b) => a.rank - b.rank,
        descending : (a, b) => b.rank - a.rank
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
    warBattltes: {
        ascending: (a, b) => b.warBattles - a.warBattles,
        descending: (a, b) => a.warBattles - b.warBattles
    },
    missed: {
        ascending: (a, b) => b.missedWarBattles - a.missedWarBattles,
        descending: (a, b) =>  a.missedWarBattles - b.missedWarBattles
    },
    role: {
        getValue(role){
            switch(role) {
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
        },
        ascending(a, b){
            const aRole = this.getValue(a.role)
            const bRole = this.getValue(b.role)

            return aRole - bRole
        },
        descending(a, b){
            const aRole = this.getValue(a.role)
            const bRole = this.getValue(b.role)

            return bRole - aRole
        },
    }
}

export default {
    getMembers: state => state.clan.members
        .filter(filterOptions[state.filter])
        .sort(sortOptions[state.sort][state.dir]),
    
    getSearchResult: (state, query) => query ? state.clan.members.find(member => (
        member.name.toLowerCase().includes(query.toLowerCase().trim() ||
        member.tag  === query))) : undefined
}