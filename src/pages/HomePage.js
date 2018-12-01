import React from 'react';
import Header from '../components/sticky/Header';
import Modal from '../components/sticky/Modal';
import Footer from '../components/sticky/Footer';
import MemberTable from '../components/table/MemberTable';

export const HomePage = () => (
    <div className="body">
        <Header />
        <Modal />
        <div className="main">
            <MemberTable />
        </div>
        <Footer />
    </div>
);

export default HomePage;
