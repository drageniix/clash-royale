import React from 'react'
import { setQuery } from '../redux/actions'
import { connect } from 'react-redux'

export class Search extends React.Component {
    setQuery = e => {
        const query = e.target.value
        this.props.setQuery(query)
    }

    render(){
        return (
            <div className="form">
                <form>
                    <input onChange={this.setQuery} value={this.props.query} type="text" placeholder="Member Search"
                        id="search" className="form__input" spellCheck={false} autoFocus />
                    <label htmlFor="search" className="form__label">Member Search</label>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    query: state.query
})

const mapDispatchToProps = dispatch => ({
    setQuery: query => dispatch(setQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)