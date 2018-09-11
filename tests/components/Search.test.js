import React from 'react'
import { Search } from '../../src/components/Search';

test('Search: set query', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<Search
        query="potato"
        setQuery={dispatchSpy} />)

    const query="meliaesc"
    wrapper.find('input').simulate('change', {
        preventDefault: () => { },
        target: { value: query }
    })

    expect(dispatchSpy).toHaveBeenLastCalledWith(query)
    expect(wrapper).toMatchSnapshot()
})