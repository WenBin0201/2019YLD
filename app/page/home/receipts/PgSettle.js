import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Animated,
    Easing,
    ToastAndroid,
    Dimensions
} from 'react-native';

import Button from '../../../component/Button'
import SettleStyle from '../../../style/SettleStyle'
import PublicStyle from '../../../style/PublicStyle'
import DiscountView from '../../../component/components/DiscountView'
import { COLOR_F19149, COLOR_SECOND_COLOR, COLOR_8FC31F, COLOR_EC6941 } from '../../../constant/ColorConstant';

/**
 * 结算
 */

export default class PgSettle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isXpjz: false,
            isleft: true,
            btnWidth:0,
            left: new Animated.Value(-199),
        }
        this.isCose = true;
        this.num = ['1', '2', '3', '50', '4', '5', '6', '100', '7', '8', '9', '200', '0', '00', '.', '500']

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

    _moveLeft() {
        if (this.isCose) {
            this.state.left.setValue(-199);
            Animated.timing(this.state.left, {
                toValue: 0,
                duration: 500,
                easing: Easing.linear,
            }).start(() => {
                this.isCose = false
            });
        } else {
            this.state.left.setValue(0);
            Animated.timing(this.state.left, {
                toValue: -199,
                duration: 500,
                easing: Easing.linear,
            }).start(() => {
                this.isCose = true
            });
        }

    }

    render() {


        return (
            <View style={{ flex: 1 }}>
                {/* 导航栏 可做封装;;;;*/}
                <View style={PublicStyle.navigator}>
                    <Text style={PublicStyle.text_FFF_53}>收款</Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.pop() }} style={PublicStyle.navigator_right_cancel}>
                        <Image source={require('../../../image/login/shiftRecord-cross.png')}
                            resizeMode={'contain'}
                            style={{ width: 35, height: 35 }} />
                    </TouchableOpacity>
                </View>
                <View style={[PublicStyle.ajcjf]}>
                    <View style={SettleStyle.settle_view_1}>
                        <Button backgroundColor={COLOR_F19149} width={81} height={38} fontSize={25} text='总额' />
                        <TextInput underlineColorAndroid='transparent' fontSize={25} style={SettleStyle.settle_input} />
                        <View style={SettleStyle.settle_icon}></View>
                        <Button backgroundColor={COLOR_SECOND_COLOR} width={117} height={59} fontSize={25} text='现金' />
                    </View>
                    <View style={SettleStyle.settle_view_1}>
                        <Button backgroundColor={COLOR_SECOND_COLOR} width={81} height={38} fontSize={25} text='现金' />
                        <TextInput underlineColorAndroid='transparent' fontSize={25} style={SettleStyle.settle_input} />
                        <View style={SettleStyle.settle_icon}></View>
                        <Button backgroundColor={COLOR_SECOND_COLOR} width={117} height={59} fontSize={25} text='刷卡' />
                    </View>
                    <View style={SettleStyle.settle_view_1}>
                        <Button backgroundColor={COLOR_8FC31F} width={81} height={38} fontSize={25} text='找零' />
                        <TextInput underlineColorAndroid='transparent' fontSize={25} style={SettleStyle.settle_input} />
                        <View style={SettleStyle.settle_icon}></View>
                        <Button backgroundColor={COLOR_SECOND_COLOR} width={117} height={59} fontSize={25} text='扫码' />
                    </View>
                    <View style={SettleStyle.settle_view_2}>
                        <View style={SettleStyle.settle_view_3} onLayout={(e)=>{
                            this.setState({btnWidth:(e.nativeEvent.layout.width-40)/4})
                        }}>
                            {this.num.map((item, i) => {
                                return (<Button
                                    key={i}
                                    style={{ margin: 5 }}
                                    backgroundColor={COLOR_SECOND_COLOR}
                                    width={this.state.btnWidth}
                                    height={71}
                                    fontSize={45}
                                    text={item} />)
                            })}
                        </View>
                        <View style={{marginLeft:15}}>
                            <Button style={{ marginTop: 5 }} backgroundColor={COLOR_SECOND_COLOR} width={117} height={71} fontSize={45} text='删除' />
                            <TouchableOpacity style={{alignItems:'center',justifyContent:'center',marginTop:10,backgroundColor:'#f19149',width:117,height:231,borderRadius:5}}>
                                <Text style={{fontSize:45,color:'#ffffff'}}>确</Text>
                                <Text style={{fontSize:45,color:'#ffffff'}}>认</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Animated.View style={[SettleStyle.settle_view_Ani4, { left: this.state.left, }]}>
                        <DiscountView onPress={(item) => {
                            ToastAndroid.showWithGravity(
                                item,
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER
                            );

                        }} />
                        <TouchableOpacity onPress={() => {
                            this._moveLeft();
                        }}
                            style={SettleStyle.settle_touchO_zk}>
                            <Text style={PublicStyle.text_FFF_35}>折{'\n'}扣</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <TouchableOpacity
                        onPress={() => { this.setState({ isXpjz: !this.state.isXpjz }) }}
                        style={[SettleStyle.settle_touchO_jz, { justifyContent: this.state.isXpjz ? 'flex-end' : 'flex-start' }]}>
                        <View style={[SettleStyle.settle_view_jz, { backgroundColor: this.state.isXpjz ? COLOR_EC6941 : '#666666' }]}>
                            <Text style={PublicStyle.text_FFF_18}>{this.state.isXpjz ? '打小票结账' : '不打小票结账'}</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}


