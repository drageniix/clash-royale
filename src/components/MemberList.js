import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MemberTable from './MemberTable'

const MemberList = ({members, setSearchResult}) => (
    <Tabs>
        <TabList>
            <Tab>All Members</Tab>
            <Tab>Promotions</Tab>
            <Tab>Demotions</Tab>
        </TabList>

        <TabPanel>
            <MemberTable members={members} setSearchResult={setSearchResult}/>
        </TabPanel>
        <TabPanel>
            <MemberTable members={members.filter(item => item.eligibleForPromotion)} setSearchResult={setSearchResult}/>
        </TabPanel>
        <TabPanel>
            <MemberTable members={members.filter(item => item.dangerOfDemotion)} setSearchResult={setSearchResult}/>
        </TabPanel>
    </Tabs>
)

export default MemberList