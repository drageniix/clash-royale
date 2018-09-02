import React from "react"
import ReactDOM from "react-dom"

import ClanDescription from "./components/ClanDescription";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import Search from "./components/Search";
import MemberList from "./components/MemberList";
import Footer from "./components/Footer";

import data from './generated/data/data.json'
import './styles/index.scss'

importAll(require.context('./generated', true))
function importAll(r){
    r.keys().map(r)
}

class App extends React.Component {
    state = { searchResult : undefined, searchClass : ""}

    setSearchResult = query => {
        if (!query){
            this.setState({ searchResult : undefined, searchClass : "" })
        } else {
            const searchResult = data.clan.members.find(member => member.name.toLowerCase().includes(query.toLowerCase().trim()))
            if (searchResult){
                this.setState({searchResult})
            }
        }
    }
    
    render(){ 
        return (
            <div className="content">
                <Header clan={data.clan} />
                <main className="main">
                    <section className="flex-content">
                        <ClanDescription clan={data.clan} />
                        <section className="half">
                            <Search setSearchResult={this.setSearchResult}/>
                            {this.state.searchResult ? <SearchResult member={this.state.searchResult} /> : undefined}
                        </section>
                        <section className="whole">
                            <MemberList members={data.clan.members} setSearchResult={this.setSearchResult} />
                        </section>
                    </section>
                </main>
                <Footer time={data.clan.time}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("content"))