import React, {Component} from 'react';
import {NetInfo,Platform} from 'react-native';
import {connect} from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import Toast from 'react-native-root-toast';
import {AppNavigator} from './app_navigator';
import {NETWORK_DIS_CONNECT} from '../util/RequestUtils';
import {NAV_ROOT} from '../constant/CommonConstant';

let lastClickTime = 0;

class AppWithNavigationState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isConnected: global.networkConnected
        };
    }

    render() {
        const App = reduxifyNavigator(AppNavigator, NAV_ROOT);
        return <App />
    }


    componentDidMount() {


        NetInfo.isConnected.addEventListener(
            'connectionChange',
            this._handleConnectivityChange
        );
        NetInfo.isConnected.fetch().done(
            (isConnected) => { this._handleConnectivityChange(isConnected); }
        );

    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener(
            'connectionChange',
            this._handleConnectivityChange
        );
    }


    _handleConnectivityChange = (isConnected) => {
        this.setState({isConnected});
        global.networkConnected = isConnected;
        if(!isConnected)
            Toast.show(NETWORK_DIS_CONNECT);
    }
}

//const AppWithNavigationState = reduxifyNavigator(AppNavigator, "rootNav");
const mapStateToProps = state => ({
    nav: state.nav,
    userExecLogin: state.userExecLogin
});

export default connect(mapStateToProps)(AppWithNavigationState);
