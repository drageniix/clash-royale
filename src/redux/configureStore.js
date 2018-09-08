import {createStore} from 'redux'
import reducer from './reducer'
import { getAPIURL } from "./selectors";
import { setNewWeek, setCurrent } from './actions'
import fetch from 'isomorphic-fetch'
import promise from 'es6-promise';
promise.polyfill()

export default () => {
    let currentValue = -1
    
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
    store.subscribe(() => {
        if (store.getState().current != currentValue) {
            currentValue = store.getState().current
            fetch(getAPIURL(currentValue, store.getState().lastWeeks))
                .then(response => response.json())
                .then(api => store.dispatch(setNewWeek(api)))
        }
    })

    //initialize
    store.dispatch(setCurrent(0))
    return store
}