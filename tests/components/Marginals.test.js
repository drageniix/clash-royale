import React from 'react'
import { Header } from '../../src/components/Header'
import { Footer } from '../../src/components/Footer'

test('render: Header', () => {
    const wrapper = shallow(
        <Header 
            name={clan.clan.name}
            discord={clan.discord}
        />
    )
    expect(wrapper).toMatchSnapshot()
})

test('render: Footer', () => {
    const wrapper = shallow(
        <Footer 
            time={clan.time}
            discord={clan.discord}
        />
    )
    expect(wrapper.find(".footer__updated").text()).toMatch(/Clan data last updated .* ago\./)
})