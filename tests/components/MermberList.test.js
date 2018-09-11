import React from 'react'
import members from '../resources/sampleMembers'
import { MemberList } from '../../src/components/MemberList';

test('MemberList: set query and view members', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<MemberList
        members={members}
        onClick = {dispatchSpy}
    />)
    
    expect(dispatchSpy).toHaveBeenCalledTimes(members.length)
    expect(dispatchSpy).toHaveBeenLastCalledWith("#92G8UPJU")
    expect(wrapper).toMatchSnapshot()
})