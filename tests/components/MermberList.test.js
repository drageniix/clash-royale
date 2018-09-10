import React from 'react'
import { MemberList } from '../../src/components/MemberList';
import members from '../resources/sampleMembers'
import { getDirectionIndicator, getSelectedFilterClass } from '../../src/redux/selectors'

test('MemberList: set current', () => {
    const dispatchSpy = jest.fn()
    global.scroll = jest.fn()
    const wrapper = shallow(<MemberList
        members={members}
        dispatch={dispatchSpy}
        getDirectionIndicator={order => getDirectionIndicator({order: "rank", dir: "ascending"}, order)}
        getSelectedFilterClass={filter => getSelectedFilterClass("none", filter)}/>)
    
    wrapper.find('li').at(0).simulate('click', {
        preventDefault: () => { }
    })

    expect(dispatchSpy).toHaveBeenLastCalledWith({
        type: "SET_FILTER",
        filter: "none"
    })

    wrapper.find('th').at(0).simulate('click', {
        preventDefault: () => { }
    })

    expect(dispatchSpy).toHaveBeenLastCalledWith({
        type: "SET_ORDER",
        order: "rank"
    })
    
    wrapper.find('.member-link').at(0).simulate('click', {
        preventDefault: () => { }
    })

    expect(dispatchSpy).toHaveBeenLastCalledWith({
        type: "SET_QUERY",
        query: "#80UUG9R2U"
    })

    expect(wrapper).toMatchSnapshot()
})