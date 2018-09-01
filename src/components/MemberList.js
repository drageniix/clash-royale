import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MemberTable from './MemberTable'

const MemberList = ({members}) => (
    <Tabs>
        <TabList>
            <Tab>All Members</Tab>
            <Tab>Promotions</Tab>
            <Tab>Demotions</Tab>
        </TabList>

        <TabPanel>
            <MemberTable members={members} />
        </TabPanel>
        <TabPanel>
            <MemberTable members={members.filter(item => item.eligibleForPromotion)} />
        </TabPanel>
        <TabPanel>
            <MemberTable members={members.filter(item => item.dangerOfDemotion)} />
        </TabPanel>
    </Tabs>
)

export default MemberList