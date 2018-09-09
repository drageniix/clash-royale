import React from 'react'
import { setCurrent } from '../redux/actions'
import { connect } from 'react-redux'
import moment from 'moment'

const ChooseWeek = ({ current, lastWeeks, dispatch }) => (
    <section className="weekSelection">
        <select onChange={e => {
            const value = e.target.value
            dispatch(setCurrent(value))}} value={current}>
            {lastWeeks.map((item, index) => (
                <option className="weekSelection__option" value={index} key={index}>{item.display}</option>
            ))}
        </select>
    </section>
)

export default connect(state => ({
    current: state.current,
    lastWeeks: state.lastWeeks
}))(ChooseWeek)