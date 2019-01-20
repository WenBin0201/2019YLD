import React, { Component } from 'react'
import {
    View,
    Dimensions,
    ScrollView,
    StyleSheet,
} from 'react-native';

import PublicStyle from '../../style/PublicStyle'
import Button from '../../component/Button'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import RightChageTabView from '../RightChageTabView'

export default class WeipriceRightView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0,
            width: 0
        }
        this.czsp = ['蔬菜', '水果', '肉类禽蛋', '干果干货', '主食熟食', '茶糖', '散称其他']
        this.wmsp = ['烟酒', '包装食品', '饮料饮品', '冷冻冰品', '粮油调料', '生鲜', '生活用品']

        this.comms = ['无码商品', '称重商品', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }

    componentWillMount() {
        let { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
        this.deviceHeight = deviceHeight;
        this.deviceWidth = deviceWidth;

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    /**
     * 无码商品 称重商品切换
     */
    _goToPage = (i) => {
        this.stv && this.stv.goToPage(i);
    }

    /**
     * 二级分类切换
     */
    _onChangeTab = (item) => {

    }

    render() {
        return (
            <View style={WeipriceRightViewStyle.WeipriceRightView_right}>
                <View style={WeipriceRightViewStyle.WeipriceRightView_top}>
                    <Button borderRadius={0} height={40} fontSize={18} text='无码商品' backgroundColor={this.state.currentPage == 0 ? '#f4d000' : '#2b7888'} color={this.state.currentPage == 0 ? '#2b7888' : '#ffffff'} style={{ flex: 1 }} onPress={() => {
                        this.setState({ currentPage: 0 }, () => {
                            this.stv && this.stv.goToPage(0);
                        })

                    }} />
                    <Button borderRadius={0} height={40} fontSize={18} backgroundColor={this.state.currentPage == 1 ? '#f4d000' : '#2b7888'} color={this.state.currentPage == 1 ? '#2b7888' : '#ffffff'} text='称重商品' style={{ flex: 1 }} onPress={() => {
                        this.setState({ currentPage: 1 }, () => {
                            this.stv && this.stv.goToPage(1);
                        })
                    }} />
                </View>
                <ScrollableTabView
                    ref={(ref) => this.stv = ref}
                    style={{ flex: 1 }}
                    renderTabBar={() => { return <View></View> }}
                    scrollWithoutAnimation={true}
                    locked={true}>
                    <View style={WeipriceRightViewStyle.WeipriceRightView_bottom}>
                        <ScrollView>

                            <View style={WeipriceRightViewStyle.WeipriceRightView_view1}>
                                {this.comms.map((item, i) => {
                                    return (
                                        <Button text={item} key={i} style={{ margin: 5 }} color={'#2b7888'} width={80} height={40} backgroundColor='#a3c6d4' />
                                    )
                                })}
                            </View>
                        </ScrollView>

                        <RightChageTabView onChangeTab={this._onChangeTab} tabs={this.wmsp} />
                    </View>

                    <View style={WeipriceRightViewStyle.WeipriceRightView_bottom}>
                        <ScrollView>
                            <View style={WeipriceRightViewStyle.WeipriceRightView_view1}>
                                {this.comms.map((item, i) => {
                                    return (
                                        <Button text={item} key={i} color={'#2b7888'} style={{ margin: 5 }} width={80} height={40} backgroundColor='#a3c6d4' />
                                    )
                                })}
                            </View>
                        </ScrollView>
                        <RightChageTabView onChangeTab={this._onChangeTab} tabs={this.czsp} />
                    </View>
                </ScrollableTabView>


            </View>
        )
    }

}
const WeipriceRightViewStyle = StyleSheet.create({

    WeipriceRightView_right: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    WeipriceRightView_top: {
        flexDirection: 'row',
        height: 40
    },
    WeipriceRightView_bottom: {
        flex: 1,
        flexDirection: 'row'
    },
    WeipriceRightView_view1:{
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        padding: 5 
    }
});