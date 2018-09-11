const defaultState = {
    current: 0,
    api: {
        time: 0,
        discord: "",
        admin: {},
        clan: {},
        members: [],
        lastWeeks: [{
            url: "/clan.json",
            display: "Current Week"
        }]
    },
    query: "",
    filters: {
        filter: "none", //none, promotion, probation, demotion
        order: "rank", //rank, name, donations, wars, missed, role
        dir: "ascending" //ascending and descending, automatic from order
    }
}

export default (state = defaultState, action) => {
    switch(action.type){
        case "SET_WEEK":
            return {
                ...state,
                api: {
                    ...action.json,
                    lastWeeks: state.api.lastWeeks.length == 1 && action.json.lastWeeks ? [...state.api.lastWeeks, ...action.json.lastWeeks] : state.api.lastWeeks,
                }
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
                    ...state.filters,
                    order: action.order,
                    dir: state.filters.order === action.order && state.filters.dir == 'ascending' ? 'descending' : 'ascending'
                }
            }
        default:
            return state
    }
}