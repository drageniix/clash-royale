import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { setMembers, setQuery } from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        reducer,
        composeEnhancers(applyMiddleware(thunk))
    );

    //initialize
    store.dispatch(setMembers());

    //search query url
    const query = window.location.href.split('#');
    if (query.length > 1) {
        store.dispatch(setQuery(query[1]));
    }

    return store;
};
