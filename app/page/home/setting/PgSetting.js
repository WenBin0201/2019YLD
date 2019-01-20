import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import PgSyncData from './PgSyncData'
import PgHardwareSet from './PgHardwareSet'
import PgElecScaManage from './PgElecScaManage'
import PgAccountManage from './PgAccountManage'
import PgTecSupport from './PgTecSupport'
import LeftChageTabView from '../../../component/LeftChageTabView'

/**
 * 设置主页
 */
export default class PgSetting extends Component {

    _goToPage =(i)=> {
        this.stv && this.stv.goToPage(i);
    }

    render() {
        return (
            <View style={{ flex: 1,flexDirection:'row'}}>
                <LeftChageTabView onChangeTab={this._goToPage} tabs={['同步数据','硬件设置','电子称管理','账号管理','技术支持']}/>
                <ScrollableTabView
                    ref={(ref) => this.stv = ref}
                    style={{ flex: 1 }}
                    renderTabBar={() => { return <View></View> }}
                    scrollWithoutAnimation={true}
                    locked={true}>
                    <PgSyncData navigation={this.props.navigation} />
                    <PgHardwareSet navigation={this.props.navigation} />
                    <PgElecScaManage navigation={this.props.navigation} />
                    <PgAccountManage navigation={this.props.navigation} />
                    <PgTecSupport navigation={this.props.navigation} />
                </ScrollableTabView>
            </View>
        );
    }
}
