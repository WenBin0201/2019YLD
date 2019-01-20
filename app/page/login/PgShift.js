import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { COLOR_F19149,COLOR_E74C39 } from '../../constant/ColorConstant';

import Button from '../../component/Button'
import PublicStyle from '../../style/PublicStyle'
import ShiftStyle from '../../style/ShiftStyle'

/**
 * 交接班界面
 */
export default class PgShift extends Component {

    constructor(props) {
        super(props)
        this.state={
            shopName:'测试门店1',
            shopPerson:'张三(工号：10011)',
            shiftDate:'2018-12-12 00:00:00 至 2018-12-13 00:00:00'
        }
    }

    componentWillMount() {
        let { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
        this.deviceHeight = deviceHeight;
        this.deviceWidth = deviceWidth;
    }

    render() {
        return (
            <View style={PublicStyle.bg}>
                <View style={PublicStyle.navigator}>
                    <TouchableOpacity onPress={() => { this.props.navigation.pop() }} style={PublicStyle.navigator_left}>
                    </TouchableOpacity>
                    <Text style={PublicStyle.text_FFF_53}>交接班</Text>
                    <View style={PublicStyle.navigator_right}>
                        <Image source={require("../../image/login/logo-icon.png")} style={PublicStyle.navigator_icon} />
                    </View>
                </View>
                <View style={[PublicStyle.ajcjf]}>
                    <View style={[ShiftStyle.ShiftStyle_view1]}>
                        <Text style={PublicStyle.text_2B7888_20}>店铺名称：{this.state.shopName}</Text>
                        <View style={ShiftStyle.ShiftStyle_view2}>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={PublicStyle.text_2B7888_12}>收银员</Text>
                                <Text style={PublicStyle.text_2B7888_12}>交接时间</Text>
                            </View>
                            <View style={{ marginRight: 10, alignItems: 'center' }}>
                                <Text style={PublicStyle.text_2B7888_12}>{this.state.shopPerson}</Text>
                                <Text style={PublicStyle.text_2B7888_12}>{this.state.shiftDate}</Text>
                            </View>
                        </View>
                        <View style={ShiftStyle.ShiftStyle_view3}>
                            <View style={{ flexDirection: 'row', flex: 1,justifyContent:'space-between' }}>
                                {this._renderLeftCell({ params1: 100.1, params2: 'xxx:xxx', params3: 'xxx:xxx'}, '总上销售额(元)', '', '')}
                                {this._renderRightCell({ params1: 100.1, params2: 100, params3: 0 }, '挂单统计(元)', '挂单金额', '挂单单数')}
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, marginTop: 10, marginBottom: 10,justifyContent:'space-between'  }}>
                                {this._renderLeftCell({ params1: 100.1, params2: 'xxx:xxx   xxx:xxx', params3: 'xxx:xxx   xxx:xxx' }, '线上销售额(元)', '成功', '失败')}
                                {this._renderRightCell({ params1: 100.1, params2: 100, params3: 1 }, '退货统计(元)', '退货金额', '退货单数')}
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1,justifyContent:'space-between'  }}>
                                 {this._renderLeftCell({ params1: 100.1, params2: 100.0, params3: 0 }, '总销售单(笔)', '正常单', '异常单')}
                                {this._renderRightCell({ params1: '', params2: 100, params3: 100 }, '会员统计', '会员总积分累计', '会员线上积分累计')}
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', width: 720,justifyContent:'space-between', }}>
                            <Button width={339} height={45} backgroundColor={COLOR_F19149} fontSize={31} text={'打印交接班结果'}/>
                            <Button width={339} height={45} backgroundColor={COLOR_E74C39} fontSize={31} text={'交接班并退出'}/>
                        </View>
                    </View>
                </View>

            </View>
        )
    }

    _renderRightCell = (item = {}, str1='', str2='', str3='') => {
        const { params1, params2, params3 } = item
        return (
            <View style={[ShiftStyle.ShiftStyle_view4,{marginLeft:10}]}>
                <View style={ShiftStyle.ShiftStyle_view5}>
                    <Text style={PublicStyle.text_2B7888_16}>{str1}</Text>
                    <Text style={[PublicStyle.text_2B7888_16,{fontWeight:'bold'}]}>{params1 ? params1 + '￥' : ''}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={PublicStyle.text_9E9E9E_12}>{str2}：{params2}</Text>
                    <Text style={PublicStyle.text_9E9E9E_12}>{str3}：{params3}</Text>
                </View>
            </View>
        )
    }

    _renderLeftCell = (item = {},str1='', str2='', str3='') => {
        const { params1, params2, params3 } = item
        return (
            <View style={[ShiftStyle.ShiftStyle_view4,{marginRight:10}]}>
                <View style={ShiftStyle.ShiftStyle_view5}>
                    <Text style={PublicStyle.text_2B7888_16}>{str1}</Text>
                    <Text style={[PublicStyle.text_2B7888_16,{fontWeight:'bold'}]}>{(params1 && str1!='总销售单(笔)') ? params1 + '￥':params1}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={PublicStyle.text_9E9E9E_12}>{str2?str2+':':''}{params2}</Text>
                    <Text style={PublicStyle.text_9E9E9E_12}>{str3?str3+':':''}{params3}</Text>
                </View>
            </View>
        )
    }
}
