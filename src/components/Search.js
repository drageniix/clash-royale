import React from 'react'
import { setQuery } from '../redux/actions'
import { connect } from 'react-redux'

export const Search = ({query, dispatch}) => (
    <div className="form form__group">
        <input id="search" type="text" placeholder="Member Search" className="form__input" autoFocus onChange={(event) => {
            const query = event.target.value
            dispatch(setQuery(query))
        }} value={query}/>
        <label htmlFor="search" className="form__label">Member Search</label>
    </div>
)

export default connect(state => ({
    query: state.query
}))(Search)