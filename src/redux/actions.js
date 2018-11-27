export const setMembers = () => dispatch => {
    const url = './assets/data/members.json';
    fetch(url)
        .then(response => response.json())
        .then(api => {
            dispatch({
                type: 'SET_MEMBERS',
                members: api.members
            });
        });
};

export const setQuery = (query = '') => ({
    type: 'SET_QUERY',
    query
});

export const setFilter = {
    byNone: () => ({
        type: 'SET_FILTER',
        filter: 'none'
    }),
    byPromotion: () => ({
        type: 'SET_FILTER',
        filter: 'promotion'
    }),
    byProbation: () => ({
        type: 'SET_FILTER',
        filter: 'probation'
    }),
    byDemotion: () => ({
        type: 'SET_FILTER',
        filter: 'demotion'
    })
};

export const setOrder = {
    byRank: () => ({
        type: 'SET_ORDER',
        order: 'rank'
    }),
    byName: () => ({
        type: 'SET_ORDER',
        order: 'name'
    }),
    byDonations: () => ({
        type: 'SET_ORDER',
        order: 'donations'
    }),
    byWars: () => ({
        type: 'SET_ORDER',
        order: 'wars'
    }),
    byWarBattles: () => ({
        type: 'SET_ORDER',
        order: 'warBattles'
    }),
    byLosses: () => ({
        type: 'SET_ORDER',
        order: 'losses'
    }),
    byWins: () => ({
        type: 'SET_ORDER',
        order: 'wins'
    }),
    byMissed: () => ({
        type: 'SET_ORDER',
        order: 'missed'
    }),
    byRole: () => ({
        type: 'SET_ORDER',
        order: 'role'
    })
};
