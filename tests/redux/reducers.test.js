import reducer from '../../src/redux/reducer'
import clan from '../resources/clan.json'

test('default state', () => {
    expect(reducer(undefined, { 
        type: '@@INIT' 
    })).toEqual({
        query: "",
        filters: {
            filter: "none",
            order: "rank",
            dir: "ascending"
        },
        current: 0,
        lastWeeks: [{
            url: "/clan.json",
            display: "Current Week"
        }],
        time: 0,
        discord: "",
        admin: {},
        clan: {},
        members: []
     })
})

test('reducer: set week', () => {
    expect(reducer(undefined, {
        type: 'SET_WEEK',
        json: clan
    })).toEqual({
        ...clan,
        query: "",
        filters: {
            filter: "none",
            order: "rank",
            dir: "ascending"
        },
        current: 0,
        lastWeeks: (clan.lastWeeks ? [{
            url: "/clan.json",
            display: "Current Week"
        }, ...clan.lastWeeks] : [{
            url: "/clan.json",
            display: "Current Week"
        }])
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