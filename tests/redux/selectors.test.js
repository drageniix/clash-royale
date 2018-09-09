import { getSearchResult, getMembers, getDirectionIndicator, getSelectedFilterClass } from "../../src/redux/selectors";
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

test('selector: style', () => {
    expect(getDirectionIndicator({ filter: "none", order: 'rank', dir: 'ascending' }, 'role')).toBe("Role")
    expect(getDirectionIndicator({ filter: "none", order: 'warBattles', dir: 'ascending' }, 'warBattles')).toBe("War Battles ▼")
    expect(getDirectionIndicator({ filter: "none", order: 'warBattles', dir: 'descending' }, 'warBattles')).toBe("War Battles ▲")
    
    expect(getSelectedFilterClass('none', 'none')).toBe('pointer filter__list--item filter__list--item--selected')
    expect(getSelectedFilterClass('promotion', 'none')).toBe('pointer filter__list--item')
})

test('selector: getMembers dir', () => {
    //rank
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

test('selector: getMembers order', () => {
    //name
    expect(getMembers(sampleMembers, { order: "name", dir: "ascending" })).toEqual(reorder(sampleMembers, 
        [3, 2, 1, 6, 0, 5, 4]))
    expect(getMembers(sampleMembers, { order: "name", dir: "descending" })).toEqual(reorder(sampleMembers, 
        [4, 5, 0, 6, 1, 2, 3]))
    
    //donations
    expect(getMembers(sampleMembers, { order: "donations", dir: "ascending" })).toEqual(reorder(sampleMembers, 
        [2, 6, 3, 0, 1, 4, 5]))
    expect(getMembers(sampleMembers, { order: "donations", dir: "descending" })).toEqual(reorder(sampleMembers, 
        [5, 4, 1, 0, 3, 6, 2]))
    
    //warBattles
    expect(getMembers(sampleMembers, { order: "warBattles", dir: "ascending" })).toEqual(reorder(sampleMembers, 
        [0, 1, 3, 2, 4, 6, 5]))
    expect(getMembers(sampleMembers, { order: "warBattles", dir: "descending" })).toEqual(reorder(sampleMembers, 
        [5, 6, 4, 2, 0, 1, 3]))
    
    //wins
    expect(getMembers(sampleMembers, { order: "wins", dir: "ascending" })).toEqual(reorder(sampleMembers, 
        [3, 0, 1, 2, 6, 4, 5]))
    expect(getMembers(sampleMembers, { order: "wins", dir: "descending" })).toEqual(reorder(sampleMembers, 
        [5, 4, 6, 1, 2, 0, 3]))
    
    //losses
    expect(getMembers(sampleMembers, { order: "losses", dir: "ascending" })).toEqual(reorder(sampleMembers, 
        [1, 4, 0, 2, 3, 6, 5]))
    expect(getMembers(sampleMembers, { order: "losses", dir: "descending" })).toEqual(reorder(sampleMembers, 
        [5, 3, 6, 0, 2, 1, 4]))
    
    //missed
    expect(getMembers(sampleMembers, { order: "missed", dir: "ascending" })).toEqual(reorder(sampleMembers, 
        [2, 4, 0, 1, 3, 5, 6]))
    expect(getMembers(sampleMembers, { order: "missed", dir: "descending" })).toEqual(reorder(sampleMembers, 
        [0, 1, 3, 5, 6, 2, 4]))
    
    //role
    expect(getMembers(sampleMembers, { order: "role", dir: "ascending" })).toEqual(reorder(sampleMembers, 
        [2, 0, 1, 4, 5, 3, 6]))
    expect(getMembers(sampleMembers, { order: "role", dir: "descending" })).toEqual(reorder(sampleMembers, 
        [3, 6, 1, 4, 5, 0, 2]))
})