import React from 'react'
import { getSelectedFilterClass } from '../../src/redux/selectors'
import { FilterOptions } from '../../src/components/FilterOptions';


test('FilterOptions: set and display filter', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<FilterOptions
        getSelectedFilterClass={filter => getSelectedFilterClass("none", filter)}
        onFilter={dispatchSpy}
    />)

    wrapper.find('li').at(0).simulate('click', { preventDefault: () => { } })
    expect(dispatchSpy).toHaveBeenCalledWith('byNone')

    expect(wrapper).toMatchSnapshot()
})
