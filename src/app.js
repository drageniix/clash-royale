import React from "react"
import ReactDOM from "react-dom"

import ClanDescription from "./components/ClanDescription"
import Header from "./components/Header"
import Footer from "./components/Footer"
import FilterOptions from "./components/FilterOptions"
import SortOptions from "./components/SortOptions"
import MemberTable from "./components/MemberTable"

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

require.context('./generated', true, /\.(jpg|png|svg|gif)$/)

const store = configureStore()

const App = () => (
    <Provider store={store}>
        <div className="body">
            <Header />
            <main>
                <div className="hero">
                    <div className="hero__content flex-content">
                        <ClanDescription />
                    </div>
                </div>
                <FilterOptions id="members"/>
                <table className="clanMembers">
                    <SortOptions />
                    <MemberTable />
                </table>
            </main>
            <Footer />
        </div>
    </Provider>
)

ReactDOM.render(<App/>, document.getElementById("content"))