import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

export const Grades = ({ ratios }) => (
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

Grades.propTypes = {
    ratios: PropTypes.array
};

const mapStateToProps = state => ({
    ratios: state.individualMember.ratios
});

export default connect(mapStateToProps)(Grades);
