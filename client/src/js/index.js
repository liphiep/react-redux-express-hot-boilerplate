import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/Root';
import {AppContainer} from 'react-hot-loader';

// Redux
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

const store = (module.hot && module.hot.data && module.hot.data.store)
    ? module.hot.data.store
    : createStore(
        (state = {}) => state,
        compose(applyMiddleware(thunk),
            // Redux DevTools Extension
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
    );

// Render
function render(Root) {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Root/>
            </AppContainer>
        </Provider>
        , document.getElementById('app'));
}

render(Root);

// Hot reloading setup
if (module.hot) {
    module.hot.accept('./components/Root', () => {
        render(require('./components/Root').default);
    });
    module.hot.dispose((data) => {
        data.store = store;
    });
}
