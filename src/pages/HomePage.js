import React from 'react';
import ClanDescription from '../components/ClanDescription';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterOptions from '../components/FilterOptions';
import SortOptions from '../components/SortOptions';
import MemberTable from '../components/MemberTable';

export const HomePage = () => (
    <div className="body">
        <Header />
        <main>
            <div className="hero">
                <ClanDescription />
            </div>
            <FilterOptions id="members" />
            <table className="clanMembers">
                <SortOptions />
                <MemberTable />
            </table>
        </main>
        <Footer />
    </div>
);

export default HomePage;
