import { getSearchResult, getMembers } from "../src/redux/selectors";

const sampleMembers = [
    { "tag": "#80UUG9R2U", "name": "Meliaesc", "role": "coleader", "expLevel": 12, "trophies": 4118, "arena": { "id": 54000012, "name": "League 1" }, "clanRank": 27, "previousClanRank": 32, "donations": 380, "donationsReceived": 560, "clanChestPoints": 50, "cardsEarned": 11200, "warBattles": 10, "wins": 7, "missedWarBattles": 0 },
    { "tag": "#29UGCU0LY", "name": "lDrago45", "role": "elder", "expLevel": 12, "trophies": 4221, "arena": { "id": 54000012, "name": "League 1" }, "clanRank": 14, "previousClanRank": 16, "donations": 178, "donationsReceived": 280, "clanChestPoints": 106, "cardsEarned": 11760, "warBattles": 10, "wins": 6, "missedWarBattles": 0 },
    { "tag": "#YCPJJ8G", "name": "lauren", "role": "leader", "expLevel": 12, "trophies": 4032, "arena": { "id": 54000012, "name": "League 1" }, "clanRank": 37, "previousClanRank": 45, "donations": 489, "donationsReceived": 512, "clanChestPoints": 52, "cardsEarned": 10920, "warBattles": 9, "wins": 6, "missedWarBattles": 1 },
    { "tag": "#80CYLGVL", "name": "Jurgen", "role": "member", "expLevel": 12, "trophies": 4514, "arena": { "id": 54000013, "name": "League 2" }, "clanRank": 2, "previousClanRank": 2, "donations": 434, "donationsReceived": 480, "clanChestPoints": 15, "cardsEarned": 10080, "warBattles": 10, "wins": 9, "missedWarBattles": 0, "eligibleForPromotion": true },
    { "tag": "#82CC0JYP8", "name": "Vanilla", "role": "elder", "expLevel": 11, "trophies": 4086, "arena": { "id": 54000012, "name": "League 1" }, "clanRank": 30, "previousClanRank": 30, "donations": 30, "donationsReceived": 80, "clanChestPoints": 2, "cardsEarned": 5880, "warBattles": 6, "wins": 2, "missedWarBattles": 1, "onProbation": true },
    { "tag": "#UVP29QJ", "name": "Tavlinos", "role": "elder", "expLevel": 11, "trophies": 4033, "arena": { "id": 54000012, "name": "League 1" }, "clanRank": 35, "previousClanRank": 36, "donations": 0, "donationsReceived": 0, "clanChestPoints": 31, "cardsEarned": 0, "warBattles": 0, "wins": 0, "missedWarBattles": 0, "dangerOfDemotion": true},
    { "tag": "#92G8UPJU", "name": "luc", "role": "member", "expLevel": 12, "trophies": 4307, "arena": { "id": 54000013, "name": "League 2" }, "clanRank": 8, "previousClanRank": 7, "donations": 486, "donationsReceived": 560, "clanChestPoints": 8, "cardsEarned": 5040, "warBattles": 4, "wins": 3, "missedWarBattles": 0 }
]

test('selector: search', () => {
    expect(getSearchResult('Meliaesc', sampleMembers)).toBe(sampleMembers[0])
    expect(getSearchResult('mElIaEsC', sampleMembers)).toBe(sampleMembers[0])
    expect(getSearchResult('Drago4', sampleMembers)).toBe(sampleMembers[1])
    expect(getSearchResult('#80UUG9R2U', sampleMembers)).toBe(sampleMembers[0])
    expect(getSearchResult('potato', sampleMembers)).toBe(undefined)
    expect(getSearchResult('', sampleMembers)).toBe(undefined)
})

//sorts by rank, only guaranteed unique sort key
test('selector: filter', () => {
    expect(getMembers(sampleMembers, { filter: "none", order: "rank", dir: "ascending" })).toEqual([
        sampleMembers[3],
        sampleMembers[6],
        sampleMembers[1],
        sampleMembers[0],
        sampleMembers[4],
        sampleMembers[5],
        sampleMembers[2]
    ])
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

test('selector: sort', () => {
    expect(getMembers(sampleMembers, { filter: "none", order: "rank", dir: "descending" })).toEqual([
        sampleMembers[2],
        sampleMembers[5],
        sampleMembers[4],
        sampleMembers[0],
        sampleMembers[1],
        sampleMembers[6],
        sampleMembers[3]
    ])
    expect(getMembers(sampleMembers, { filter: "none", order: "name", dir: "ascending" })).toEqual([
        sampleMembers[3],
        sampleMembers[2],
        sampleMembers[1],
        sampleMembers[6],
        sampleMembers[0],
        sampleMembers[5],
        sampleMembers[4]
    ])
    expect(getMembers(sampleMembers, { filter: "none", order: "name", dir: "descending" })).toEqual([
        sampleMembers[4],
        sampleMembers[5],
        sampleMembers[0],
        sampleMembers[6],
        sampleMembers[1],
        sampleMembers[2],
        sampleMembers[3]
    ])
    expect(getMembers(sampleMembers, { filter: "none", order: "donations", dir: "ascending" })).toEqual([
        sampleMembers[2],
        sampleMembers[6],
        sampleMembers[3],
        sampleMembers[0],
        sampleMembers[1],
        sampleMembers[4],
        sampleMembers[5]
    ])
    expect(getMembers(sampleMembers, { filter: "none", order: "donations", dir: "descending" })).toEqual([
        sampleMembers[5],
        sampleMembers[4],
        sampleMembers[1],
        sampleMembers[0],
        sampleMembers[3],
        sampleMembers[6],
        sampleMembers[2]
    ])
    expect(getMembers(sampleMembers, { filter: "none", order: "wars", dir: "ascending" })).toEqual([
        sampleMembers[0],
        sampleMembers[1],
        sampleMembers[3],
        sampleMembers[2],
        sampleMembers[4],
        sampleMembers[6],
        sampleMembers[5]
    ])
    expect(getMembers(sampleMembers, { filter: "none", order: "wars", dir: "descending" })).toEqual([
        sampleMembers[5],
        sampleMembers[6],
        sampleMembers[4],
        sampleMembers[2],
        sampleMembers[0],
        sampleMembers[1],
        sampleMembers[3]
    ])
    expect(getMembers(sampleMembers, { filter: "none", order: "missed", dir: "ascending" })).toEqual([
        sampleMembers[2],
        sampleMembers[4],
        sampleMembers[0],
        sampleMembers[1],
        sampleMembers[3],
        sampleMembers[5],
        sampleMembers[6]
    ])
    expect(getMembers(sampleMembers, { filter: "none", order: "missed", dir: "descending" })).toEqual([
        sampleMembers[0],
        sampleMembers[1],
        sampleMembers[3],
        sampleMembers[5],
        sampleMembers[6],
        sampleMembers[2],
        sampleMembers[4]
    ])
    expect(getMembers(sampleMembers, { filter: "none", order: "role", dir: "ascending" })).toEqual([
        sampleMembers[2],
        sampleMembers[0],
        sampleMembers[1],
        sampleMembers[4],
        sampleMembers[5],
        sampleMembers[3],
        sampleMembers[6]
    ])
    expect(getMembers(sampleMembers, { filter: "none", order: "role", dir: "descending" })).toEqual([
        sampleMembers[3],
        sampleMembers[6],
        sampleMembers[1],
        sampleMembers[4],
        sampleMembers[5],
        sampleMembers[0],
        sampleMembers[2]
    ])
})