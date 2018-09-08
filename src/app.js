import React from "react"
import ReactDOM from "react-dom"

import ClanDescription from "./components/ClanDescription";
import ChooseWeek from "./components/ChooseWeek";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import Search from "./components/Search";
import MemberList from "./components/MemberList";
import Footer from "./components/Footer";

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import './styles/index.scss'

importAll(require.context('./generated', true))
function importAll(r){
    r.keys().map(r)
}

const store = configureStore()

const App = props => (
    <Provider store={store}>
        <div>
            <Header />
            <main className="main">
                <section className="flex-content">
                    <section className="half">
                        <ClanDescription />
                        <ChooseWeek />
                    </section>
                    <section className="half">
                        <Search />
                        <SearchResult />
                    </section>
                    <section className="whole">
                        <MemberList />
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    </Provider>
)

ReactDOM.render(<App/>, document.getElementById("content"))