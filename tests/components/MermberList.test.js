import React from 'react'
import members from '../resources/sampleMembers'
import { MemberList } from '../../src/components/MemberList';
import { SortOptions } from '../../src/components/SortOptions';
import { FilterOptions } from '../../src/components/FilterOptions';
import { getDirectionIndicator, getSelectedFilterClass } from '../../src/redux/selectors'

test('MemberList: set query and view members', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<MemberList
        members={members}
        onClick = {dispatchSpy}
    />)
    
    wrapper.find('.member-link').at(0).simulate('click', {
        preventDefault: () => { }
    })

    expect(dispatchSpy).toHaveBeenLastCalledWith(
        "#92G8UPJU"
    )
    
    expect(wrapper).toMatchSnapshot()
})

test('FilterOptions: set and display filter', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<FilterOptions
        getSelectedFilterClass={filter => getSelectedFilterClass("none", filter)}
        onFilter={dispatchSpy}
    />)
    
    wrapper.find('li').at(0).simulate('click', {
        preventDefault: () => { }
    })

    expect(dispatchSpy).toHaveBeenLastCalledWith("byDemotion")

    expect(wrapper).toMatchSnapshot()
})

test('SortOptions: set and display sort', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<SortOptions
        getDirectionIndicator={order => getDirectionIndicator({ order: "rank", dir: "ascending" }, order)}
        onSort={dispatchSpy}
    />)
    
    wrapper.find('th').at(0).simulate('click', {
        preventDefault: () => { }
    })

    expect(dispatchSpy).toHaveBeenLastCalledWith("byWars")
    expect(wrapper).toMatchSnapshot()
})