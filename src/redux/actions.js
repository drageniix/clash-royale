export const setNewWeek = (json = {members: []}) => ({
    type: "SET_WEEK",
    json
})

export const setSearchResult = (query = '') => ({
    type: "SET_QUERY",
    query
})

export const setFilter = (filter = 'none') => ({
    type: "SET_FILTER",
    filter
})

export const setOrder = (order = 'rank') => ({
    type: "SET_ORDER",
    order
})