const defaultState = {
    current: 0,
    ref: undefined,
    query: "",
    filter: "none", //none, promotion, probation, demotion
    order: "rank", //rank, name, donations, wars, missed, role
    dir: "ascending", //ascending and descending, automatic from order
    
    //from api
    time: 0,
    discord: "",
    admin: {},
    clan: {},
    members: [],
    lastWeeks: [{
        url: "/clan.json",
        display: "Current Week"
    }]
}

export default (state = defaultState, action) => {
    switch(action.type){
        case "SET_CURRENT":
            return {
                ...state,
                current: action.current
            }
        case "SET_WEEK":
            return {
                ...action.json,
                current: state.current,
                query: "",
                filter: state.filter,
                order: state.order,
                dir: state.dir,
                lastWeeks: state.lastWeeks.length == 1 ? [...state.lastWeeks, ...action.json.lastWeeks] : state.lastWeeks,
            }
        case "SET_QUERY":
            return {
                ...state,
                query: action.query
            }
        case "SET_FILTER":
            return {
                ...state,
                filter: action.filter
            }
        case "SET_ORDER":
            return {
                ...state,
                order: action.order,
                dir: state.order === action.order.toLowerCase() && state.dir == 'ascending' ? 'descending' : 'ascending'
            }
        default:
            return state
    }
}