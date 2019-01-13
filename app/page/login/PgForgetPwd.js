import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { COLOR_F19149, COLOR_E74C39 } from '../../constant/ColorConstant';

import Button from '../../component/Button'
import PublicStyle from '../../style/PublicStyle'
import ForgetPwdStyle from '../../style/ForgetPwdStyle';

/**
 * 忘记密码界面
 */
export default class PgForgetPwd extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (<View style={PublicStyle.bg}>
            <View style={PublicStyle.navigator}>
                <TouchableOpacity onPress={() => { this.props.navigation.pop() }} style={PublicStyle.navigator_left}>
                </TouchableOpacity>
                <Text style={PublicStyle.text_FFF_30}>盈利多收银系统</Text>
                <View style={PublicStyle.navigator_right}>
                    <Image source={require("../../image/login/logo-icon.png")} style={PublicStyle.navigator_icon} />
                </View>
            </View>
            <View style={[PublicStyle.ajcjf]}>
                <View style={ForgetPwdStyle.ForgetPwdStyle_view1}>
                    <View style={ForgetPwdStyle.ForgetPwdStyle_view2}>
                        <Text style={ForgetPwdStyle.ForgetPwdStyle_text1}>新密码</Text>
                        <TextInput secureTextEntry={true} underlineColorAndroid="transparent" style={ForgetPwdStyle.ForgetPwdStyle_ti1} placeholder={'请输入新密码'} placeholderTextColor={'#dbdbdb'}/>
                    </View>
                    <View style={ForgetPwdStyle.ForgetPwdStyle_view2}>
                        <Text style={ForgetPwdStyle.ForgetPwdStyle_text1} >重复密码</Text>
                        <TextInput  secureTextEntry={true} underlineColorAndroid="transparent" style={ForgetPwdStyle.ForgetPwdStyle_ti1}placeholder={'再次输入新密码'} placeholderTextColor={'#dbdbdb'}/>
                    </View>
                    <View style={ForgetPwdStyle.ForgetPwdStyle_view2}>
                        <Text style={ForgetPwdStyle.ForgetPwdStyle_text1}>图形验证</Text>
                        <View style={ForgetPwdStyle.ForgetPwdStyle_view4}></View>
                    </View>
                    <View style={ForgetPwdStyle.ForgetPwdStyle_view2}>
                        <Text style={ForgetPwdStyle.ForgetPwdStyle_text1}>验证码</Text>
                        <View style={ForgetPwdStyle.ForgetPwdStyle_view5}>
                            <View style={ForgetPwdStyle.ForgetPwdStyle_view3}>
                                <Text style={ForgetPwdStyle.ForgetPwdStyle_text2}>60s</Text>
                            </View>
                            <TouchableOpacity style={ForgetPwdStyle.ForgetPwdStyle_to}>
                                <Text style={ForgetPwdStyle.ForgetPwdStyle_text2}>获取验证码</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={ForgetPwdStyle.ForgetPwdStyle_view6}>
                        <Text style={ForgetPwdStyle.ForgetPwdStyle_text3}>修改成功，请返回登录！</Text>
                        <Button text={'确认修改'} height={25} width={70}/>
                    </View>
                </View>
            </View>
        </View>)
    }
}