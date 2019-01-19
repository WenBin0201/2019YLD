import React, { Component } from 'react'
import { View, Text, TextInput, PixelRatio } from 'react-native'

import Button from '../../component/Button'
import CreateCommodityBox from '../../component/CreateCommodityModal/CreateCommodityBox'
import DialogBox from '../../component/dialogbox/DialogBox'
import PanDianDetailsBox from '../../component/PanDianDetailsModal/PanDianDetailsBox'
import PanDianHelpBox from '../../component/PanDianHelpModal/PanDianHelpBox'
import PurcahseInStorageBox from '../../component/PurcahseInStorageModal/PurcahseInStorageBox'
import TakeBillBox from '../../component/takebill/TakeBillBox'
import ComSelectBox from '../../component/comselect/ComSelectBox'
import AddCommBox from '../../component/addcomm/AddCommBox'
import WeipriceBox from '../../component/weiprice/WeipriceBox'
import { COLOR_SECOND_COLOR } from '../../constant/ColorConstant'
import { WIDTH_RATIO } from '../../constant/StaticDataDef'

export default class Pgtest extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Button width={100} text='登录界面' style={{ margin: 5 }} onPress={() => {
                    this.props.navigation.push('Login')
                }}/>
                <Button width={100} text='交接班界面' style={{ margin: 5 }} onPress={() => {
                    this.props.navigation.push('PgShift')
                }}/>
                <Button width={100} text='交接班记录界面' style={{ margin: 5 }} onPress={() => {
                    this.props.navigation.push('ShiftRecord')
                }}/>
                <Button width={100} text='软件升级' style={{ margin: 5 }} onPress={() => {
                    this._dialog1()
                }}/>
                <Button width={100} text='检测到新版本' style={{ margin: 5 }} onPress={() => {
                    this._dialog2()
                }}/>
                <Button width={100} text='用户名密码错' style={{ margin: 5 }} onPress={() => {
                    this._dialog3()
                }}/>
                <Button width={100} text='忘记密码界面' style={{ margin: 5 }} onPress={() => {
                    this.props.navigation.push('PgForgetPwd')
                }}/>
                <Button width={100} text='收银主页' style={{ margin: 5 }} onPress={() => {
                    this.props.navigation.navigate('PgHome')
                }}/>
                <Button width={100} text='取单弹窗' style={{ margin: 5 }} onPress={() => {
                    TakeBillBox.show()
                }}/>
                <Button width={100} text='收款页面' style={{ margin: 5 }} onPress={() => {
                    this.props.navigation.push('PgSettle')
                }}/>
                <Button width={120} text='现金系统提示弹窗' style={{ margin: 5 }} onPress={() => {

                    this._dialog4()
                }}/>
                <Button width={120} text='支付失败弹窗' style={{ margin: 5 }} onPress={() => {

                    this._dialog5()
                }}/>
                <Button width={120} text='挂单成功弹窗' style={{ margin: 5 }} onPress={() => {

                    this._dialog6()
                }}/>

                <Button width={120} text='网络状态弹窗' style={{ margin: 5 }} onPress={() => {
                    this._dialog7()

                }}/>
                <Button width={140} text='商品选择' style={{ margin: 5 }} onPress={() => {
                    ComSelectBox.show()
                }}/>
                <Button width={140} text='一码多品-商品选择' style={{ margin: 5 }} onPress={() => {
                    ComSelectBox.show({ isMultiple: true })
                }}/>
                <Button width={150} text='初次售卖商品资料-新增' style={{ margin: 5 }} onPress={() => {
                    AddCommBox.show()
                }}/>

                <Button width={150} text='称重计价弹窗' style={{ margin: 5 }} onPress={() => {
                    WeipriceBox.show()
                }}/>
                <Button width={150} text='跳转页数提示' style={{ margin: 5 }} onPress={() => {
                    this._dialog8()
                }}/>
                <Button width={150} text='商品档案导出' style={{ margin: 5 }} onPress={() => {
                    this._dialog9()
                }}/>
                <Button width={150} text='修改权限验证码弹窗' style={{ margin: 5 }} onPress={() => {
                    this._dialog10()
                }}/>
                <Button width={150} text='订单生成提示' style={{ margin: 5 }} onPress={() => {
                    this._dialog11()
                }}/>
                <Button width={150} text='采购单入库' style={{ margin: 5 }} onPress={() => {
                    PurcahseInStorageBox.show()
                }}/>
                <Button width={150} text='新增商品' style={{ margin: 5 }} onPress={() => {
                    CreateCommodityBox.show({ title: '新增商品' })
                }}/>
                <Button width={150} text='一码多品新增' style={{ margin: 5 }} onPress={() => {
                    CreateCommodityBox.show({ title: '一码多品新增' })
                }}/>
                <Button width={150} text='盘点帮助提示' style={{ margin: 5 }} onPress={() => {
                    PanDianHelpBox.show()
                }}/>
                <Button width={150} text='盘点备注说明' style={{ margin: 5 }} onPress={() => {
                    this._dialog12()
                }}/>
                <Button width={150} text='库存盘点完成' style={{ margin: 5 }} onPress={() => {
                    this._dialog13()
                }}/>
                <Button width={150} text='库存盘点' style={{ margin: 5 }} onPress={() => {
                    this._dialog14()
                }}/>
                <Button width={150} text='恢复盘点' style={{ margin: 5 }} onPress={() => {
                    this._dialog15()
                }}/>
                <Button width={150} text='没有找到匹配的商品' style={{ margin: 5 }} onPress={() => {
                    this._dialog16()
                }}/>
                <Button width={150} text='抽样盘点' style={{ margin: 5 }} onPress={() => {
                    this._dialog17()
                }}/>
                <Button width={150} text='全库盘点' style={{ margin: 5 }} onPress={() => {
                    this._dialog18()
                }}/>
                <Button width={150} text='邮件导出' style={{ margin: 5 }} onPress={() => {
                    this._dialog19()
                }}/>
                <Button width={150} text='邮件输入' style={{ margin: 5 }} onPress={() => {
                    this._dialog20()
                }}/>
                <Button width={150} text='盘点信息详单' style={{ margin: 5 }} onPress={() => {
                    PanDianDetailsBox.show()
                }}/>
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
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, _v, true, true)
    }

    _dialog2() {

        DialogBox.show('系统通知', '已检测到新版本，请进行软件升级！', {
            buttons: [
                {
                    text: '取消',
                    backgroundColor: '#f19149',
                    onPress: () => {
                        DialogBox.hide()
                    }
                },
                {
                    text: '升级',
                    backgroundColor: '#eb6100',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, null, true, false)

    }

    _dialog3() {
        let _v = <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#e74c39', fontSize: 18 }}>用户名或密码错误！</Text>
            </View>
            <Button text={'忘记密码'} width={70} style={{ marginBottom: 10 }}/>
            <Button text={'返回登录'} width={70} onPress={() => {
                DialogBox.hide()
            }}/>
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
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
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
                    onPress: () => {
                        DialogBox.hide()
                    }
                },
                {
                    text: '升级',
                    backgroundColor: '#eb6100',
                    onPress: () => {
                        DialogBox.hide()
                    }
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
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, _v, true, true)
    }

    _dialog8() {
        DialogBox.show('系统提示', '您输入的跳转页数超过有效范围!', {
            buttons: [
                {
                    text: '关闭',
                    backgroundColor: '#eb6100',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, null, true, true)
    }

    _dialog9() {
        let _v = <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: '#2b7888' }}>邮箱：</Text>
                <TextInput style={{
                    marginLeft: 5,
                    width: 217,
                    height: 30,
                    paddingTop: 0,
                    paddingBottom: 0,
                    borderColor: '#2b7888',
                    borderWidth: 1,
                    borderRadius: 5
                }}/>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ fontSize: 14, color: '#2b7888' }}>提示：</Text>
                <Text style={{
                    marginLeft: 5,
                    fontSize: 10,
                    color: '#2b7888'
                }}>导出的报表将以Excel文件形式发送到您的邮箱，{'\n'}请填写您的常用邮箱，以确保顺利接收邮件</Text>
            </View>
        </View>
        DialogBox.show('商品档案导出', null, {
            buttons: [
                {
                    text: '关闭',
                    backgroundColor: '#eb6100',
                    onPress: () => {
                        DialogBox.hide()
                    }
                },
                {
                    text: '发送',
                    backgroundColor: '#eb6100',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]

        }, _v, true, true)
    }

    _dialog10() {
        let _v = <View
            style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', marginLeft: 50, marginRight: 50 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: '#2b7888' }}>验证码</Text>
                <TextInput placeholder='请输入图形验证码' placeholderTextColor='#dbdbdb' style={{
                    fontSize: 12,
                    marginLeft: 5,
                    flex: 1,
                    height: 30,
                    paddingTop: 0,
                    paddingBottom: 0,
                    borderColor: '#2b7888',
                    borderWidth: 1
                }}/>
                <View style={{
                    width: 70,
                    height: 30,
                    marginLeft: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: '#dbdbdb',
                    borderWidth: 1,
                    borderRadius: 3
                }}>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: '#2b7888' }}>验证码</Text>
                <TextInput placeholder='请输入手机验证码' placeholderTextColor='#dbdbdb' style={{
                    fontSize: 12,
                    marginLeft: 5,
                    flex: 1,
                    height: 30,
                    paddingTop: 0,
                    paddingBottom: 0,
                    borderColor: '#2b7888',
                    borderWidth: 1
                }}/>
                <View style={{
                    width: 40,
                    height: 30,
                    marginLeft: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: '#2b7888',
                    borderWidth: 1,
                    borderRadius: 3
                }}>
                    <Text>60</Text>
                </View>

            </View>
            <Text style={{ fontSize: 12, color: '#d63200' }}>您已获取修改权限，修改时效为2个小时！</Text>
        </View>
        DialogBox.show('系统提示', null, {
            buttons: [
                {
                    text: '关闭',
                    backgroundColor: '#eb6100',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, _v, true, true)
    }

    _dialog11() {
        DialogBox.show('系统提示', [ '恭喜您！', '智能补货采购订单已经生成', '在入库版本中通过采购单入库完成入库操作' ], {
            buttons: [
                {
                    text: '关闭',
                    backgroundColor: '#eb6100',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, null, true, true)
    }

    _dialog12() {
        const _v = (
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-around', alignSelf: 'stretch' }}>
                <Text style={{
                    color: COLOR_SECOND_COLOR,
                    fontSize: 12,
                    textAlign: 'center',
                    marginBottom: 5
                }}>可为本次盘点进行备注说明</Text>
                <TextInput
                    placeholder={'请输入备注说明!'}
                    placeholderTextColor={'rgb(90,90,90)'}
                    multiline={true}
                    style={{
                        backgroundColor: 'rgb(163,198,212)',
                        flex: 1,
                        marginLeft: 10,
                        marginRight: 10,
                        textAlignVertical: 'top'
                    }}
                />
            </View>
        )

        DialogBox.show('系统提示', null, {
            buttons: [
                {
                    text: '确定',
                    backgroundColor: 'red',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, _v, true, false)
    }

    _dialog13() {
        DialogBox.show('系统提示', [ '库存盘点完成' ], {
            buttons: [
                {
                    text: '确定',
                    backgroundColor: 'rgb(214,50,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, null, true, false)
    }

    _dialog14() {
        DialogBox.show('库存盘点', [ '总共盘点1件商品，其余1499件未盘点', '【全盘盘点】未盘点商品库存将被置为0，', '【抽样盘点】未盘点商品库存将保持不变' ], {
            buttons: [
                {
                    text: '重新盘点',
                    backgroundColor: 'rgb(235,97,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                },
                {
                    text: '提交',
                    backgroundColor: 'rgb(214,50,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, null, true, false)
    }

    _dialog15() {
        DialogBox.show('恢复盘点', [ '之前还有尚未提交的盘点记录！', '1.点击[重新盘点],将清空之前的盘点记录重新盘点', '2.点击[继续盘点],将继续之前的盘点操作' ], {
            buttons: [
                {
                    text: '重新盘点',
                    backgroundColor: 'rgb(235,97,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                },
                {
                    text: '继续盘点',
                    backgroundColor: 'rgb(214,50,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, null, true, false)
    }

    _dialog16() {
        DialogBox.show('系统提示', [ '没有找到匹配的商品' ], {
            buttons: [
                {
                    text: '确定',
                    backgroundColor: 'rgb(214,50,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, null, true, false)
    }

    _dialog17() {
        DialogBox.show('系统提示', [ '确定要开始抽样盘点吗？', '【抽样盘点】对部分商品进行盘点', '结束盘点后，仅对盘点商品的库存进行调整', '为盘点商品库存不变' ], {
            buttons: [
                {
                    text: '取消',
                    backgroundColor: 'rgb(235,97,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                },
                {
                    text: '确定',
                    backgroundColor: 'rgb(214,50,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, null, true, false)
    }

    _dialog18() {
        DialogBox.show('系统提示', [ '确定要开始全库盘点吗？', '【全库盘点】是对所有商品进行盘点', '结束盘点后，未盘点商品的库存自动调整为0' ], {
            buttons: [
                {
                    text: '取消',
                    backgroundColor: 'rgb(235,97,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                },
                {
                    text: '确定',
                    backgroundColor: 'rgb(214,50,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, null, true, false)
    }

    _dialog19() {
        DialogBox.show('系统提示', [ '正在导出中，请稍后在您的邮箱中查看' ], {
            buttons: [
                {
                    text: '关闭',
                    backgroundColor: 'rgb(235,97,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, null, true, false)
    }

    _dialog20() {
        const content = (
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', alignSelf: 'stretch' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25 * WIDTH_RATIO }}>
                    <Text style={{ color: COLOR_SECOND_COLOR, fontSize: 12 }}>邮箱：</Text>
                    <TextInput
                        style={{
                            width: 150 * WIDTH_RATIO,
                            height: 20 * WIDTH_RATIO,
                            borderRadius: 4,
                            borderColor: COLOR_SECOND_COLOR,
                            borderWidth: 1 / PixelRatio.get(),
                            padding: 0,
                            textAlignVertical: 'center'
                        }}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 15 * WIDTH_RATIO,
                    marginLeft: 25 * WIDTH_RATIO
                }}>
                    <Text style={{ color: COLOR_SECOND_COLOR, fontSize: 12 }}>提示：</Text>
                    <Text style={{
                        lineHeight: 20,
                        color: COLOR_SECOND_COLOR,
                        fontSize: 10
                    }}>导出的报表将以Excel文件形式发送到您的邮箱，{'\n'}请填写您的常用邮箱，以确保顺利接受邮件</Text>
                </View>
            </View>
        )

        DialogBox.show('商品档案导出', null, {
            buttons: [
                {
                    text: '关闭',
                    backgroundColor: 'rgb(235,97,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                },
                {
                    text: '发送',
                    backgroundColor: 'rgb(215,50,0)',
                    onPress: () => {
                        DialogBox.hide()
                    }
                }
            ]
        }, content, true, false)
    }

}
