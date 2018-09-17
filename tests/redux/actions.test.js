import { setQuery, setFilter, setOrder, setCurrent } from "../../src/redux/actions";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const createMockStore = configureMockStore([thunk])

test('action: set new week', done => {
    const store = createMockStore({})
    const lastWeeks = [{
        url: "/clan.json",
        display: "Current Week"
    }]

    return store.dispatch(setCurrent(lastWeeks, 0)).then(json => {
        expect(store.getActions()[0]).toEqual({
            type:'SET_WEEK',
            current: 0,
            json
        })
        done()
    })
})

test('action: set query', () => {
    const query = 'query'
    expect(setQuery(query)).toEqual({
        type: 'SET_QUERY',
        query: query
    })
    expect(setQuery()).toEqual({
        type: 'SET_QUERY',
        query: ''
    })
})

test('action: set filter', () => {
    expect(setFilter.byNone()).toEqual({
        type: "SET_FILTER",
        filter: "none"
    })
    expect(setFilter.byPromotion()).toEqual({
        type: "SET_FILTER",
        filter: "promotion"
    })
    expect(setFilter.byProbation()).toEqual({
        type: "SET_FILTER",
        filter: "probation"
    })
    expect(setFilter.byDemotion()).toEqual({
        type: "SET_FILTER",
        filter: "demotion"
    })
})

test('action: set order', () => {
    expect(setOrder.byRank()).toEqual({
        type: "SET_ORDER",
        order: "rank"
    })
    expect(setOrder.byName()).toEqual({
        type: "SET_ORDER",
        order: "name"
    })
    expect(setOrder.byDonations()).toEqual({
        type: "SET_ORDER",
        order: "donations"
    })
    expect(setOrder.byWars()).toEqual({
        type: "SET_ORDER",
        order: "wars"
    })
    expect(setOrder.byWarBattles()).toEqual({
        type: "SET_ORDER",
        order: "warBattles"
    })
    expect(setOrder.byWins()).toEqual({
        type: "SET_ORDER",
        order: "wins"
    })
    expect(setOrder.byLosses()).toEqual({
        type: "SET_ORDER",
        order: "losses"
    })
    expect(setOrder.byMissed()).toEqual({
        type: "SET_ORDER",
        order: "missed"
    })
    expect(setOrder.byRole()).toEqual({
        type: "SET_ORDER",
        order: "role"
    })
})