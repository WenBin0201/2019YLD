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
import PublicStyle from '../../../style/PublicStyle'
import TabView from '../../../component/TabView/TabView'
import TakeBillBox from '../../../component/takebill/TakeBillBox'
import DialogBox from '../../../component/dialogbox/DialogBox'
import Button from '../../../component/Button'

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
            <View style={PublicStyle.bg}>
                <TabView
                    tabHeads={['商品条码', '商品名称', '原价', '折扣', '数量', '现价', '小计']}
                    tabRowWidth={[1.5, 2, 1, 1, 1, 1, 1]}
                    data={this.state.dataSource}
                    renderItem={this._renderRow}
                />
                <View style={{ backgroundColor: "#fff" }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#f1f1f1', height: 35, alignItems: 'center', justifyContent: 'center', }}>
                        <View style={{ width: 25, height: 25, backgroundColor: '#666666', marginLeft: 15, marginRight: 15 }}>
                        </View>
                        <Text style={[ReceiptsStyle.text2, { flex: 1 }]}>共计  x行 x件商品</Text>
                        <Button text='挂单' backgroundColor='#2b7889' width={60} height={27}
                            onPress={() => {
                                DialogBox.show('系統通知','此处内容可以自定义')
                            }}
                        />
                        <Button  text='取单' style={{ marginLeft: 10 }} backgroundColor='#2b7889' width={60} height={27}
                            onPress={() => {
                                TakeBillBox.show()
                            }}
                        />

                        <Button text='删除' style={{ marginLeft: 10 }} backgroundColor='#2b7889' width={60} height={27}
                            onPress={() => {

                            }}
                        />
                        <Button  text='清空' style={{ marginLeft: 10, marginRight: 15 }} backgroundColor='#f19149'  width={60} height={27}
                            onPress={() => {

                            }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: '#2b7888', alignItems: 'center' }}>
                        <View>
                            <TextInput
                                style={ReceiptsStyle.textIput1}
                                placeholder="请输入条码/拼音码/自编码"
                                placeholderTextColor="#dbdbdb"
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
                                    placeholderTextColor="#dbdbdb"
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
                        <TouchableOpacity style={ReceiptsStyle.btn3} onPress={() => this.props.navigation.push('PgSettle')}>
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
    _renderRow = ({item,index}) => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 30, width: this.deviceWidth }}>
                <View style={[ReceiptsStyle.item, { flex: 1.5}]}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 2,borderLeftWidth:1}]}>
                    <Text>{item.k2}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k3}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k4}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k5}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k6}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k7}</Text>
                </View>
            </View>
        )
    }
}
