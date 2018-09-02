import React from 'react'

class Search extends React.Component {
    submit = (event) => {
        this.props.setSearchResult(event.target.value)
        event.preventDefault()
    }

    render() {
        return (
            <div className="form form__group">
                <input id="search" type="text" placeholder="Member Search" className="form__input" onChange={this.submit} />
                <label htmlFor="search" className="form__label">Member Search</label>
            </div>
        )
    }
}

export default Search