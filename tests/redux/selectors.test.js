import { getSearchResult, getMembers } from "../../src/redux/selectors";
import sampleMembers from '../resources/sampleMembers'

const reorder = (array, indicies) => {
    const newArray = []
    for (let index of indicies) {
      newArray.push(array[index])
    }
    return newArray
}

test('selector: search', () => {
    expect(getSearchResult('Meliaesc', sampleMembers)).toBe(sampleMembers[0])
    expect(getSearchResult('mElIaEsC', sampleMembers)).toBe(sampleMembers[0])
    expect(getSearchResult('Drago4', sampleMembers)).toBe(sampleMembers[1])
    expect(getSearchResult('#80UUG9R2U', sampleMembers)).toBe(sampleMembers[0])
    expect(getSearchResult('potato', sampleMembers)).toBe(undefined)
    expect(getSearchResult('', sampleMembers)).toBe(undefined)
})

test('selector: dir', () => {
    //rank
    expect(getMembers(sampleMembers, { filter: "none", order: "rank", dir: "ascending" })).toEqual(reorder(sampleMembers, [3, 6, 1, 0, 4, 5, 2]))
    expect(getMembers(sampleMembers, { filter: "none", order: "rank", dir: "descending" })).toEqual(reorder(sampleMembers, [2, 5, 4, 0, 1, 6, 3]))
})

test('selector: filter', () => {
    expect(getMembers(sampleMembers, { filter: "promotion", order: "rank", dir: "ascending" })).toEqual([
        sampleMembers[3]
    ])
    expect(getMembers(sampleMembers, { filter: "probation", order: "rank", dir: "ascending" })).toEqual([
        sampleMembers[4]
    ])
    expect(getMembers(sampleMembers, { filter: "demotion", order: "rank", dir: "ascending" })).toEqual([
        sampleMembers[5]
    ])
})

test('selector: order', () => {
    //name
    expect(getMembers(sampleMembers, { filter: "none", order: "name", dir: "ascending" })).toEqual(reorder(sampleMembers, [3, 2, 1, 6, 0, 5, 4]))
    expect(getMembers(sampleMembers, { filter: "none", order: "name", dir: "descending" })).toEqual(reorder(sampleMembers, [4, 5, 0, 6, 1, 2, 3]))
    
    //donations
    expect(getMembers(sampleMembers, { filter: "none", order: "donations", dir: "ascending" })).toEqual(reorder(sampleMembers, [2, 6, 3, 0, 1, 4, 5]))
    expect(getMembers(sampleMembers, { filter: "none", order: "donations", dir: "descending" })).toEqual(reorder(sampleMembers, [5, 4, 1, 0, 3, 6, 2]))
    
    //warBattles
    expect(getMembers(sampleMembers, { filter: "none", order: "warBattles", dir: "ascending" })).toEqual(reorder(sampleMembers, [0, 1, 3, 2, 4, 6, 5]))
    expect(getMembers(sampleMembers, { filter: "none", order: "warBattles", dir: "descending" })).toEqual(reorder(sampleMembers, [5, 6, 4, 2, 0, 1, 3]))
    
    //wins
    expect(getMembers(sampleMembers, { filter: "none", order: "wins", dir: "ascending" })).toEqual(reorder(sampleMembers, [3, 0, 1, 2, 6, 4, 5]))
    expect(getMembers(sampleMembers, { filter: "none", order: "wins", dir: "descending" })).toEqual(reorder(sampleMembers, [5, 4, 6, 1, 2, 0, 3]))
    
    //losses
    expect(getMembers(sampleMembers, { filter: "none", order: "losses", dir: "ascending" })).toEqual(reorder(sampleMembers, [1, 4, 0, 2, 3, 6, 5]))
    expect(getMembers(sampleMembers, { filter: "none", order: "losses", dir: "descending" })).toEqual(reorder(sampleMembers, [5, 3, 6, 0, 2, 1, 4]))
    
    //missed
    expect(getMembers(sampleMembers, { filter: "none", order: "missed", dir: "ascending" })).toEqual(reorder(sampleMembers, [2, 4, 0, 1, 3, 5, 6]))
    expect(getMembers(sampleMembers, { filter: "none", order: "missed", dir: "descending" })).toEqual(reorder(sampleMembers, [0, 1, 3, 5, 6, 2, 4]))
    
    //role
    expect(getMembers(sampleMembers, { filter: "none", order: "role", dir: "ascending" })).toEqual(reorder(sampleMembers, [2, 0, 1, 4, 5, 3, 6]))
    expect(getMembers(sampleMembers, { filter: "none", order: "role", dir: "descending" })).toEqual(reorder(sampleMembers, [3, 6, 1, 4, 5, 0, 2]))
})