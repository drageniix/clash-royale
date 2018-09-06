export const setCurrent = current => ({ 
    type: "SET_CURRENT",
    current
})

export const setNewWeek = json => ({ //from api response
    type: "SET_WEEK",
    json
})

export const setQuery = (query = '') => ({
    type: "SET_QUERY",
    query
})

export const setFilter = {
    byNone : {
        type: "SET_FILTER",
        filter: "none"
    },
    byPromotion : {
        type: "SET_FILTER",
        filter: "promotion"
    },
    byProbation : {
        type: "SET_FILTER",
        filter: "probation"
    },
    byDemotion : {
        type: "SET_FILTER",
        filter: "demotion"
    }
}

export const setOrder = {
    byRank: {
        type: "SET_ORDER",
        order: 'rank'
    },
    byName: {
        type: "SET_ORDER",
        order: 'name'
    },
    byDonations: {
        type: "SET_ORDER",
        order: 'donations'
    },
    byWarBattles: {
        type: "SET_ORDER",
        order: 'wars'
    },
    byMissed: {
        type: "SET_ORDER",
        order: 'missed'
    },
    byRole: {
        type: "SET_ORDER",
        order: 'role'
    },
}