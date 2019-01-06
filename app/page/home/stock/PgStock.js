import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import PgCommodityManager from './PgCommodityManage'
import PgCargoManager from './PgCargoManage'
import RuKuManager from './RuKuManage'
import RuKuRecords from './RuKuRecords'
import PgStockConvert from './PgStockConvert'
import PgPanDian from './PgPanDian'
import PgChangeRecords from './PgChangeRecords'
/**
 * 库存主页
 */
export default class PgStock extends Component {

    _goToPage(i) {
        this.stv && this.stv.goToPage(i);
    }
    _onChangeTab(currentPage) {
        let { i } = currentPage;
    }


    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View  style={{ width: 150 }}>
                    <ScrollView>
                        <TouchableOpacity onPress={this._goToPage.bind(this, 0)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>商品管理</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._goToPage.bind(this, 1)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>货商管理</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._goToPage.bind(this, 2)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>入库管理</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._goToPage.bind(this, 3)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>入库记录</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._goToPage.bind(this, 4)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>库存转换</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._goToPage.bind(this, 5)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>盘点</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._goToPage.bind(this, 6)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>变更记录</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <ScrollableTabView
                    ref={(ref) => this.stv = ref}
                    style={{ flex: 1 }}
                    renderTabBar={() => { return <View></View> }}
                    scrollWithoutAnimation={true}
                    onChangeTab={this._onChangeTab.bind(this)}
                    locked={true}>
                    <PgCommodityManager navigation={this.props.navigation} />
                    <PgCargoManager navigation={this.props.navigation} />
                    <RuKuManager navigation={this.props.navigation} />
                    <RuKuRecords navigation={this.props.navigation} />
                    <PgStockConvert navigation={this.props.navigation} />
                    <PgPanDian navigation={this.props.navigation} />
                    <PgChangeRecords navigation={this.props.navigation} />
                </ScrollableTabView>

            </View>
        );
    }
}
