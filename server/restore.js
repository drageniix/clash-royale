const fs = require('fs-extra');
const Papa = require('papaparse');
const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

client.connect().then(() =>
    Papa.parse(fs.createReadStream('./server/old.csv'), {
        dynamicTyping: true,
        header: true,
        complete(results) {
            const updateMembers = results.data.map(member => ({
                ...member,
                _id:
                    member._id.slice(0, 10) +
                    'T00:00.000Z' +
                    member._id.slice(10),
                entrydate:
                    member.entrydate.replace(new RegExp('/', 'g'), '-') +
                    'T00:00.000Z'
            }));

            Promise.all(
                updateMembers.map(member => {
                    const member_query =
                        'INSERT INTO members(_id, tag, entrydate, playername, trophies, clanrole, clanrank, donations, donationsreceived) ' +
                        'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)';
                    const member_values = [
                        member._id,
                        member[Object.keys(member)[0]],
                        member.entrydate,
                        member.playername,
                        member.trophies,
                        member.clanrole,
                        member.clanrank,
                        member.donations,
                        member.donationsreceived
                    ];
                    return client.query(member_query, member_values);
                })
            ).finally(() => {
                client.end();
            });
        }
    })
);
