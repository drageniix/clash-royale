import React from "react"
import ReactDOM from "react-dom"

import ClanDescription from "./components/ClanDescription";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import MemberList from "./components/MemberList";
import Footer from "./components/Footer";

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { setNewWeek } from './redux/actions'
import fetch from 'isomorphic-fetch'
import promise from 'es6-promise';
import './styles/index.scss'

promise.polyfill()
importAll(require.context('./generated', true))
function importAll(r){
    r.keys().map(r)
}

const store = configureStore()
fetch('https://drageniix.github.io/api/clanv2.json')
    .then(response => response.json())
    .then(api => store.dispatch(setNewWeek(api)))

const App = props => (
    <Provider store={store}>
        <div>
            <Header />
            <main className="main">
                <section className="flex-content">
                    <ClanDescription />
                    <section className="half">
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