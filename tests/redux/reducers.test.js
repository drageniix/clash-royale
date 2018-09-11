import reducer from '../../src/redux/reducer'

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

test('default state', () => {
    expect(reducer(undefined, { 
        type: '@@INIT' 
    })).toEqual(defaultState)
})

test('reducer: set week', () => {
    expect(reducer(undefined, {
        type: 'SET_WEEK',
        json: clan
    })).toEqual({
        ...defaultState,
        api : {
            ...clan,
            lastWeeks: (clan.lastWeeks ? 
                [...defaultState.api.lastWeeks, ...clan.lastWeeks] : 
                [...defaultState.api.lastWeeks])
        }
    })
})

test('reducer: set current', () => {
    const current = 123
    expect(reducer(undefined, {
        type: 'SET_CURRENT',
        current
    }).current).toBe(current)
})

test('reducer: set query', () => {
    const query = 'alphabet123'
    expect(reducer(undefined, {
        type: 'SET_QUERY',
        query
    }).query).toBe(query)
})

test('reducer: set filter', () => {
    const filter = 'promotion'
    expect(reducer(undefined, {
        type: 'SET_FILTER',
        filter
    }).filters.filter).toBe(filter)
})

test('reducer: set order', () => {
    const order = 'role'
    const state = reducer(undefined, {
        type: 'SET_ORDER',
        order
    })

    expect(state.filters.order).toBe(order)
    expect(state.filters.dir).toBe('ascending')

    const secondaryState = reducer(state, {
        type: 'SET_ORDER',
        order
    })

    expect(secondaryState.filters.order).toBe(order)
    expect(secondaryState.filters.dir).toBe('descending')
})