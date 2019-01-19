import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import {createNavigationReducer, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import storage from 'redux-persist/lib/storage';
import {callAPIMiddleware} from './action/util';

import appReducer from './reducer';
import {NAV_ROOT} from './constant/CommonConstant';
import {AppNavigator} from "./navigator/app_navigator";

export default function configureStore(preState) {
    const navMiddleware = createReactNavigationReduxMiddleware(
        NAV_ROOT,
        state => state.nav,
    );

    const middleware = [navMiddleware, callAPIMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middleware);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = compose(...enhancers);

    const navReducer = createNavigationReducer(AppNavigator);
    const rootReducer = combineReducers({
        nav: navReducer,
        ...appReducer
    });

    const persistConfig = {
        key: 'root',
        storage,
        blacklist: ['nav']
    };

    const reducer = persistReducer(persistConfig, rootReducer);

    const store = createStore(reducer, preState, composedEnhancers);
    persistStore(store);
    return store;
}