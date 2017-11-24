import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { enthusiasm } from './store/reducers/app-state.reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Hello from './containers/Hello';

const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const store = enhancer(enthusiasm, {
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
    },
);

ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
