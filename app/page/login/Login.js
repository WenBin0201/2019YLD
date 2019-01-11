import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'

var { GiftedForm, GiftedFormManager } = require('react-native-gifted-form')
import CheckBox from 'react-native-modest-checkbox'
import { COLOR_SECOND_COLOR } from '../../constant/ColorConstant'

import commonStyle from '../../style/CommonStyle'
import loginStyle from '../../style/LoginStyle.js'
import formStyle from '../../style/FormStyle'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }

    render() {
        return (
            <ScrollView style={commonStyle.scrollFrame}>
                <View
                    style={[ commonStyle.logoFrame, commonStyle.flexRow, commonStyle.centerRCF, commonStyle.centerRZF ]}>
                    <Image source={require('../../image/login/logo-text.png')}
                           style={[ commonStyle.loginText ]}></Image>
                    <Image source={require('../../image/login/logo-icon.png')}
                           style={[ commonStyle.loginIcon, commonStyle.positionRight5 ]}></Image>
                </View>
                <View>
                    <GiftedForm
                        formName='signupForm' // GiftedForm instances that use the same name will also share the same states
                        openModal={(route) => {
                            navigator.push(route) // The ModalWidget will be opened using this method. Tested with ExNavigator
                        }}
                        clearOnClose={false} // delete the values of the form when unmounted
                        formStyles={formStyle}
                        validators={validators}
                    >
                        <GiftedForm.GroupWidget style={loginStyle.loginF}>
                            <GiftedForm.TextInputWidget
                                name='vercode' // mandatory
                                title='验证码'
                                placeholder='请输入门店注册验证码'
                                clearButtonMode='while-editing'
                            />
                            <GiftedForm.TextInputWidget
                                name='username'
                                title='用户名'
                                placeholder='请输入注册手机号'
                                clearButtonMode='while-editing'
                            />

                            <GiftedForm.TextInputWidget
                                name='password' // mandatory
                                title='密码'
                                placeholder='请输入密码'
                                clearButtonMode='while-editing'
                                secureTextEntry={true}
                            />
                            <View style={[ commonStyle.flexRow, commonStyle.paddingTop5 ]}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('PasswordRetrieve')}
                                    style={[ commonStyle.flex1, commonStyle.centerRZF, commonStyle.alignRCF ]}>
                                    <Text
                                        style={[ commonStyle.color9e, commonStyle.paddingR20, commonStyle.underline ]}>忘记密码 </Text>
                                </TouchableOpacity>
                                <View style={[ commonStyle.flex1 ]}>
                                    <CheckBox
                                        numberOfLabelLines={2}
                                        checked={this.state.checked}
                                        labelStyle={{ fontSize: 14, color: '#9E9E9E' }}
                                        checkboxStyle={{ width: 25, height: 25 }}
                                        label='记住密码'
                                        onChange={(checked) => this._changeChecked()}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={[ commonStyle.color9e, commonStyle.textAlignR, commonStyle.paddingR10,
                                    commonStyle.font12, commonStyle.paddingBottom5 ]}>YLD.2.1.1.V1</Text>
                            </View>
                        </GiftedForm.GroupWidget>
                        <GiftedForm.SubmitWidget
                            title='登录'
                            widgetStyles={{
                                submitButton: {
                                    backgroundColor: COLOR_SECOND_COLOR,
                                    width: 286,
                                    height: 40,
                                    alignSelf: 'center',
                                    borderRadius: 14,
                                    marginTop: 20
                                }
                            }}
                            onSubmit={() => {
                                this.props.navigation.navigate('PgHome')
                            }}
                            // onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
                            //     if (isValid === true) {
                            //         // prepare object
                            //        /* values.gender = values.gender[0];*/
                            //     }
                            // }}
                        />
                        <View style={[ commonStyle.flexRow, loginStyle.btnFrame ]}>
                            <TouchableOpacity style={loginStyle.btnBg} onPress={() => {
                                this.props.navigation.navigate('ShiftRecord')
                            }}>
                                <Text style={loginStyle.btnText}>交接班记录</Text>
                            </TouchableOpacity>
                            <View style={[ loginStyle.btnBg, loginStyle.btnMargin ]}>
                                <Text style={loginStyle.btnText}>软件升级</Text>
                            </View>
                            <View style={[ loginStyle.btnBg ]}>
                                <Text style={loginStyle.btnText}>系统日志</Text>
                            </View>
                        </View>
                        <GiftedForm.ErrorsWidget/>
                    </GiftedForm>
                </View>
            </ScrollView>
        )
    }

    _changeChecked() {
        let checked = !this.state.checked
        this.setState({ checked })
    }
}
const validators = {
    username: {
        title: '手机号',
        validate: [ {
            validator: 'isMobilePhone',
            arguments: 'zh-CN',
            message: '请填写正确的{TITLE}'
        } ]
    },
    vercode: {
        title: '验证码',
        validate: [ {
            validator: 'isLength',
            arguments: [ 6, 6 ],
            message: '请填写正确的{TITLE}'
        } ]
    },
    password: {
        title: '密码',
        validate: [ {
            validator: 'isLength',
            arguments: [ 6 ],
            message: '{TITLE}不小于六位'
        } ]
    }
}
