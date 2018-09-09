const defaultState = {
    query: "",
    filters: {
        filter: "none", //none, promotion, probation, demotion
        order: "rank", //rank, name, donations, wars, missed, role
        dir: "ascending" //ascending and descending, automatic from order
    },
    
    current: 0,
    lastWeeks: [{
        url: "/clan.json",
        display: "Current Week"
    }],

    //from api
    time: 0,
    discord: "",
    admin: {},
    clan: {},
    members: []
}

export default (state = defaultState, action) => {
    switch(action.type){
        case "SET_WEEK":
            return {
                ...action.json,
                current: state.current,
                query: state.query,
                filters: {
                    ...state.filters,
                },
                lastWeeks: state.lastWeeks.length == 1 && action.json.lastWeeks ? [...state.lastWeeks, ...action.json.lastWeeks] : state.lastWeeks,
            }
        case "SET_CURRENT":
            return {
                ...state,
                current: action.current
            }
        case "SET_QUERY":
            return {
                ...state,
                query: action.query
            }
        case "SET_FILTER":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    filter: action.filter
                }
            }
        case "SET_ORDER":
            return {
                ...state,
                filters : {
                    filter: state.filters.filter,
                    order: action.order,
                    dir: state.filters.order === action.order && state.filters.dir == 'ascending' ? 'descending' : 'ascending'
                }
            }
        default:
            return state
    }
}