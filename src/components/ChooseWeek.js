import React from 'react'
import { setCurrent } from '../redux/actions'
import { connect } from 'react-redux'

export class ChooseWeek extends React.Component {
    setCurrent = e => {
        const value = parseInt(e.target.value)
        this.props.setCurrent(this.props.lastWeeks, value)
    }

    render(){
        return (
            <section className="weekSelection">
                <select onChange={this.setCurrent} value={this.props.current}>
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
    setCurrent: (lastWeeks, current) => dispatch(setCurrent(lastWeeks, current))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseWeek)