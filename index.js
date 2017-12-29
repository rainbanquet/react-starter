// react
import React                            from 'react'
import ReactDom                         from 'react-dom'
import { AppContainer }                 from 'react-hot-loader';
import HotLoader                        from 'react-hot-component-loader';

// react-redux
import { createStore, applyMiddleware } from 'redux'
import { Provider }                     from 'react-redux'
import reduxThunk                       from 'redux-thunk'
import reducer                          from './src/common/reducer/index.js'
import init_state                       from './src/common/reducer/init_state.js'
const createStoreWithMiddleware         = applyMiddleware(reduxThunk)(createStore)
const store                             = createStoreWithMiddleware(reducer, init_state)

// react-router
import App                              from './src/App.js';

// render
const renderApp = function( Component ){
    ReactDom.render(
        <AppContainer warnings={false}>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}
renderApp(App)
 
// hot reload Component
if( module.hot ){
    module.hot.accept( './src/App.js', function(){

        // renderApp( App )
        renderApp( HotLoader(function(){ return System.import('./src/App.js'); }) )
    });
}
// hot reload Reducer
if( module.hot ){
    module.hot.accept('./src/common/reducer/index.js', function(){

        const NextRootReducer = require('./src/common/reducer/index.js').default;

        store.replaceReducer( NextRootReducer );
    });
}