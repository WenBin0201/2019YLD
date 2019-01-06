import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ListView,
    StyleSheet

} from 'react-native';

import BaseBoxView from '../BaseBoxView'
import TabView from '../../component/TabView/TabView'
import PulicStyle from '../../style/PublicStyle'

var _contentDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class TakeBillBoxCopntainer extends BaseBoxView {

    constructor(props) {
        super(props)
        this.state = {
            dataSource1: [{ num: '123456789', date: '2012-12-12 15:22:33' }, { num: '123456789', date: '2012-12-12 15:22:33' }, {}, {}, {}, {}],
            dataSource: [
                { "k1": "1", "k2": "1", "k3": "10", },
                { "k1": "1", "k2": "1", "k3": "10", },
                { "k1": "1", "k2": "1", "k3": "10", },
                { "k1": "1", "k2": "1", "k3": "10", },
                { "k1": "1", "k2": "1", "k3": "10", },
                { "k1": "1", "k2": "1", "k3": "10", },
                { "k1": "1", "k2": "1", "k3": "10", },
                { "k1": "1", "k2": "1", "k3": "10", },
                { "k1": "1", "k2": "1", "k3": "10", },
            ],
        };
    }

    componentWillMount() {
        let { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
        this.deviceHeight = deviceHeight;
        this.deviceWidth = deviceWidth;
    }

    renderComponent() {
        return (
            <View style={[PulicStyle.box_main,TakeBiollStyle.view_main]}>
                <View style={TakeBiollStyle.view_top}>
                    <Text style={{ fontSize: 25, color: '#fff' }}>取单</Text>
                    <TouchableOpacity onPress={() => {
                        this._closeBox();
                    }} style={TakeBiollStyle.view_top_right}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>关闭</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ backgroundColor: '#a3c6d4' }}>
                        <ListView
                            style={{ flex: 1, marginTop: 1 }}
                            dataSource={_contentDataSource.cloneWithRows(this.state.dataSource1)}
                            renderRow={this._renderRow1.bind(this)}
                        >
                        </ListView>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
                        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[PulicStyle.text_3E8492_14, { marginLeft: 30 }]}>收银员:</Text>
                            <TextInput
                                style={TakeBiollStyle.inputText}
                                underlineColorAndroid='transparent'
                            />
                            <Text style={[PulicStyle.text_3E8492_14, { marginLeft: 15 }]}>总金额:(元)</Text>
                            <TextInput
                                style={TakeBiollStyle.inputText}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <TabView
                            tabHeads={['商品名称', '商品单价', '商品数量']}
                            tabRowWidth={[1, 1, 1]}
                            tabHeadTextFontSize={12}
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow.bind(this)}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 35 }}>
                            <Text style={[PulicStyle.text_3E8492_14, { marginLeft: 15 }]}>共计 0行 0件商品</Text>
                            <View style={{ flexDirection: 'row', marginRight: 15 }}>
                                <TouchableOpacity style={PulicStyle.btn_27}>
                                    <Text style={PulicStyle.text_FFF_14}>取单</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[PulicStyle.btn_27,{marginLeft:10}]}>
                                    <Text style={PulicStyle.text_FFF_14}>清空</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[PulicStyle.btn_27,{marginLeft:10}]}>
                                    <Text style={PulicStyle.text_FFF_14}>删除</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    /**
     * 单号列表item
     * @param {*} rowD 
     * @param {*} sectionID 
     * @param {*} rowID 
     * @param {*} highlightRow 
     */
    _renderRow1(rowD, sectionID, rowID, highlightRow) {
        return (
            <TouchableOpacity>
                <View style={{ marginLeft: 2, marginRight: 2, marginTop: 1, marginBottom: 1, backgroundColor: '#fff', height: 50, borderRadius: 5, justifyContent: 'center' }}>
                    <Text style={[PulicStyle.text_3E8492_14, { marginLeft: 5, marginRight: 5 }]}>单号：{rowD.num}</Text>
                    <Text style={[PulicStyle.text_3E8492_12, { marginLeft: 5, marginRight: 5 }]}>时间：{rowD.date}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    /**
     * 商品列表item
     * @param {*} rowD 
     * @param {*} sectionID 
     * @param {*} rowID 
     * @param {*} highlightRow 
     */
    _renderRow(rowD, sectionID, rowID, highlightRow) {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: rowID % 2 == 0 ? '#ffffff' : '#f1f1f1', height: 30 }}>
                <View style={[PulicStyle.tab_item,{flex: 1, borderBottomWidth: rowID == this.state.dataSource.length - 1 ? 0.5 : 0}]}>
                    <Text>{rowD.k1}</Text>
                </View>
                <View style={[PulicStyle.tab_item,{flex: 1, borderBottomWidth: rowID == this.state.dataSource.length - 1 ? 0.5 : 0}]}>
                    <Text>{rowD.k2}</Text>
                </View>
                <View style={[PulicStyle.tab_item,{flex: 1, borderBottomWidth: rowID == this.state.dataSource.length - 1 ? 0.5 : 0}]}>
                    <Text>{rowD.k3}</Text>
                </View>
            </View>
        )
    }
}

const TakeBiollStyle = StyleSheet.create({
    view_main: {
        marginTop: 80,
        marginBottom: 80,
        marginLeft: 120,
        marginRight: 120,
    },
    view_top:{
        height: 50, 
        backgroundColor: '#3e8492', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    view_top_right :{
        borderColor: '#FFF', 
        borderLeftWidth: 2, 
        height: 50, 
        width: 60, 
        position: 'absolute', 
        right: 0, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    inputText:{
        marginLeft: 5, 
        paddingBottom: 0,
        paddingTop: 0, 
        height: 25, 
        width: 150,
        borderRadius: 3, 
        borderColor: '#2b7888', 
        borderWidth: 1, 
        backgroundColor: '#FFFFFF' 
    }
    

});