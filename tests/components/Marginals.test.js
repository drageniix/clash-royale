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
            pastDate={undefined}
            time={clan.time}
            discord={clan.discord}
        />
    )

    expect(wrapper).toMatchSnapshot()

    const pastWrapper = shallow(
        <Footer
            pastDate={"2018-09-09"}
            time={clan.time}
            discord={clan.discord}
        />
    )

    expect(pastWrapper).toMatchSnapshot()
})