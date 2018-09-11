import React from 'react'
import members from '../resources/sampleMembers'
import { MemberTable } from '../../src/components/MemberTable';

test('MemberTable: set query and view members', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<MemberTable
        members={members}
        onClick = {dispatchSpy}
    />)
    
    wrapper.find('.member-link').at(0).simulate('click', {
        preventDefault: () => { }
    })

    expect(dispatchSpy).toHaveBeenCalledWith("#80UUG9R2U")
    expect(wrapper).toMatchSnapshot()
})