import React, { Component } from 'react'
import { Button, Text, View, TouchableOpacity, ScrollView } from 'react-native'

import ScrollableTabView from 'react-native-scrollable-tab-view'
import PgCommodityManager from './PgCommodityManage'
import PgCargoManager from './PgCargoManage'
import RuKuManager from './RuKuManage'
import RuKuRecords from './RuKuRecords'
import PgStockConvert from './PgStockConvert'
import PgPanDian from './PgPanDian'
import PgChangeRecords from './PgChangeRecords'
import LeftChageTabView from '../../../component/LeftChageTabView'

/**
 * 库存主页
 */
export default class PgStock extends Component {

    _goToPage = (i) => {
        this.stv && this.stv.goToPage(i)
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <LeftChageTabView onChangeTab={this._goToPage}
                                  tabs={[ '商品管理', '货商管理', '入库管理', '入库记录', '库存转换', '盘点', '变更记录' ]}/>
                <ScrollableTabView
                    ref={(ref) => this.stv = ref}
                    style={{ flex: 1 }}
                    renderTabBar={() => {
                        return <View></View>
                    }}
                    scrollWithoutAnimation={true}
                    locked={true}>
                    <PgPanDian navigation={this.props.navigation}/>
                    <PgCommodityManager navigation={this.props.navigation}/>
                    <PgCargoManager navigation={this.props.navigation}/>
                    <RuKuManager navigation={this.props.navigation}/>
                    <RuKuRecords navigation={this.props.navigation}/>
                    <PgStockConvert navigation={this.props.navigation}/>
                    <PgChangeRecords navigation={this.props.navigation}/>
                </ScrollableTabView>

            </View>
        )
    }
}
