import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Animated,
    Easing,
    ToastAndroid
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
            left: new Animated.Value(-133),
        }
        this.isCose = true;
        this.num = ['1', '2', '3', '50', '4', '5', '6', '100', '7', '8', '9', '200', '0', '00', '.', '500']

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    _moveLeft() {
        if (this.isCose) {
            this.state.left.setValue(-133);
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
                toValue: -133,
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
                    <Text style={PublicStyle.text_FFF_30}>收款</Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.pop() }} style={PublicStyle.navigator_right_cancel}>
                        <Image source={require('../../../image/login/shiftRecord-cross.png')}
                            resizeMode={'contain'}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <View style={PublicStyle.ajcjf}>
                    <View style={SettleStyle.settle_view_1}>
                        <Button backgroundColor={COLOR_F19149} width={60} height={27} text='总额' />
                        <TextInput underlineColorAndroid='transparent' style={SettleStyle.settle_input} />
                        <View style={SettleStyle.settle_icon}></View>
                        <Button backgroundColor={COLOR_SECOND_COLOR} width={80} height={40} text='现金' />
                    </View>
                    <View style={SettleStyle.settle_view_1}>
                        <Button backgroundColor={COLOR_SECOND_COLOR} width={60} height={27} text='现金' />
                        <TextInput underlineColorAndroid='transparent' style={SettleStyle.settle_input} />
                        <View style={SettleStyle.settle_icon}></View>
                        <Button backgroundColor={COLOR_SECOND_COLOR} width={80} height={40} text='刷卡' />
                    </View>
                    <View style={SettleStyle.settle_view_1}>
                        <Button backgroundColor={COLOR_8FC31F} width={60} height={27} text='找零' />
                        <TextInput underlineColorAndroid='transparent' style={SettleStyle.settle_input} />
                        <View style={SettleStyle.settle_icon}></View>
                        <Button backgroundColor={COLOR_SECOND_COLOR} width={80} height={40} text='扫码' />
                    </View>
                    <View style={SettleStyle.settle_view_2}>
                        <View style={SettleStyle.settle_view_3}>
                            {this.num.map((item, i) => {
                                return (<Button
                                    key={i}
                                    style={{ margin: 5 }}
                                    backgroundColor={COLOR_SECOND_COLOR}
                                    width={350 / 5}
                                    height={40}
                                    text={item} />)
                            })}
                        </View>
                        <View style={{ width: 80 }}>
                            <Button style={{ marginTop: 5 }} backgroundColor={COLOR_SECOND_COLOR} height={40} text='删除' />
                            <Button style={{ marginTop: 10 }} backgroundColor={COLOR_SECOND_COLOR} height={140} text='确认' />
                        </View>
                    </View>

                    <Animated.View style={[SettleStyle.settle_view_Ani4, { left: this.state.left, }]}>
                        <DiscountView onPress={(item)=>{
                            ToastAndroid.showWithGravity(
                                item,
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER
                              );

                        }}/>
                        <TouchableOpacity onPress={() => {
                            this._moveLeft();
                        }}
                            style={SettleStyle.settle_touchO_zk}>
                            <Text style={PublicStyle.text_FFF_25}>折{'\n'}扣</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <TouchableOpacity
                        onPress={() => { this.setState({ isXpjz: !this.state.isXpjz }) }}
                        style={[SettleStyle.settle_touchO_jz, { justifyContent: this.state.isXpjz ? 'flex-end' : 'flex-start' }]}>
                        <View style={[SettleStyle.settle_view_jz, { backgroundColor: this.state.isXpjz ? COLOR_EC6941 : '#666666' }]}>
                            <Text style={PublicStyle.text_FFF_12}>{this.state.isXpjz ? '打小票结账' : '不打小票结账'}</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}


