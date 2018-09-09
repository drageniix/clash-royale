import React from 'react'
import { ClanDescription } from '../../src/components/ClanDescription'

test('render: Description', () => {
    const wrapper = shallow(
        <ClanDescription admin={clan.admin} />
    )
    expect(wrapper).toMatchSnapshot()
})