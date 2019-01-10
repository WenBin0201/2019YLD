import React, { Component } from 'react';
import { Button, Text, View,TouchableOpacity } from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import PgSalesDoc from './PgSalesDoc'
import PgMarketManage from './PgMarketManage'
import PgVipManage from './PgVipManage'
import PgMyExponent from './PgMyExponent'
import PgBusinessExce from './PgBusinessExce'
import LeftChageTabView from '../../../component/LeftChageTabView'
/**
 * 我的页面
 */
export default class PgMine extends Component {

    _goToPage = (i)=> {
        this.stv && this.stv.goToPage(i);
    }

    render() {
        return (
            <View style={{ flex: 1,flexDirection:'row'}}>
                <LeftChageTabView onChangeTab={this._goToPage} tabs={['销售单据','营销管理','会员管理','我的指数','业务报表']}/>
                <ScrollableTabView
                    ref={(ref) => this.stv = ref}
                    style={{ flex: 1 }}
                    renderTabBar={() => { return <View></View> }}
                    scrollWithoutAnimation={true}
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

