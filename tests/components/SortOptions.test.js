import React from 'react'
import { SortOptions } from '../../src/components/SortOptions';
import { getDirectionIndicator } from '../../src/redux/selectors'

test('SortOptions: set and display sort', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<SortOptions
        getDirectionIndicator={order => getDirectionIndicator({ order: "rank", dir: "ascending" }, order)}
        onSort={dispatchSpy}
    />)

    wrapper.find('th').at(0).simulate('click', {
        preventDefault: () => { }
    })

    expect(dispatchSpy).toHaveBeenNthCalledWith(1, "byRank")
    expect(dispatchSpy).toHaveBeenNthCalledWith(2, "byRole")
    expect(dispatchSpy).toHaveBeenNthCalledWith(3, "byName")
    expect(dispatchSpy).toHaveBeenNthCalledWith(4, "byDonations")
    expect(dispatchSpy).toHaveBeenNthCalledWith(5, "byWars")
    expect(wrapper).toMatchSnapshot()
})