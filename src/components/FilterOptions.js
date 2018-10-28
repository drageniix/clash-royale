import React from 'react';
import { getSelectedFilterClass } from '../redux/selectors';
import { setFilter } from '../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class FilterOptions extends React.Component {
    onFilter = filterType => () => {
        this.props.onFilter(filterType);
    };

    render() {
        return (
            <div className="filter">
                <div className="filter__vaporware" />
                <ul className="filter__list">
                    <li
                        className={this.props.getSelectedFilterClass('none')}
                        onClick={this.onFilter('byNone')}
                    >
                        All Members
                    </li>
                    <li
                        className={this.props.getSelectedFilterClass(
                            'promotion'
                        )}
                        onClick={this.onFilter('byPromotion')}
                    >
                        Promotion
                    </li>
                    <li
                        className={this.props.getSelectedFilterClass(
                            'probation'
                        )}
                        onClick={this.onFilter('byProbation')}
                    >
                        Probation
                    </li>
                    <li
                        className={this.props.getSelectedFilterClass(
                            'demotion'
                        )}
                        onClick={this.onFilter('byDemotion')}
                    >
                        Demotion
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getSelectedFilterClass: filter =>
        getSelectedFilterClass(state.filters.filter, filter)
});

const mapDispatchToProps = dispatch => ({
    onFilter: filterType => dispatch(setFilter[filterType]())
});

FilterOptions.propTypes = {
    getSelectedFilterClass: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterOptions);
