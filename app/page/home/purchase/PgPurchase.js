import React, { Component } from 'react';
import {
    Button,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import PgByGoods from './PgByGoods'
import PgNewBN from './PgNewBN'
import PgPurchaseRecords from './PgPurchaseRecords'

/**
 * 采购页面
 */

export default class PgPurchase extends Component {

    _goToPage(i){
        this.stv && this.stv.goToPage(i);
    }
    _onChangeTab(currentPage){
        let {i} = currentPage;
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: 150 }}>
                    <TouchableOpacity onPress={this._goToPage.bind(this,0)}  style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>智能补货</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToPage.bind(this,1)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>新商盟</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToPage.bind(this,2)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>采购记录</Text>
                    </TouchableOpacity>
                </View>
                <ScrollableTabView
                    ref={(ref) => this.stv = ref}
                    style={{ flex: 1 }}
                    renderTabBar={() => { return <View></View> }}
                    scrollWithoutAnimation = {true}
                    onChangeTab = {this._onChangeTab.bind(this)}
                    locked={true}>
                    <PgByGoods navigation={this.props.navigation} />
                    <PgNewBN navigation={this.props.navigation} />
                    <PgPurchaseRecords navigation={this.props.navigation} />
                </ScrollableTabView>

            </View>
        );
    }
}

