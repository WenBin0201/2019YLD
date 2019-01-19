import React, { Component } from 'react';
import { Text, Modal, ActivityIndicator, View, Dimensions, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import Button from '../../../component/Button'
import { WIDTH_RATIO } from '../../../constant/StaticDataDef'
import CommManaStyle from '../../../style/CommManaStyle'
import PublicStyle from '../../../style/PublicStyle'
import FormCell from '../../../component/FormCell'
import styles from '../../../style/RukuManageStyles'

/**
 * 商品管理
 */
const dataSource: Array = require('../../test/TestData_CommManage')  // 测试数据
const headItems: Array = require('./CommManage')
const widths = headItems.map(({ width }) => width)

export default class PgCommodityManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            commodityList: [],
        }
    }

    componentWillMount() {
        let { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
        this.deviceHeight = deviceHeight;
        this.deviceWidth = deviceWidth;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ commodityList: dataSource })
        }, 1000)
    }

    render() {
        return (
            <View style={CommManaStyle.CommManaStyle_main}>
                <View style={CommManaStyle.CommManaStyle_view1}>
                        {this._renderTypeSelect('一级分类', () => {
                        })}
                        {this._renderTypeSelect('二级分类', () => {
                        })}
                        {this._renderTypeSelect('三级分类', () => {
                        })}
                    <TextInput underlineColorAndroid='transparent' placeholder='条码/拼音码/自编码' placeholderTextColor='#dbdbdb' style={CommManaStyle.CommManaStyle_input} />
                    <View style={CommManaStyle.CommManaStyle_view5}>
                        <Button width={60} height={30} backgroundColor='#eb6100' text='查询' style={{ marginLeft: 5, }} />
                        <Button width={120} height={30} backgroundColor='#f4d000' text='获取修改权限验证码' fontSize={10} color='#2b7888' style={{ marginLeft: 5, }} />
                    </View>
                    <Button width={100} height={30} backgroundColor='#eb6100' text='导出EXCEL至邮箱' fontSize={12} />
                </View>

                {this.state.commodityList.length == 0 ?
                    <View style={PublicStyle.ajcjf}>
                        <ActivityIndicator size="small" color="#0000ff" />
                    </View>
                    :
                    <ScrollView horizontal={true}>
                        <View style={{ flex: 1 }}>
                            {this._renderListHead()}
                            {this._renderList()}
                        </View>
                    </ScrollView>
                }

                <View style={CommManaStyle.CommManaStyle_view3}>
                    <Text style={CommManaStyle.CommManaStyle_text}>共700种商品，建议采购量：00000.00，库存总进价：00000.00，库存总售价：00000.00 </Text>
                    <View style={CommManaStyle.CommManaStyle_view4}>
                        <Text style={CommManaStyle.CommManaStyle_text}>共100页</Text>
                        <Button width={60} height={30} text='首页' style={{ marginLeft: 5, }} />
                        <Button width={60} height={30} text='上页' style={{ marginLeft: 5, }} />
                        <TextInput underlineColorAndroid='transparent' style={CommManaStyle.CommManaStyle_input1} />
                        <Button width={60} height={30} text='下页' style={{ marginLeft: 5, }} />
                        <Button width={60} height={30} backgroundColor='#d63200' text='尾页' style={{ marginLeft: 5, marginRight: 10 }} />

                    </View>
                </View>
            </View>
        );
    }

    /**
     * 下拉列表
     */
    _renderTypeSelect = (str, onPress) => {
        return (
            <TouchableOpacity style={CommManaStyle.CommManaStyle_to} onPress={onPress}>
                <View style={PublicStyle.ajcjf}>
                    <Text style={PublicStyle.text_9E9E9E_12}>{str}</Text>
                </View>
                <View style={CommManaStyle.CommManaStyle_view2}>
                    <Text style={PublicStyle.text_2B7888_12}>▼</Text>
                </View>
            </TouchableOpacity>

        )
    }

    /**
     * 表格头部
     */
    _renderListHead = () => {
        return (
            <View style={[styles.headContainer, { marginTop: 0 },]}>
                {headItems.map(({ text, width }) =>
                    <FormCell key={() => text} customStyle={{ width: width * WIDTH_RATIO }}>{text}</FormCell>
                )}
            </View>
        )
    }

    /**
     * 表格数据
     */
    _renderList = () => {
        return (
            <FlatList
                style={{ flex: 1 }}
                data={this.state.commodityList}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => `item_${index}`}
            />
        )
    }

    _renderItem({ item, index }) {
        const {
            key1, key2, key3, key4, key5, key6, key7, key8, key9,
            key10, key11, key12, key13, key14, key15, key16, key17, key18, key19, key20
        } = item
        const values = [key1, key2, key3, key4, key5, key6, key7, key8, key9,
            key10, key11, key12, key13, key14, key15, key16, key17, key18, key19, key20]
        return (
            <View style={[styles.headContainer, styles.listItemContainer]}>
                {values.map((text, index) =>
                    <FormCell key={() => text} customStyle={{ width: widths[index] * WIDTH_RATIO }}>{text}</FormCell>
                )}
            </View>
        )
    }
}