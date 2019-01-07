import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
} from 'react-native';
/**
 * 收银主页
 */
import ReceiptsStyle from '../../../style/ReceiptsStyle'
import TabView from '../../../component/TabView/TabView'
import TakeBillBox from '../../../component/takebill/TakeBillBox'
import DialogBox from '../../../component/dialogbox/DialogBox'

export default class PgReceipts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: [
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1" },
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1" },
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1" },
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1" },
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1" },
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1" },
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1" },
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1" },
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1" },
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1" },
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1" },
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
            <View style={ReceiptsStyle.container}>
                <TabView
                    tabHeads={['商品条码', '商品名称', '原价', '折扣', '数量', '现价', '小计']}
                    tabRowWidth={[1.5, 2, 1, 1, 1, 1, 1]}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />
                <View style={{ backgroundColor: "#fff" }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#f1f1f1', height: 35, alignItems: 'center', justifyContent: 'center', }}>
                        <View style={{ width: 25, height: 25, backgroundColor: '#666666', marginLeft: 15, marginRight: 15 }}>
                        </View>
                        <Text style={[ReceiptsStyle.text2, { flex: 1 }]}>共计  x行 x件商品</Text>
                        <TouchableOpacity onPress={() => {
                            DialogBox.show('系统通知', ['78789876767','78789876767']);
                        }} style={[ReceiptsStyle.btn, { backgroundColor: '#2b7888' }]}>
                            <Text style={ReceiptsStyle.text1}>挂单</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { TakeBillBox.show() }} style={[ReceiptsStyle.btn, { backgroundColor: '#2b7888' }]}>
                            <Text style={ReceiptsStyle.text1}>取单</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ReceiptsStyle.btn, { backgroundColor: '#2b7888' }]}>
                            <Text style={ReceiptsStyle.text1}>删除</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ReceiptsStyle.btn, { marginRight: 15, backgroundColor: '#eb6100' }]}>
                            <Text style={ReceiptsStyle.text1}>清空</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: '#2b7888', alignItems: 'center' }}>
                        <View>
                            <TextInput
                                style={ReceiptsStyle.textIput1}
                                placeholder="请输入条码/拼音码/自编码"
                                underlineColorAndroid='transparent'
                            />
                            <TouchableOpacity style={ReceiptsStyle.btn2}>
                                <Text style={{ color: '#fff', fontSize: 23 }}>无码/称重</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ width: 200, marginLeft: 15, marginTop: 10, marginBottom: 10, borderRadius: 6, backgroundColor: "#fff" }}>
                                <TextInput
                                    style={ReceiptsStyle.textIput2}
                                    placeholder="请输入会员手机号"
                                    underlineColorAndroid='transparent'
                                />
                                <View style={{ flexDirection: 'row', height: 25 }}>
                                    <View style={ReceiptsStyle.tab2}>
                                        <Text style={ReceiptsStyle.text2}>会员名称</Text>
                                    </View>
                                    <View style={[ReceiptsStyle.tab2, { borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1 }]}>
                                        <Text style={ReceiptsStyle.text2}>本店积分</Text>
                                    </View>
                                    <View style={ReceiptsStyle.tab2}>
                                        <Text style={ReceiptsStyle.text2}>市民网积分</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', height: 25 }}>
                                    <View style={ReceiptsStyle.tab2}>
                                        <Text style={ReceiptsStyle.text2}></Text>
                                    </View>
                                    <View style={[ReceiptsStyle.tab2, { borderLeftWidth: 1, borderRightWidth: 1 }]}>
                                        <Text style={ReceiptsStyle.text2}></Text>
                                    </View>
                                    <View style={ReceiptsStyle.tab2}>
                                        <Text style={ReceiptsStyle.text2}></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={ReceiptsStyle.btn3} onPress={() => this.props.navigation.push('Setting')}>
                            <Text style={{ color: '#fff', fontSize: 20, marginLeft: 15 }}>收款{'\n'}<Text style={{ fontSize: 15, }}>[回车键]</Text></Text>
                            <Text style={{ color: '#fff', fontSize: 30 }}>￥0.00</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }


    /**
     * 列表item
     * @param {*} rowD 
     * @param {*} sectionID 
     * @param {*} rowID 
     * @param {*} highlightRow 
     */
    _renderRow(rowD, sectionID, rowID, highlightRow) {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: '#ffffff', height: 30, width: this.deviceWidth }}>
                <View style={[ReceiptsStyle.item, { flex: 1.5, borderBottomWidth: rowID == this.state.dataSource.length - 1 ? 0.5 : 0 }]}>
                    <Text>{rowD.k1}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 2, borderBottomWidth: rowID == this.state.dataSource.length - 1 ? 0.5 : 0 }]}>
                    <Text>{rowD.k2}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1, borderBottomWidth: rowID == this.state.dataSource.length - 1 ? 0.5 : 0 }]}>
                    <Text>{rowD.k3}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1, borderBottomWidth: rowID == this.state.dataSource.length - 1 ? 0.5 : 0 }]}>
                    <Text>{rowD.k4}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1, borderBottomWidth: rowID == this.state.dataSource.length - 1 ? 0.5 : 0 }]}>
                    <Text>{rowD.k5}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1, borderBottomWidth: rowID == this.state.dataSource.length - 1 ? 0.5 : 0 }]}>
                    <Text>{rowD.k6}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1, borderBottomWidth: rowID == this.state.dataSource.length - 1 ? 0.5 : 0 }]}>
                    <Text>{rowD.k7}</Text>
                </View>
            </View>
        )
    }
}
