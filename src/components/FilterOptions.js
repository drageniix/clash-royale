import React from 'react'
import { getSelectedFilterClass } from '../redux/selectors'
import { setFilter} from '../redux/actions'
import { connect } from 'react-redux'

export const FilterOptions = ({ getSelectedFilterClass, onFilter }) => (
    <ul className="filter__list">
        <li className={getSelectedFilterClass("none")} onClick={onFilter("byNone")}>All Members</li>
        <li className={getSelectedFilterClass("promotion")} onClick={onFilter("byPromotion")}>Promotions</li>
        <li className={getSelectedFilterClass("probation")} onClick={onFilter("byProbation")}>Probation</li>
        <li className={getSelectedFilterClass("demotion")} onClick={onFilter("byDemotion")}>Demotions</li>
    </ul>
)

const mapStateToProps = state => ({
    getSelectedFilterClass: filter => getSelectedFilterClass(state.filters.filter, filter)
})

const mapDispatchToProps = dispatch => ({
    onFilter: filterType => () => dispatch(setFilter[filterType]())
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions)
