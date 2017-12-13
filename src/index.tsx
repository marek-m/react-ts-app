import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { enthusiasm } from './store/reducers/app-state.reducer';
import {applyMiddleware, compose, createStore} from 'redux';
import { Provider } from 'react-redux';
import Hello from './containers/Hello';
import {rootEpic} from './store/epics/index';
import {createEpicMiddleware} from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store = createStore(
    enthusiasm,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
