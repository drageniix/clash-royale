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
                <select onChange={this.selectWeek} value={this.props.value}>
                    <option value="/clan.json">Current</option>
                    {this.props.lastWeeks.map((item, index) => (
                        <option value={item} key={index}>{item.slice(item.lastIndexOf("/") + 1, item.lastIndexOf("."))}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default connect(state => ({
    setQuery: getSearchResult(state.query, state.members)
}))(Search)