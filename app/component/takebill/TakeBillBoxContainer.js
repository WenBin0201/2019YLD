import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet,
    Image

} from 'react-native';

import TabView from '../../component/TabView/TabView'
import PulicStyle from '../../style/PublicStyle'
import Button from '../../component/Button'

export default class TakeBillBoxContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {

            dataSource1: [],
            dataSource: [],
           
        };
        this.isRender = true
    }

    componentWillMount() {
        let { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
        this.deviceHeight = deviceHeight;
        this.deviceWidth = deviceWidth;
    }

    componentDidMount() {
        this.st = setTimeout(() => {
            if (this.isRender) {
                this.setState({
                    dataSource1: [{ num: '123456789', date: '2012-12-12 15:22:33' }, { num: '123456789', date: '2012-12-12 15:22:33' }],
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
                })
            }
        }, 500)
    }

    componentWillUnmount() {
        this.isRender = false;
        this.ts && clearTimeout(this.ts)
    }

    render() {
        return (
            <View style={{ width: this.deviceWidth - 200, height: this.deviceHeight - 120, backgroundColor: '#FFFFFF' }}>
                <View style={TakeBiollStyle.view_top}>
                    <Text style={{ fontSize: 25, color: '#fff' }}>取单</Text>
                    <TouchableOpacity onPress={() => {
                        if (this.props.destroy) {
                            this.props.destroy();
                        } else {
                            this.props.navigation.goBack()
                        }
                    }} style={TakeBiollStyle.view_top_right}>
                          <Image source={require('../../image/login/shiftRecord-cross.png')}
                            resizeMode={'contain'}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ backgroundColor: '#a3c6d4' }}>
                        <FlatList
                            style={{ flex: 1, marginTop: 1 }}
                            keyExtractor={(item, index) => `${item}_${index}`}
                            data={this.state.dataSource1}
                            renderItem={this._renderRow1}
                        >
                        </FlatList>
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
                            data={this.state.dataSource}
                            renderItem={this._renderRow}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 35 }}>
                            <Text style={[PulicStyle.text_3E8492_14, { marginLeft: 15 }]}>共计 0行 0件商品</Text>
                            <View style={{ flexDirection: 'row', marginRight: 15 }}>
                                <Button text='取单' backgroundColor='#f19149' width={60} height={27}
                                    onPress={() => {

                                    }}
                                />
                                <Button text='清空' style={{ marginLeft: 10 }} backgroundColor='#f19149' width={60} height={27}
                                    onPress={() => {

                                    }}
                                />
                                <Button text='删除' style={{ marginLeft: 10 }} backgroundColor='#f19149' width={60} height={27}
                                    onPress={() => {

                                    }}
                                />
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
    _renderRow1 = ({ item, index }) => {
        return (
            <TouchableOpacity>
                <View style={{ marginLeft: 2, marginRight: 2, marginTop: 1, marginBottom: 1, backgroundColor: '#fff', height: 50, borderRadius: 5, justifyContent: 'center' }}>
                    <Text style={[PulicStyle.text_3E8492_14, { marginLeft: 5, marginRight: 5 }]}>单号：{item.num}</Text>
                    <Text style={[PulicStyle.text_3E8492_12, { marginLeft: 5, marginRight: 5 }]}>时间：{item.date}</Text>
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
    _renderRow = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: index % 2 == 0 ? '#ffffff' : '#fafafa', height: 30 }}>
                <View style={[PulicStyle.tab_item, { flex: 1, }]}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={[PulicStyle.tab_item, { flex: 1, borderLeftWidth: 1 }]}>
                    <Text>{item.k2}</Text>
                </View>
                <View style={[PulicStyle.tab_item, { flex: 1, borderLeftWidth: 1 }]}>
                    <Text>{item.k3}</Text>
                </View>
            </View>
        )
    }
}

const TakeBiollStyle = StyleSheet.create({

    view_top: {
        height: 50,
        backgroundColor: '#3e8492',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view_top_right: {
        borderColor: '#FFF',
        borderLeftWidth: 2,
        height: 50,
        width: 45,
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputText: {
        marginLeft: 5,
        paddingBottom: 0,
        paddingTop: 0,
        height: 25,
        width: 121,
        borderRadius: 3,
        borderColor: '#2b7888',
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
    }


});