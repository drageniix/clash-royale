import { getSearchResult, getMembers, getDirectionIndicator, getSelectedFilterClass, isCurrent } from "../../src/redux/selectors";
import sampleMembers from '../resources/sampleMembers'

const reorder = (array, indicies) => {
    const newArray = []
    for (let index of indicies) {
      newArray.push(array[index])
    }
    return newArray
}
test('selector: isCurrent', () => {
    let current = 0
    const lastWeeks = [
        {
            url: '/clan.json',
            display: 'Current Week'
        },
        {
            url: '/clash-royale/2018-09-09.json',
            display: '2018-09-09'
        }
    ]

    expect(isCurrent(current, lastWeeks)).toBeFalsy()

    current = 1
    expect(isCurrent(current, lastWeeks)).toBe(lastWeeks[current].display)

})

test('selector: search', () => {
    expect(getSearchResult('Meliaesc', sampleMembers)).toBe(sampleMembers[0])
    expect(getSearchResult('mElIaEsC', sampleMembers)).toBe(sampleMembers[0])
    expect(getSearchResult('Drago4', sampleMembers)).toBe(sampleMembers[1])
    expect(getSearchResult('#80UUG9R2U', sampleMembers)).toBe(sampleMembers[0])
    expect(getSearchResult('potato', sampleMembers)).toBe(undefined)
    expect(getSearchResult('', sampleMembers)).toBe(undefined)
})

describe('selector: styled', () => {
    test('direction indicator', () => {
        expect(getDirectionIndicator({ filter: "none", order: 'rank', dir: 'ascending' }, 'role')).toBe("Role")
        expect(getDirectionIndicator({ filter: "none", order: 'warBattles', dir: 'ascending' }, 'warBattles')).toBe("War Battles ▼")
        expect(getDirectionIndicator({ filter: "none", order: 'warBattles', dir: 'descending' }, 'warBattles')).toBe("War Battles ▲")
    })
    test('selected filter', () => {
        expect(getSelectedFilterClass('none', 'none')).toBe('pointer filter__list--item filter__list--item--selected')
        expect(getSelectedFilterClass('promotion', 'none')).toBe('pointer filter__list--item')
    })
})

test('selector: getMembers dir', () => {
    expect(getMembers(sampleMembers)).toEqual(reorder(sampleMembers, 
        [3, 6, 1, 0, 4, 5, 2]))
    expect(getMembers(sampleMembers, { filter: "none", order:"rank", dir: "descending" })).toEqual(reorder(sampleMembers, 
        [2, 5, 4, 0, 1, 6, 3]))
})

test('selector: getMembers filter', () => {
    expect(getMembers(sampleMembers, { filter: "promotion" })).toEqual([
        sampleMembers[3]])
    expect(getMembers(sampleMembers, { filter: "probation" })).toEqual([
        sampleMembers[4]])
    expect(getMembers(sampleMembers, { filter: "demotion" })).toEqual([
        sampleMembers[5]])
})

describe('selector: getMembers order', () => {
    test("name", () => {
        expect(getMembers(sampleMembers, { order: "name", dir: "ascending" })).toEqual(reorder(sampleMembers, 
            [3, 2, 1, 6, 0, 5, 4]))
        expect(getMembers(sampleMembers, { order: "name", dir: "descending" })).toEqual(reorder(sampleMembers, 
            [4, 5, 0, 6, 1, 2, 3]))
    })
    
    test("donations", () => {
        expect(getMembers(sampleMembers, { order: "donations", dir: "ascending" })).toEqual(reorder(sampleMembers, 
            [2, 6, 3, 0, 1, 4, 5]))
        expect(getMembers(sampleMembers, { order: "donations", dir: "descending" })).toEqual(reorder(sampleMembers, 
            [5, 4, 1, 0, 3, 6, 2]))
    })
    
    test("warBattles", () => {
        expect(getMembers(sampleMembers, { order: "warBattles", dir: "ascending" })).toEqual(reorder(sampleMembers, 
            [0, 1, 3, 2, 4, 6, 5]))
        expect(getMembers(sampleMembers, { order: "warBattles", dir: "descending" })).toEqual(reorder(sampleMembers, 
            [5, 6, 4, 2, 0, 1, 3]))
    })
    
    test("wins", () => {
        expect(getMembers(sampleMembers, { order: "wins", dir: "ascending" })).toEqual(reorder(sampleMembers,
            [3, 0, 1, 2, 6, 4, 5]))
        expect(getMembers(sampleMembers, { order: "wins", dir: "descending" })).toEqual(reorder(sampleMembers, 
            [5, 4, 6, 1, 2, 0, 3]))
    })
    
    test("losses", () => {
        expect(getMembers(sampleMembers, { order: "losses", dir: "ascending" })).toEqual(reorder(sampleMembers,
            [1, 4, 0, 2, 3, 6, 5]))
        expect(getMembers(sampleMembers, { order: "losses", dir: "descending" })).toEqual(reorder(sampleMembers, 
            [5, 3, 6, 0, 2, 1, 4]))
    })
    
    test("missed", () => {
        expect(getMembers(sampleMembers, { order: "missed", dir: "ascending" })).toEqual(reorder(sampleMembers, 
            [2, 4, 0, 1, 3, 5, 6]))
        expect(getMembers(sampleMembers, { order: "missed", dir: "descending" })).toEqual(reorder(sampleMembers, 
            [0, 1, 3, 5, 6, 2, 4]))
    })
    
    test("role", () => {
        expect(getMembers(sampleMembers, { order: "role", dir: "ascending" })).toEqual(reorder(sampleMembers, 
            [2, 0, 1, 4, 5, 3, 6]))
        expect(getMembers(sampleMembers, { order: "role", dir: "descending" })).toEqual(reorder(sampleMembers, 
            [3, 6, 1, 4, 5, 0, 2]))
    })
})