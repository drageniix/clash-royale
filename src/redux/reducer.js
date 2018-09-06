const defaultState = {
    clan: {members: []}, //from api
    lastWeeks: [], //from initial clan data
    query: "", //member from query with case insensitive name portion or exact tag
    filter: "none", //none, promotion, probation, demotion
    order : "rank", //rank, name, donations, warBattles, missed, role
    dir: "ascending", //ascending and descending, automatic from order
}

export default (state = defaultState, action) => {
    switch(action.type){
        case "SET_WEEK":
            return {
                ...defaultState,
                lastWeeks: state.lastWeeks,
                clan: action.json
            }
        case "SET_QUERY":
            return {
                ...state,
                query: action.query
            }
        case "SET_FILTER":
            return {
                ...state,
                filter: action.filter.toLowerCase()
            }
        case "SET_ORDER":
            return {
                ...state,
                order: action.order.toLowerCase(),
                dir: state.order === action.order.toLowerCase() && state.dir == 'ascending' ? 'descending' : 'ascending'
            }
        default:
            return state
    }
}