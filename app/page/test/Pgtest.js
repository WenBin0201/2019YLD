import React, { Component } from 'react';
import { View, Text } from 'react-native';


import Button from '../../component/Button'
import DialogBox from '../../component/dialogbox/DialogBox'
import TakeBillBox from '../../component/takebill/TakeBillBox'
import ComSelectBox from "../../component/comselect/ComSelectBox";
import AddCommBox from '../../component/addcomm/AddCommBox'
import WeipriceBox from '../../component/weiprice/WeipriceBox'


export default class Pgtest extends Component {

    constructor(props) {
        super(props)

    }



    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Button width={100} text='登录界面' style={{ margin: 5 }} onPress={() => {
                    this.props.navigation.push('Login')
                }} />
                <Button width={100} text='交接班界面' style={{ margin: 5 }} onPress={() => {
                    this.props.navigation.push('PgShift')
                }} />
                <Button width={100} text='交接班记录界面' style={{ margin: 5 }} onPress={() => {
                    this.props.navigation.push('ShiftRecord')
                }} />
                <Button width={100} text='软件升级' style={{ margin: 5 }} onPress={() => {
                    this._dialog1();
                }} />
                <Button width={100} text='检测到新版本' style={{ margin: 5 }} onPress={() => {
                    this._dialog2();
                }} />
                <Button width={100} text='用户名密码错' style={{ margin: 5 }} onPress={() => {
                    this._dialog3();
                }} />
                <Button width={100} text='忘记密码界面' style={{ margin: 5 }} onPress={() => {
                    this.props.navigation.push('PgForgetPwd')
                }} />
                <Button width={100} text='收银主页' style={{ margin: 5 }} onPress={() => {
                    this.props.navigation.navigate('PgHome')
                }} />
                <Button width={100} text='取单弹窗' style={{ margin: 5 }} onPress={() => {
                    TakeBillBox.show()
                }} />
                <Button width={100} text='收款页面' style={{ margin: 5 }} onPress={() => {
                    this.props.navigation.push('PgSettle')
                }} />
                <Button width={120} text='现金系统提示弹窗' style={{ margin: 5 }} onPress={() => {

                    this._dialog4();
                }} />
                <Button width={120} text='支付失败弹窗' style={{ margin: 5 }} onPress={() => {

                    this._dialog5();
                }} />
                <Button width={120} text='挂单成功弹窗' style={{ margin: 5 }} onPress={() => {

                    this._dialog6();
                }} />

                <Button width={120} text='网络状态弹窗' style={{ margin: 5 }} onPress={() => {
                    this._dialog7();

                }} />
                <Button width={140} text='商品选择' style={{ margin: 5 }} onPress={() => {
                    ComSelectBox.show();
                }} />
                <Button width={140} text='一码多品-商品选择' style={{ margin: 5 }} onPress={() => {
                    ComSelectBox.show({ isMultiple: true });
                }} />
                <Button width={150} text='初次售卖商品资料-新增' style={{ margin: 5 }} onPress={() => {
                    AddCommBox.show();
                }} />

                <Button width={150} text='称重计价弹窗' style={{ margin: 5 }} onPress={() => {
                    WeipriceBox.show();
                }} />
            </View>
        )
    }

    _dialog1() {
        let _v = <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', paddingBottom: 5 }}>
            <Text style={{ color: '#e74c39', fontSize: 16 }}>恭喜！</Text>
            <Text style={{ color: '#e74c39', fontSize: 14 }}>您所使用的是盈利多系統最新的版本，無需升級</Text>
            <Text style={{ color: '#e74c39', fontSize: 14 }}>当前版本号 YLD 2.1.1V1</Text>
        </View>
        DialogBox.show(null, null, {
            buttons: [
                {
                    text: '返回',
                    backgroundColor: '#2b7888',
                    onPress: () => { DialogBox.hide() }
                },
            ]
        }, _v, true, true)
    }

    _dialog2() {

        DialogBox.show('系统通知', '已检测到新版本，请进行软件升级！', {
            buttons: [
                {
                    text: '取消',
                    backgroundColor: '#f19149',
                    onPress: () => { DialogBox.hide() }
                },
                {
                    text: '升级',
                    backgroundColor: '#eb6100',
                    onPress: () => { DialogBox.hide() }
                }
            ]
        }, null, true, false)

    }
    _dialog3() {
        let _v = <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#e74c39', fontSize: 18 }}>用户名或密码错误！</Text>
            </View>
            <Button text={'忘记密码'} width={70} style={{ marginBottom: 10, }} />
            <Button text={'返回登录'} width={70} onPress={() => {
                DialogBox.hide();
            }} />
        </View>
        DialogBox.show(null, null, { buttons: [] }, _v, false, false)
    }

    _dialog4() {
        let _v = <Text style={{ color: '#e74c39', fontSize: 18 }}>现金收取金额必须大于或等于销售金额！ </Text>
        DialogBox.show('系统提示', null, {
            buttons: [
                {
                    text: '知道了',
                    backgroundColor: '#eb6100',
                    onPress: () => { DialogBox.hide() }
                },
            ]
        }, _v, true, true)
    }
    _dialog5() {
        let _v = <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', paddingBottom: 5 }}>
            <Text style={{ color: '#e74c39', fontSize: 18 }}>支付失败！</Text>
            <Text style={{ color: '#2b7889', fontSize: 14 }}>失败原因：拉卡拉系统返回值！</Text>
        </View>
        DialogBox.show('系统提示', null, {
            buttons: [
                {
                    text: '取消',
                    backgroundColor: '#f19149',
                    onPress: () => { DialogBox.hide() }
                },
                {
                    text: '升级',
                    backgroundColor: '#eb6100',
                    onPress: () => { DialogBox.hide() }
                }
            ]

        }, _v, true, true)
    }
    _dialog6() {
        let _v = <View style={{ flex: 1, alignItems: 'center', paddingBottom: 5 }}>
            <Text style={{ color: '#2b7889', fontSize: 18, marginTop: 25 }}>挂单成功</Text>
            <Text style={{ color: '#2b7889', fontSize: 14, marginTop: 25 }}>单号：1354685427</Text>
        </View>
        DialogBox.show('提示', null, {
            buttons: []

        }, _v, true, true)
    }

    _dialog7() {
        let _v = <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 18, height: 18, backgroundColor: '#666666', marginRight: 3 }}></View>
            <Text style={{ color: '#2b7889', fontSize: 18 }}>您好！当前网络状态为网络通畅</Text>
        </View>
        DialogBox.show('系统提示', null, {
            buttons: [
                {
                    text: '确认',
                    backgroundColor: '#2b7889',
                    onPress: () => { DialogBox.hide() }
                },
            ]
        }, _v, true, true)
    }
}
