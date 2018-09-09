import React from 'react'
import { SearchResult } from '../../src/components/SearchResult'

test('render: Search Result', () => {
    const wrapper = shallow(
        <SearchResult member={clan.members[0]} />
    )
    expect(wrapper).toMatchSnapshot()
})