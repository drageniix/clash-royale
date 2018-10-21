const setFetchedWeek = (json, current) => ({
    type: 'SET_WEEK',
    json,
    current
})

export const setNewWeek = (stateLastWeeks, current = 0) => dispatch =>  {
    const url = ' ./assets/data' + stateLastWeeks[current].url
    fetch(url)
        .then(response => response.json())
        .then(api => {
            dispatch(setFetchedWeek(api, current))
            return api
        })
}

export const setQuery = (query = '') => ({
    type: 'SET_QUERY',
    query
})

export const setFilter = {
    byNone : () => ({
        type: 'SET_FILTER',
        filter: 'none'
    }),
    byPromotion : () => ({
        type: 'SET_FILTER',
        filter: 'promotion'
    }),
    byProbation : () => ({
        type: 'SET_FILTER',
        filter: 'probation'
    }),
    byDemotion : () => ({
        type: 'SET_FILTER',
        filter: 'demotion'
    })
}

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
    }),
}