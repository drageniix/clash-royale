import React from 'react'
import { Search } from '../../src/components/Search';

test('Search: set query', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<Search
        query="potato"
        dispatch={dispatchSpy}/>)
    wrapper.find('input').simulate('change', {
        preventDefault: () => { },
        target: {value: "meliaesc"}
    })

    expect(dispatchSpy).toHaveBeenLastCalledWith({
        type: "SET_QUERY",
        query: "meliaesc"
    })
    expect(wrapper).toMatchSnapshot()
})