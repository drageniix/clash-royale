export default {
    setNewWeek: (json = {members: []}) => ({
        type: "SET_WEEK",
        json
    }),
    setSearchResult: (query = '') => ({
        type: "SET_QUERY",
        query
    }),
    setFilter: (filter = 'none') => ({
        type: "SET_FILTER",
        filter
    }),
    setOrder: (order = 'rank') => ({
        type: "SET_ORDER",
        order
    })
}