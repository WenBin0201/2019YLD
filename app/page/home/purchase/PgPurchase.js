import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import PgByGoods from './PgByGoods'
import PgNewBN from './PgNewBN'
import PgPurchaseRecords from './PgPurchaseRecords'
import LeftChageTabView from '../../../component/LeftChageTabView'
/**
 * 采购页面
 */

export default class PgPurchase extends Component {

    constructor(props){
        super(props)
    }

    _goToPage = (i) =>{
        this.stv && this.stv.goToPage(i);
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <LeftChageTabView onChangeTab={this._goToPage} tabs = {['智能补货','新商盟','采购记录']}/>
                <ScrollableTabView
                    ref={(ref) => this.stv = ref}
                    style={{ flex: 1 }}
                    renderTabBar={() => { return <View></View> }}
                    scrollWithoutAnimation = {true}
                    locked={true}>
                    <PgByGoods navigation={this.props.navigation} />
                    <PgNewBN navigation={this.props.navigation} />
                    <PgPurchaseRecords navigation={this.props.navigation} />
                </ScrollableTabView>

            </View>
        );
    }
}

