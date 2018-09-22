import React from 'react'
import { setNewWeek } from '../redux/actions'
import { connect } from 'react-redux'

export class ChooseWeek extends React.Component {
    setNewWeek = index => e => {
        this.props.setNewWeek(this.props.lastWeeks, index)
    }

    render(){
        return (
            <span className="weekSelection">
                <a>History</a>
                <div className="weekSelection__weeks">
                    {this.props.lastWeeks.map((item, index) => (
                        <li className={(this.props.current === index ? "selectedWeek" : "")} 
                            key={index} 
                            onClick={this.setNewWeek(index)}>
                            {item.display}</li>
                    ))}
                </div>
            </span>
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