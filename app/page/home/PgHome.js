import React, { Component } from 'react'
import {
    Text,
    View,
    Animated,
    TouchableOpacity,
    Easing,
    BackHandler
} from 'react-native';

import HomeStyle from '../../style/HomeStyle'
import PublicStyle from '../../style/PublicStyle'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import PgPurchase from './purchase/PgPurchase'
import PgReceipts from './receipts/PgReceipts'
import PgStock from './stock/PgStock'
import PgSetting from './setting/PgSetting'
import PgMine from './mine/PgMine'
import PgOther from './other/PgOther'

/**
 * 主页
 */
export default class PgHome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ani: new Animated.Value(0),
            shopName: '测试门店',
            shopNum: '010075',
            shopPerson: '王某(工号:123)'
        }
        this.imgData = [
            { img: "", title: "收银" },
            { img: "", title: "采购" },
            { img: "", title: "库存" },
            { img: "", title: "设置" },
            { img: "", title: "我的" },
            { img: "", title: "其他" },
            { img: "", title: "交接班" }]
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this._exitApp)
    }

    componentDidMount() {
        this._rotation();

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._exitApp)
    }

    _exitApp = () => {
        if (this.props.navigation.isFocused()) {
            BackHandler.exitApp();
            return true
        } else {
            this.props.navigation.pop();
            return true
        }
    }
    _rotation(){
        this.state.ani.setValue(0);
        Animated.timing(this.state.ani, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
        }).start(() => this._rotation());
    }
    render() {
        return (
            <View style={HomeStyle.container}>
                <View style={HomeStyle.topCell}>
                    <View style={HomeStyle.topCell_left}>
                    </View>
                    {this.imgData.map((item, i) => {
                        return (
                            <TouchableOpacity
                                onPress={() => { this.stv && this.stv.goToPage(i) }}
                                key={i}
                                style={{ alignItems: 'center', marginLeft: 10 }}>
                                <View style={HomeStyle.tab_cell}>
                                </View>
                                <Text style={[PublicStyle.text_FFF_17, { marginTop: 3 }]}>{item.title}</Text>
                            </TouchableOpacity>)
                    })}
                    <View style={HomeStyle.topcell_zs}>
                        <View style={{ alignItems: 'center',width:150}}>
                            <Animated.Text
                                style={[PublicStyle.text_FFF_52,{lineHeight:52,
                                    transform: [{ rotateY: this.state.ani.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }]
                                }]}>8.8</Animated.Text>
                            <Text style={[PublicStyle.text_FFF_17]}>昨日使用指数</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginRight: 10 }}>
                        <Text style={PublicStyle.text_FFF_15}>{this.state.shopName}</Text>
                        <Text style={PublicStyle.text_FFF_15}>{this.state.shopNum}</Text>
                        <Text style={PublicStyle.text_FFF_13}>{this.state.shopPerson}</Text>
                    </View>
                </View>
                <ScrollableTabView
                    ref={(ref) => this.stv = ref}
                    style={{ flex: 1 }}
                    renderTabBar={() => { return <View></View> }}
                    locked={true}
                >
                    <PgReceipts navigation={this.props.navigation} />
                    <PgPurchase navigation={this.props.navigation} />
                    <PgStock navigation={this.props.navigation} />
                    <PgSetting navigation={this.props.navigation} />
                    <PgMine navigation={this.props.navigation} />
                    <PgOther navigation={this.props.navigation} />
                </ScrollableTabView>
            </View>
        )
    }


}