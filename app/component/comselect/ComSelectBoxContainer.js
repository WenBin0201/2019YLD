import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image

} from 'react-native';

import TabView from '../../component/TabView/TabView'
import PublicStyle from '../../style/PublicStyle'
import Button from '../../component/Button'

export default class ComSelectBoxContainer extends Component {

    constructor(props) {
        super(props)
        this.isMultiple = this.props.isMultiple
        this.state = {
            dataSource: [
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
                { "k1": "", "k2": "", "k3": "", "k4": "", "k5": "", "k6": "" },
            ],
        };
    }

    componentWillMount() {
        let { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
        this.deviceHeight = deviceHeight;
        this.deviceWidth = deviceWidth;
    }
    render() {
        return (
            <View style={{ width: this.deviceWidth - 200, height: this.deviceHeight - 120, backgroundColor: '#f1F1f1' }}>
                <View style={[PublicStyle.view_top]}>
                    <Text style={[PublicStyle.text_FFF_20]}>{this.isMultiple == true ? '一码多品-商品选择' : '商品选择'}</Text>
                    <TouchableOpacity onPress={() => {
                        if (this.props.destroy) {
                            this.props.destroy();
                        } else {
                            this.props.navigation.goBack()
                        }
                    }} style={[PublicStyle.view_top_right]}>
                        <Image source={require('../../image/login/shiftRecord-cross.png')}
                            resizeMode={'contain'}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                {!this.isMultiple ?
                    <View style={ComSelectStyle.ComSelectStyle_view1}>
                        <TextInput placeholder='输入条码/拼音码/自编码' placeholderTextColor='#dbdbdb' style={ComSelectStyle.ComSelectStyle_input1} />
                        <Button borderRadius={0} width={35} height={35} text='X'></Button>
                        <Button width={85} height={35} backgroundColor='#f19149' style={{ marginLeft: 10, }} fontSize={14} text='搜索' />

                    </View>
                    : null}
                <View style={[ComSelectStyle.ComSelectStyle_view2, { marginTop: this.isMultiple == true ? 10 : 0 }]}>
                    <TabView
                        tabHeads={['商品条码', '拼音码', '自编码', '商品名称', '规格', '零售价']}
                        tabRowWidth={[1, 1, 1, 1, 1, 1,]}
                        data={this.state.dataSource}
                        renderItem={this._renderRow}
                    />
                </View>
                <View style={ComSelectStyle.ComSelectStyle_view3}>
                    {this.isMultiple == true ?
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={PublicStyle.text_9E9E9E_14}>当前商品数量：4</Text>
                            <Text style={PublicStyle.text_9E9E9E_14}>匹配数量较多，请更换关键字缩小搜索范围</Text>
                        </View>
                        :
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={PublicStyle.text_9E9E9E_14}>该条码：<Text style={{ color: '#2b7888' }}>69883421244</Text></Text>
                            <Text style={[PublicStyle.text_9E9E9E_14,{marginLeft:10}]}>存在重码商品数量：<Text style={{ color: '#2b7888' }}>2</Text></Text>
                        </View>
                    }
                    <Button width={85} height={35} backgroundColor='#eb6100' fontSize={14} style={{ marginLeft: 10, }} text='取消' />
                    <Button width={85} height={35} backgroundColor='#d63200' fontSize={14} style={{ marginLeft: 15, }} text='加入' />
                </View>
            </View>
        )
    }

    _renderRow = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 30 }}>
                <View style={[PublicStyle.tab_defalut_item, { flex: 1, borderLeftWidth: 1 }]}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={[PublicStyle.tab_defalut_item, { flex: 1, borderLeftWidth: 1 }]}>
                    <Text>{item.k2}</Text>
                </View>
                <View style={[PublicStyle.tab_defalut_item, { flex: 1, borderLeftWidth: 1 }]}>
                    <Text>{item.k3}</Text>
                </View>
                <View style={[PublicStyle.tab_defalut_item, { flex: 1, borderLeftWidth: 1 }]}>
                    <Text>{item.k4}</Text>
                </View>
                <View style={[PublicStyle.tab_defalut_item, { flex: 1, borderLeftWidth: 1 }]}>
                    <Text>{item.k5}</Text>
                </View>
                <View style={[PublicStyle.tab_defalut_item, { flex: 1, borderLeftWidth: 1 }]}>
                    <Text>{item.k6}</Text>
                </View>
            </View>
        )
    }
}


const ComSelectStyle = StyleSheet.create({

    ComSelectStyle_view1: {
        flexDirection: 'row',
        height: 35,
        paddingLeft: 10,
        paddingRight: 10, marginTop: 10,
        marginBottom: 10
    },
    ComSelectStyle_view2: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    ComSelectStyle_view3: {
        flexDirection: 'row',
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    ComSelectStyle_input1: {
        flex: 1,
        fontSize: 14,
        borderColor: '#2b7888',
        borderWidth: 1,
        padding: 0,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0
    }

});