import React, { Component } from 'react';
import { Text, View, Image, TextInput,ToastAndroid, } from 'react-native';
import { COLOR_F19149, COLOR_GRAY_DBDBDB } from '../../constant/ColorConstant';
import CheckBox from 'react-native-modest-checkbox'
import Button from '../../component/Button'
import PublicStyle from '../../style/PublicStyle'
import Login2Style from '../../style/Login2Style'

/**
 * 二次登录
 */
export default class PgLogin2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '三和福顺烟酒店',
            checked: false
        }
    }

    render() {
        return (
            <View style={PublicStyle.bg}>
                <View style={PublicStyle.navigator}>
                    <Text style={PublicStyle.text_FFF_45}>盈利多收银系统</Text>
                    <View style={PublicStyle.navigator_right}>
                        <Image source={require("../../image/login/logo-icon.png")} style={PublicStyle.navigator_icon} />
                    </View>
                </View>
                <View style={Login2Style.Login2Style_main}>
                    <View style={Login2Style.Login2Style_view1}>
                        <View style={Login2Style.Login2Style_view2}>
                            <Text style={[PublicStyle.text_2B7888_23, Login2Style.Login2Style_left_42]}>商户名</Text>
                            <Text style={[PublicStyle.text_2B7888_20, Login2Style.Login2Style_left_47]}>{this.state.text}</Text>
                        </View>
                        <View style={Login2Style.Login2Style_line}></View>
                        <View style={Login2Style.Login2Style_view2}>
                            <Text style={[PublicStyle.text_2B7888_23, Login2Style.Login2Style_left_42]}>用户名</Text>
                            <TextInput placeholder={'请输入注册手机号码'} placeholderTextColor={COLOR_GRAY_DBDBDB} style={Login2Style.Login2Style_input1}></TextInput>
                            <View style={Login2Style.Login2Style_line2}></View>
                            {/* 用户名图标 */}
                            <View style={{ width: 29, height: 29, marginLeft: 10, marginRight: 10, backgroundColor: '#666666' }}></View>
                        </View>
                        <View style={Login2Style.Login2Style_line}></View>
                        <View style={Login2Style.Login2Style_view2}>
                            <Text style={[PublicStyle.text_2B7888_23, Login2Style.Login2Style_left_42]}>密码</Text>
                            <TextInput placeholder={'请输入密码'} placeholderTextColor={COLOR_GRAY_DBDBDB} style={Login2Style.Login2Style_input2}></TextInput>
                        </View>
                        <View style={Login2Style.Login2Style_line}></View>
                        <View style={Login2Style.Login2Style_view3}>
                            <View style={Login2Style.Login2Style_view4}>
                                <Text style={[PublicStyle.text_9E9E9E_18, { textDecorationLine: 'underline' }]}>忘记密码</Text>
                                <CheckBox
                                    containerStyle={Login2Style.Login2Style_left_35}
                                    numberOfLabelLines={2}
                                    checked={this.state.checked}
                                    labelStyle={[PublicStyle.text_9E9E9E_18]}
                                    checkboxStyle={Login2Style.Login2Style_cb}
                                    label='记住密码'
                                    onChange={this._changeChecked}
                                />
                            </View>
                            <View style={Login2Style.Login2Style_view5}>
                                <Text style={PublicStyle.text_AEAEAE_15}>YLD.2.1.1.V1</Text>
                            </View>
                        </View>
                    </View>

                    <Button onPress={this._login2} width={430} height={60} text={'登录'} fontSize={28} borderRadius={12} style={Login2Style.Login2Style_top_33} />
                    <Button onPress={this._verUpdate} width={100} height={33} text={'软件升级'} fontSize={18} borderRadius={6} style={Login2Style.Login2Style_top_33} backgroundColor={COLOR_F19149} />
                </View>
            </View>
        )
    }


    _login2 = () =>{
        ToastAndroid.showWithGravity(
            '登录',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    
    _verUpdate= () =>{
        ToastAndroid.showWithGravity(
            '软件升级',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    _changeChecked = () => {
        let checked = !this.state.checked
        this.setState({ checked })
    }
}