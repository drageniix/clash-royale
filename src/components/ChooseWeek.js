import React from 'react'
import { setCurrent } from '../redux/actions'
import { connect } from 'react-redux'

export class ChooseWeek extends React.Component {
    setCurrent = e => {
        const value = e.target.value
        this.props.setCurrent(value)
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
    lastWeeks: state.lastWeeks
})

const mapDispatchToProps = dispatch => ({
    setCurrent: value => dispatch(setCurrent(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseWeek)