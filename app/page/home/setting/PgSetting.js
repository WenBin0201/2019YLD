import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import PgSyncData from './PgSyncData'
import PgHardwareSet from './PgHardwareSet'
import PgElecScaManage from './PgElecScaManage'
import PgAccountManage from './PgAccountManage'
import PgTecSupport from './PgTecSupport'
/**
 * 设置主页
 */
export default class PgSetting extends Component {

    _goToPage(i) {
        this.stv && this.stv.goToPage(i);
    }
    _onChangeTab(currentPage) {
        let { i } = currentPage;
    }


    render() {
        return (
            <View style={{ flex: 1,flexDirection:'row'}}>
                <View style={{ width: 150 }}>
                    <TouchableOpacity onPress={this._goToPage.bind(this, 0)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>同步数据</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToPage.bind(this, 1)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>硬件设置</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToPage.bind(this, 2)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>电子称管理</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToPage.bind(this, 3)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>账号管理</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToPage.bind(this, 4)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>技术支持</Text>
                    </TouchableOpacity>
                </View>
                <ScrollableTabView
                    ref={(ref) => this.stv = ref}
                    style={{ flex: 1 }}
                    renderTabBar={() => { return <View></View> }}
                    scrollWithoutAnimation={true}
                    onChangeTab={this._onChangeTab.bind(this)}
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
