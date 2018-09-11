import React from 'react'
import { SortOptions } from '../../src/components/SortOptions';
import { getDirectionIndicator } from '../../src/redux/selectors'

test('SortOptions: set and display sort', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<SortOptions
        getDirectionIndicator={order => getDirectionIndicator({ order: "rank", dir: "ascending" }, order)}
        onSort={dispatchSpy}
    />)

    expect(wrapper.find('th').at(0).text()).toBe("Rank ▼")
    
    wrapper.find('th').at(0).simulate('click', {preventDefault: () => { }})
    expect(dispatchSpy).toHaveBeenCalledWith('byRank')

    wrapper.setProps({getDirectionIndicator: order => getDirectionIndicator({ order: "rank", dir: "descending" }, order)})
    expect(wrapper.find('th').at(0).text()).toBe("Rank ▲")
    
    expect(wrapper).toMatchSnapshot()
})