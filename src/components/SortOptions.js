import React from 'react'
import { connect } from 'react-redux'
import { getDirectionIndicator } from '../redux/selectors'
import { setOrder } from '../redux/actions'

export class SortOptions extends React.Component {
    onSort = sortType => e => {
        this.props.onSort(sortType)
    }

    render(){
        return (
            <thead className="clanMembers__header">
                <tr>
                    <th className="pointer align-left" onClick={this.onSort("byRank")}>{this.props.getDirectionIndicator("rank")}</th>
                    <th className="pointer align-right" onClick={this.onSort("byRole")}>{this.props.getDirectionIndicator("role")}</th>
                    <th className="pointer align-left" onClick={this.onSort("byName")}>{this.props.getDirectionIndicator("name")}</th>
                    <th className="pointer align-right" onClick={this.onSort("byDonations")}>{this.props.getDirectionIndicator("donations")}</th>
                    <th className="pointer align-right" onClick={this.onSort("byWars")}>{this.props.getDirectionIndicator("wars")}</th>
                </tr>
            </thead>
        )
    }
}

const mapStateToProps = state => ({
    getDirectionIndicator: order => getDirectionIndicator(state.filters, order)
})

const mapDispatchToProps = dispatch => ({
    onSort: sortType => dispatch(setOrder[sortType]())
})

export default connect(mapStateToProps, mapDispatchToProps)(SortOptions)
