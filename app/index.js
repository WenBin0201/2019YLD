import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'

import configureStore from './config_store'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { AppNavigator } from './navigator/app_navigator'
import { NAV_ROOT } from './constant/CommonConstant'

global.networkConnected = true

//console.disableYellowBox = true;

const store = configureStore()
const App = reduxifyNavigator(AppNavigator, NAV_ROOT)
const mapStateToProps = (state) => ( {
    state: state.nav
} )
const AppWithNavigationState = connect(mapStateToProps)(App)

class Root extends Component {

    componentDidMount() {

    }

    render() {

        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        )
    }
}

export default Root
