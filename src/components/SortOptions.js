import React from 'react'
import { connect } from 'react-redux'
import { getDirectionIndicator } from '../redux/selectors'
import { setOrder } from '../redux/actions'

export const SortOptions = ({ onSort, getDirectionIndicator }) => (
    <thead className="clanMembers__header">
        <tr>
            <th className="pointer align-left" onClick={onSort("byRank")}>{getDirectionIndicator("rank")}</th>
            <th className="pointer align-right" onClick={onSort("byRole")}>{getDirectionIndicator("role")}</th>
            <th className="pointer align-left" onClick={onSort("byName")}>{getDirectionIndicator("name")}</th>
            <th className="pointer align-right" onClick={onSort("byDonations")}>{getDirectionIndicator("donations")}</th>
            <th className="pointer align-right" onClick={onSort("byWars")}>{getDirectionIndicator("wars")}</th>
        </tr>
    </thead>
)

const mapStateToProps = state => ({
    getDirectionIndicator: order => getDirectionIndicator(state.filters, order)
})

const mapDispatchToProps = dispatch => ({
    onSort: sortType => () => dispatch(setOrder[sortType]())
})

export default connect(mapStateToProps, mapDispatchToProps)(SortOptions)
