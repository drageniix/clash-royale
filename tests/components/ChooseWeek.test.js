import React from 'react'
import { ChooseWeek } from '../../src/components/ChooseWeek';

test('ChooseWeek: set current', () => {
    const dispatchSpy = jest.fn()
    const lastWeeks = [
        {
            url: '/clan.json',
            display: 'Current Week'
        },
        {
            url: '/clash-royale/2018-09-09.json',
            display: '2018-09-09'
        }
    ]
    
    const wrapper = shallow(<ChooseWeek
        current={0}
        lastWeeks={lastWeeks}
        setNewWeek={dispatchSpy} />)

    wrapper.find('li').at(1).simulate('click', {
        preventDefault: () => { }
    })

    expect(dispatchSpy).toHaveBeenLastCalledWith(lastWeeks, 1)
    expect(wrapper).toMatchSnapshot()
})