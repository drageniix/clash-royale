export const setMembers = () => dispatch => {
    const url = './assets/data/_members.json';
    fetch(url)
        .then(response => response.json())
        .then(api => {
            dispatch({
                type: 'SET_MEMBERS',
                members: api.members
            });
        });
};
export const setQuery = (query = '') => {
    return (dispatch, getState) => {
        const member = query
            ? getState().members.find(
                  member =>
                      member.playername
                          .toLowerCase()
                          .includes(query.toLowerCase().trim()) ||
                      member.tag === query
              )
            : undefined;

        if (member) {
            const url = './assets/data/' + member.tag.slice(1) + '.json';
            fetch(url)
                .then(response => response.json())
                .then(api => {
                    dispatch({
                        type: 'SET_INDIVIDUAL_MEMBER',
                        individualMember: { ...member, ...api },
                        query
                    });
                });
        } else {
            dispatch({
                type: 'SET_INDIVIDUAL_MEMBER',
                individualMember: undefined,
                query
            });
        }
    };
};

export const setFilter = {
    byNone: () => ({
        type: 'SET_FILTER',
        filter: 'none'
    }),
    byPromotion: () => ({
        type: 'SET_FILTER',
        filter: 'promotion'
    }),
    byProbation: () => ({
        type: 'SET_FILTER',
        filter: 'probation'
    }),
    byDemotion: () => ({
        type: 'SET_FILTER',
        filter: 'demotion'
    })
};

export const setOrder = {
    byRank: () => ({
        type: 'SET_ORDER',
        order: 'rank'
    }),
    byName: () => ({
        type: 'SET_ORDER',
        order: 'name'
    }),
    byDonations: () => ({
        type: 'SET_ORDER',
        order: 'donations'
    }),
    byWars: () => ({
        type: 'SET_ORDER',
        order: 'wars'
    }),
    byWarBattles: () => ({
        type: 'SET_ORDER',
        order: 'warBattles'
    }),
    byLosses: () => ({
        type: 'SET_ORDER',
        order: 'losses'
    }),
    byWins: () => ({
        type: 'SET_ORDER',
        order: 'wins'
    }),
    byMissed: () => ({
        type: 'SET_ORDER',
        order: 'missed'
    }),
    byRole: () => ({
        type: 'SET_ORDER',
        order: 'role'
    })
};
