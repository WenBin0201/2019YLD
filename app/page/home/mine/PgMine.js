import React, { Component } from 'react';
import { Button, Text, View,TouchableOpacity } from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import PgSalesDoc from './PgSalesDoc'
import PgMarketManage from './PgMarketManage'
import PgVipManage from './PgVipManage'
import PgMyExponent from './PgMyExponent'
import PgBusinessExce from './PgBusinessExce'
/**
 * 我的页面
 */
export default class PgMine extends Component {

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
                        <Text>销售单据</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToPage.bind(this, 1)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>营销管理</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToPage.bind(this, 2)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>会员管理</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToPage.bind(this, 3)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>我的指数</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToPage.bind(this, 4)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>业务报表</Text>
                    </TouchableOpacity>
                </View>
                <ScrollableTabView
                    ref={(ref) => this.stv = ref}
                    style={{ flex: 1 }}
                    renderTabBar={() => { return <View></View> }}
                    scrollWithoutAnimation={true}
                    onChangeTab={this._onChangeTab.bind(this)}
                    locked={true}>
                    <PgSalesDoc navigation={this.props.navigation} />
                    <PgMarketManage navigation={this.props.navigation} />
                    <PgVipManage navigation={this.props.navigation} />
                    <PgMyExponent navigation={this.props.navigation} />
                    <PgBusinessExce navigation={this.props.navigation} />
                </ScrollableTabView>
              
            </View>
        );
    }
}

