import React from 'react'
import { getSelectedFilterClass } from '../../src/redux/selectors'
import { FilterOptions } from '../../src/components/FilterOptions';


test('FilterOptions: set and display filter', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<FilterOptions
        getSelectedFilterClass={filter => getSelectedFilterClass("none", filter)}
        onFilter={dispatchSpy}
    />)

    expect(dispatchSpy).toHaveBeenNthCalledWith(1, "byNone")
    expect(dispatchSpy).toHaveBeenNthCalledWith(2, "byPromotion")
    expect(dispatchSpy).toHaveBeenNthCalledWith(3, "byProbation")
    expect(dispatchSpy).toHaveBeenNthCalledWith(4, "byDemotion")    
    expect(wrapper).toMatchSnapshot()
})
