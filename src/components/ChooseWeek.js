import React from 'react'
import { setNewWeek } from '../redux/actions'
import { connect } from 'react-redux'

export class ChooseWeek extends React.Component {
    setNewWeek = e => {
        const value = parseInt(e.target.value)
        this.props.setNewWeek(this.props.lastWeeks, value)
    }

    render(){
        return (
            <section className="weekSelection">
                <select onChange={this.setNewWeek} value={this.props.current}>
                    {this.props.lastWeeks.map((item, index) => (
                        <option className="weekSelection__option" value={index} key={index}>{item.display}</option>
                    ))}
                </select>
            </section>
        )
    }

} 

const mapStateToProps = state => ({
    current: state.current,
    lastWeeks: state.api.lastWeeks
})

const mapDispatchToProps = dispatch => ({
    setNewWeek: (lastWeeks, current) => dispatch(setNewWeek(lastWeeks, current))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseWeek)