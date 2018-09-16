import { setQuery, setFilter, setOrder, setNewWeek } from "../../src/redux/actions";

// test('action: set current', () => {
//     expect(setCurrent(123)).toEqual({
//         type: 'SET_CURRENT',
//         current: 123
//     })
//     expect(setCurrent()).toEqual({
//         type: 'SET_CURRENT',
//         current: 0
//     })
// })

test('action: set new week json', () => {
    const jsonData = {test: '123'}
    expect(setNewWeek(jsonData, 0)).toEqual({
        type: 'SET_WEEK',
        json: jsonData,
        current: 0
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