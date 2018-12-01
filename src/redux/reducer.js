const defaultState = {
    members: [],
    query: 'meliaesc',
    filters: {
        filter: 'none', //none, promotion, probation, demotion
        order: 'rank', //rank, name, donations, wars, wins, missed, role
        dir: 'ascending' //ascending and descending, automatic from order
    }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_MEMBERS':
            return {
                ...state,
                members: action.members
            };
        case 'SET_QUERY':
            return {
                ...state,
                query: action.query
            };
        case 'SET_FILTER':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    filter: action.filter
                }
            };
        case 'SET_ORDER':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    order: action.order,
                    dir:
                        state.filters.order === action.order &&
                        state.filters.dir == 'ascending'
                            ? 'descending'
                            : 'ascending'
                }
            };
        default:
            return state;
    }
};
