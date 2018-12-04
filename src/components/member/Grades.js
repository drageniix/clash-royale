import React from 'react';
import PropTypes from 'prop-types';

function getColor(grade) {
    if (grade > 70) {
        return 'green';
    } else if (grade > 50) {
        return 'blue';
    } else if (grade > 30) {
        return 'yellow';
    } else {
        return 'red';
    }
}

export const Grades = ({ member }) => {
    const ratios = [
        {
            percentage: member.winRatio,
            name: 'Wins',
            details: [
                { title: 'Wins', value: member.wins || 0 },
                { title: 'Losses', value: member.losses || 0 },
                { title: 'Missed', value: member.missed || 0 }
            ]
        },
        {
            percentage: member.donationRatio,
            name: 'Donations',
            details: [
                { title: 'Given', value: member.donations },
                { title: 'Received', value: member.donationsreceived }
            ]
        },
        {
            percentage: member.warParticipationRatio,
            name: 'Wars',
            details: [{ title: 'Month', value: member.wars }]
        }
    ];

    return (
        <div className="grades">
            {ratios.map(({ percentage, name, details }, index) => (
                <div key={index} className="grades__item">
                    <div
                        className={
                            'grades__box grades__box--' + getColor(percentage)
                        }
                    >
                        <p className="grades__box--percentage">{percentage}%</p>
                        <p className="grades__box--title">{name}</p>
                    </div>
                    <table className="searchResult">
                        <tbody>
                            {details.map(({ title, value }, index) => (
                                <tr key={index}>
                                    <td>{title}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

Grades.propTypes = {
    member: PropTypes.object
};

export default Grades;
