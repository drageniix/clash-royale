import React from 'react'
import { ChooseWeek } from '../../src/components/ChooseWeek';

test('ChooseWeek: set current', () => {
    const dispatchSpy = jest.fn()
    const wrapper = shallow(<ChooseWeek
        current={0}
        lastWeeks={[
            {
                url: '/clan.json',
                display: 'Current Week'
            },
            {
                url: '/clash-royale/2018-09-09.json',
                display: '2018-09-09'
            }
        ]}
        setCurrent={dispatchSpy} />)

    wrapper.find('select').simulate('change', {
        preventDefault: () => { },
        target: { value: 1 }
    })

    expect(dispatchSpy).toHaveBeenLastCalledWith(1)
    expect(wrapper).toMatchSnapshot()
})