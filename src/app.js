import React from "react"
import ReactDOM from "react-dom"

import ClanDescription from "./components/ClanDescription";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import Search from "./components/Search";
import MemberList from "./components/MemberList";
import Footer from "./components/Footer";

import fetch from 'isomorphic-fetch'
import promise from 'es6-promise';
promise.polyfill()

import './styles/index.scss'

importAll(require.context('./generated', true))
function importAll(r){
    r.keys().map(r)
}

class App extends React.Component {
    state = {}
    setSearchResult = query => {
        if (!query){
            this.setState({ searchResult : undefined, searchClass : "" })
        } else {
            const searchResult = this.state.clan.members.find(member => member.name.toLowerCase().includes(query.toLowerCase().trim()))
            if (searchResult){
                this.setState({searchResult})
            }
        }
    }

    componentWillMount() {
        fetch('https://drageniix.github.io/api/clan.json')
        .then(response => response.json())
        .then(api => {
            this.setState(prevState => ({ 
                searchResult: undefined, 
                searchClass: "", 
                clan: api 
            }))
        })
    }
    
    render(){ 
        if (this.state.clan) {
            return (
                <div className="content">
                    <Header clan={this.state.clan} />
                    <main className="main">
                        <section className="flex-content">
                            <ClanDescription clan={this.state.clan} />
                            <section className="half">
                                <Search setSearchResult={this.setSearchResult} />
                                {this.state.searchResult ? <SearchResult member={this.state.searchResult} /> : undefined}
                            </section>
                            <section className="whole">
                                <MemberList members={this.state.clan.members} setSearchResult={this.setSearchResult} />
                            </section>
                        </section>
                    </main>
                    <Footer time={this.state.clan.time} />
                </div> 
            )
        } else {
            return <div/>
        }
    }
}

ReactDOM.render(<App/>, document.getElementById("content"))