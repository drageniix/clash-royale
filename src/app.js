import React from "react"
import ReactDOM from "react-dom"

import ClanDescription from "./components/ClanDescription";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";

import data from './generated/data/data.json'
import './styles/index.scss'
import Search from "./components/Search";
import MemberList from "./components/MemberList";

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
            const searchResult = data.clan.members.find(member => member.name.toLowerCase().includes(query.toLowerCase()))
            if (searchResult){
                const searchClass = searchResult.eligibleForPromotion ? "promote" : searchResult.dangerOfDemotion ? "demote" : "normal"
                this.setState({searchResult, searchClass})
            }
        }
    }
    
    render(){ 
        return (
            <div>
                <Header clan={data.clan} />
                <main className="main">
                    <section className="flex-content">
                        <ClanDescription clan={data.clan} />
                        <section className="half">
                            <Search setSearchResult={this.setSearchResult} searchClass={this.state.searchClass} />
                            {this.state.searchResult ? <SearchResult member={this.state.searchResult} /> : undefined}
                        </section>
                        <section className="whole">
                            <MemberList members={data.clan.members} />
                        </section>
                    </section>
                </main>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("content"))