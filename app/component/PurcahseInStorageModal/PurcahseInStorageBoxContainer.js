import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet,
    Image,
    CheckBox
} from 'react-native'

import TabView from '../../component/TabView/TabView'
import { COLOR_SECOND_COLOR } from '../../constant/ColorConstant'
import PublicStyle from '../../style/PublicStyle'
import Button from '../../component/Button'

const widths = [ 37, 45, 86, 134, 70, 57, 57, 66 ]

export default class PurcahseInStorageBoxContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {

            dataSource1: [],
            dataSource: []

        }
        this.isRender = true
    }

    componentWillMount() {
        let { height: deviceHeight, width: deviceWidth } = Dimensions.get('window')
        this.deviceHeight = deviceHeight
        this.deviceWidth = deviceWidth
    }

    componentDidMount() {
        this.st = setTimeout(() => {
            if ( this.isRender ){
                this.setState({
                    dataSource1: [ {
                        num: 'CG100000000000002',
                        date: '2012-12-12 15:22:33'
                    }, { num: 'CG100000000000002', date: '2012-12-12 15:22:33' } ],
                    dataSource: [
                        {
                            k0: false,
                            'k1': '1',
                            'k2': '14717942',
                            'k3': '测试商品',
                            k4: '100ml',
                            k5: '20',
                            k6: '150',
                            k7: '150'
                        },
                        {
                            k0: false,
                            'k1': '1',
                            'k2': '14717942',
                            'k3': '测试商品',
                            k4: '100ml',
                            k5: '20',
                            k6: '150',
                            k7: '150'
                        },
                        {
                            k0: false,
                            'k1': '1',
                            'k2': '14717942',
                            'k3': '测试商品',
                            k4: '100ml',
                            k5: '20',
                            k6: '150',
                            k7: '150'
                        },
                        {
                            k0: false,
                            'k1': '1',
                            'k2': '14717942',
                            'k3': '测试商品',
                            k4: '100ml',
                            k5: '20',
                            k6: '150',
                            k7: '150'
                        },
                        {
                            k0: false,
                            'k1': '1',
                            'k2': '14717942',
                            'k3': '测试商品',
                            k4: '100ml',
                            k5: '20',
                            k6: '150',
                            k7: '150'
                        },
                        {
                            k0: false,
                            'k1': '1',
                            'k2': '14717942',
                            'k3': '测试商品',
                            k4: '100ml',
                            k5: '20',
                            k6: '150',
                            k7: '150'
                        },
                        {
                            k0: false,
                            'k1': '1',
                            'k2': '14717942',
                            'k3': '测试商品',
                            k4: '100ml',
                            k5: '20',
                            k6: '150',
                            k7: '150'
                        },
                        {
                            k0: false,
                            'k1': '1',
                            'k2': '14717942',
                            'k3': '测试商品',
                            k4: '100ml',
                            k5: '20',
                            k6: '150',
                            k7: '150'
                        },
                        {
                            k0: false,
                            'k1': '1',
                            'k2': '14717942',
                            'k3': '测试商品',
                            k4: '100ml',
                            k5: '20',
                            k6: '150',
                            k7: '150'
                        }
                    ]
                })
            }
        }, 500)
    }

    componentWillUnmount() {
        this.isRender = false
        this.ts && clearTimeout(this.ts)
    }

    render() {
        return (
            <View
                style={{ width: this.deviceWidth - 200, height: this.deviceHeight - 120, backgroundColor: '#f1F1f1' }}>
                <View style={PublicStyle.view_top}>
                    <Text style={PublicStyle.text_FFF_20}>取单</Text>
                    <TouchableOpacity onPress={() => {
                        if ( this.props.destroy ){
                            this.props.destroy()
                        } else {
                            this.props.navigation.goBack()
                        }
                    }} style={PublicStyle.view_top_right}>
                        <Image source={require('../../image/login/shiftRecord-cross.png')}
                               resizeMode={'contain'}
                               style={{ width: 30, height: 30 }}/>
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
                            <Text style={[ PublicStyle.text_3E8492_14, { marginLeft: 30 } ]}>收银员:</Text>
                            <TextInput
                                style={TakeBiollStyle.inputText}
                                underlineColorAndroid='transparent'
                            />
                            <Text style={[ PublicStyle.text_3E8492_14, { marginLeft: 15 } ]}>总金额:(元)</Text>
                            <TextInput
                                style={TakeBiollStyle.inputText}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <TabView
                            tabHeads={[ '选择框', '序号', '商品条码', '商品名称', '规格', '进价', '数量', '进货额' ]}
                            tabRowWidth={widths}
                            tabHeadTextFontSize={12}
                            data={this.state.dataSource}
                            renderItem={this._renderRow}
                        />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: 65
                        }}>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 13 }}>
                                    <CheckBox/>
                                    <Text style={{ fontSize: 12, color: COLOR_SECOND_COLOR }}>全选</Text>
                                    <CheckBox style={{ marginLeft: 15 }}/>
                                    <Text style={{ fontSize: 12, color: COLOR_SECOND_COLOR }}>反选</Text>
                                </View>
                                <Text style={[ PublicStyle.text_3E8492_16, { marginLeft: 15 } ]}>共计 0行 0件商品</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginRight: 15 }}>
                                <Button text='一键入库' backgroundColor={COLOR_SECOND_COLOR} width={120} height={45}
                                        onPress={() => {

                                        }}
                                />
                                <Button text='清空' style={{ marginLeft: 10 }} backgroundColor='rgb(241,145,73)'
                                        width={80}
                                        height={45}
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
                <View style={{
                    marginLeft: 2,
                    marginRight: 2,
                    marginTop: 1,
                    marginBottom: 1,
                    backgroundColor: '#fff',
                    height: 64,
                    alignItems: 'center',
                    borderRadius: 5,
                    justifyContent: 'center'
                }}>
                    <Text style={[ PublicStyle.text_3E8492_14, { marginLeft: 5, marginRight: 5 } ]}>采购单号：</Text>
                    <Text style={[ PublicStyle.text_3E8492_14, { marginLeft: 5, marginRight: 5 } ]}>{item.num}</Text>
                    <Text
                        style={[ PublicStyle.text_3E8492_12, { marginLeft: 5, marginRight: 5 } ]}>时间：{item.date}</Text>
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
        const { k0, k1, k2, k3, k4, k5, k6, k7 } = item
        return (
            <View style={{ flexDirection: 'row', backgroundColor: index % 2 == 0 ? '#ffffff' : '#fafafa', height: 30 }}>
                <View style={[ PublicStyle.tab_item, { flex: widths[ 0 ] } ]}>
                    <CheckBox value={k0}/>
                </View>
                <View style={[ PublicStyle.tab_item, { flex: widths[ 1 ], borderLeftWidth: 1 } ]}>
                    <Text>{k1}</Text>
                </View>
                <View style={[ PublicStyle.tab_item, { flex: widths[ 2 ], borderLeftWidth: 1 } ]}>
                    <Text>{k2}</Text>
                </View>
                <View style={[ PublicStyle.tab_item, { flex: widths[ 3 ], borderLeftWidth: 1 } ]}>
                    <Text>{k3}</Text>
                </View>
                <View style={[ PublicStyle.tab_item, { flex: widths[ 4 ], borderLeftWidth: 1 } ]}>
                    <Text>{k4}</Text>
                </View>
                <View style={[ PublicStyle.tab_item, { flex: widths[ 5 ], borderLeftWidth: 1 } ]}>
                    <Text>{k5}</Text>
                </View>
                <View style={[ PublicStyle.tab_item, { flex: widths[ 6 ], borderLeftWidth: 1 } ]}>
                    <Text>{k6}</Text>
                </View>
                <View style={[ PublicStyle.tab_item, { flex: widths[ 7 ], borderLeftWidth: 1 } ]}>
                    <Text>{k7}</Text>
                </View>
            </View>
        )
    }
}

const TakeBiollStyle = StyleSheet.create({

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

})
