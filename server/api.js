const fetch = require('node-fetch');

const clanTag = 'PGVRPVG';
const headers = {
    Accept: 'application/json',
    authorization: 'Bearer ' + process.env.ROYALE_KEY
};

const getDate = dateString => {
    if (dateString) {
        const rawDate = dateString.split('T')[0];
        return `${rawDate.slice(0, 4)}-${rawDate.slice(4, 6)}-${rawDate.slice(
            6
        )}`;
    } else {
        return new Date().toISOString();
    }
};

const getClanData = () =>
    fetch('https://api.clashroyale.com/v1/clans/%23' + clanTag, {
        headers
    })
        .then(res => res.json())
        .then(data => ({
            date: getDate(),
            ...data
        }));

const getWarLog = lastWar =>
    fetch('https://api.clashroyale.com/v1/clans/%23' + clanTag + '/warlog', {
        headers
    })
        .then(res => res.json())
        .then(data =>
            data.items
                .filter(
                    war =>
                        !lastWar ||
                        new Date(getDate(war.createdDate)).getTime() >
                            new Date(lastWar).getTime()
                )
                .reverse()
                .map(war => {
                    let place = -1;
                    const result = war.standings.find((warClan, index) => {
                        place = index + 1;
                        return warClan.clan.tag === '#' + clanTag;
                    });

                    return {
                        place,
                        date: getDate(war.createdDate),
                        participants_info: war.participants,
                        result
                    };
                })
        );

module.exports = {
    getWarLog,
    getClanData
};
