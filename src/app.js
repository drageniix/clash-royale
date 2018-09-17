import React from "react"
import ReactDOM from "react-dom"

import ClanDescription from "./components/ClanDescription";
import ChooseWeek from "./components/ChooseWeek";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import Search from "./components/Search";
import MemberTable from "./components/MemberTable";
import SortOptions from "./components/SortOptions";
import TopPlayers from "./components/TopPlayers";
import FilterOptions from "./components/FilterOptions";
import Footer from "./components/Footer";

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

import './styles/index.scss'
require.context('./generated', true, /\.(jpg|png|svg|gif)$/)

const store = configureStore()
const App = () => (
    <Provider store={store}>
        <div>
            <Header />
            <main className="main">
                <section className="flex-content">
                    <section className="half">
                        <ClanDescription />
                        <ChooseWeek />
                        <section className="topPlayers">
                            <TopPlayers order="wins" title="Most Wins"/>
                            <TopPlayers order="donations" title="Top Donators"/>
                        </section>
                    </section>
                    <section className="half">
                        <Search />
                        <SearchResult />
                    </section>
                    <section className="whole">
                        <FilterOptions />
                        <table className="clanMembers">
                            <SortOptions />
                            <MemberTable />
                        </table>
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    </Provider>
)

ReactDOM.render(<App/>, document.getElementById("content"))