import React from 'react'
import members from '../resources/sampleMembers'
import { TopPlayers } from '../../src/components/TopPlayers'
import { getMembers } from '../../src/redux/selectors'

test('render: Description', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(
        <TopPlayers 
            onClick={dispatchSpy}
            members={getMembers(members, { order: 'wins' }).slice(0, 3)}
            title="Most Wins" />
    )

    wrapper.find('.member-link').at(0).simulate('click', {
        preventDefault: () => { }
    })

    expect(dispatchSpy).toHaveBeenCalledWith("#80CYLGVL")
    expect(wrapper).toMatchSnapshot()
})