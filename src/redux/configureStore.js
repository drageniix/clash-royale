import {createStore} from 'redux'
import reducer from './reducer'
import { setNewWeek, setQuery } from './actions'
import fetch from 'isomorphic-fetch'
import promise from 'es6-promise';
promise.polyfill()

export default () => {
    const getAPIURL = (stateCurrent, stateLastWeeks) => 'https://drageniix.github.io/api' + stateLastWeeks[stateCurrent].url

    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
    let currentValue = store.getState().current

    store.subscribe(() => {
        if (store.getState().current != currentValue) {
            fetch(getAPIURL(currentValue = store.getState().current, store.getState().api.lastWeeks))
                .then(response => response.json())
                .then(api => store.dispatch(setNewWeek(api)))
        }
    })

    //initialize
    fetch(getAPIURL(store.getState().current, store.getState().api.lastWeeks))
        .then(response => response.json())
        .then(api => {
            store.dispatch(setNewWeek(api))
            const query = window.location.href.split('#')
            if (query.length > 1){
                store.dispatch(setQuery(query[1]))
            }
        })

    return store
}