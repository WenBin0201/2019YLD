import React, { Component } from 'react'
import { ScrollView, Text, View, FlatList, TextInput } from 'react-native'
import FormCell from '../../../component/FormCell'
import { COLOR_SECOND_COLOR } from '../../../constant/ColorConstant'
import { WIDTH_RATIO } from '../../../constant/StaticDataDef'
import styles from '../../../style/RukuManageStyles'
import Button from '../../../component/Button'

/**
 * 入库管理
 */

const dataSource: Array = require('../../test/TestData_RuKuManage')  // 测试数据

const headItems: Array = require('./RuKuListHead')
const widths = headItems.map(({ width }) => width)
const bottomTextSize = 14
const radio = 1.3
const btnRadius = 8

export default class PgRuKuManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commodityList: dataSource,  // 列表数据
            inputCode: '',              // 输入条码
            bottomContentWidth: 0       // 底部宽度
        }
    }

    _renderListHead = () => {
        return (
            <View style={styles.headContainer}>
                {headItems.map(({ text, width }) =>
                    <FormCell key={() => text} customStyle={{ width: width * WIDTH_RATIO }}>{text}</FormCell>
                )}
            </View>
        )
    }

    _renderItem({ item, index }) {
        const {
            no, name, barCode, cuNo, type, unit, attribute, purchasePrice, sellPrice,
            wholesalePrice, vipPrice, originStock, stock, produceDate, expiration, supplier
        } = item
        const values = [ no, name, barCode, cuNo, type, unit, attribute, purchasePrice, sellPrice,
            wholesalePrice, vipPrice, originStock, stock, produceDate, expiration, supplier ]
        return (
            <View style={[ styles.headContainer, styles.listItemContainer ]}>
                {values.map((text, index) =>
                    <FormCell key={() => text} customStyle={{ width: widths[ index ] * WIDTH_RATIO }}>{text}</FormCell>
                )}
            </View>
        )
    }

    _renderList = () => {
        return (
            <FlatList
                data={this.state.commodityList}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => `item_${index}`}
            />
        )
    }

    _renderBottomContent = () => {
        return (
            <View style={[ styles.bottomContentContainer, { width: this.state.bottomContentWidth } ]}>
                <View style={styles.bottomLeftContainer}>
                    <TextInput
                        value={this.state.inputCode}
                        placeholder={'请输入条码/拼音码/自编码'}
                        onChangeText={text => this.setState({ inputCode: text })}
                        style={[ styles.codeInput, { height: 27 * radio, width: 145 * radio } ]}
                        placeholderTextColor={'gray'}
                        underlineColorAndroid={'transparent'}
                    />
                    <Button
                        borderRadius={btnRadius}
                        width={85 * radio}
                        height={27 * radio}
                        text={'无码/称重入库'}
                        onPress={this._doCodelessInStorage}
                        backgroundColor={'rgb(244,208,0)'}
                        fontSize={bottomTextSize}
                        style={styles.buttons}
                        color={COLOR_SECOND_COLOR}/>
                    <Button
                        borderRadius={btnRadius}
                        width={67 * radio}
                        height={27 * radio}
                        text={'采购单入库'}
                        style={styles.buttons}
                        onPress={this._doPurchaseInStorage}
                        backgroundColor={COLOR_SECOND_COLOR}
                        fontSize={bottomTextSize}
                        color={'white'}/>
                    <Button
                        borderRadius={btnRadius}
                        width={68 * radio}
                        height={27 * radio}
                        text={'新增商品'}
                        style={styles.buttons}
                        onPress={this._doCreateNewCommodity}
                        backgroundColor={COLOR_SECOND_COLOR}
                        fontSize={bottomTextSize}
                        color={'white'}/>
                </View>
                <View style={styles.bottomRightContainer}>
                    <Button
                        borderRadius={btnRadius}
                        width={50 * radio}
                        height={27 * radio}
                        text={'入库'}
                        style={styles.buttons}
                        onPress={this._doInStorage}
                        backgroundColor={COLOR_SECOND_COLOR}
                        fontSize={bottomTextSize}
                        color={'white'}/>
                    <Button
                        borderRadius={btnRadius}
                        width={50 * radio}
                        height={27 * radio}
                        text={'删除'}
                        style={styles.buttons}
                        onPress={this._doDelete}
                        backgroundColor={'rgb(235,97,0)'}
                        fontSize={bottomTextSize}
                        color={'white'}/>
                    <Button
                        borderRadius={btnRadius}
                        width={50 * radio}
                        height={27 * radio}
                        text={'清空'}
                        style={styles.buttons}
                        onPress={this._doDeleteAll}
                        backgroundColor={'rgb(214,50,0)'}
                        fontSize={bottomTextSize}
                        color={'white'}/>
                </View>
            </View>
        )
    }

    /**
     * 无法入库
     * @private
     */
    _doCodelessInStorage = () => {
    }

    /**
     * 采购案入库
     * @private
     */
    _doPurchaseInStorage = () => {
    }

    /**
     * 新增商品
     * @private
     */
    _doCreateNewCommodity = () => {
    }

    /**
     * 入库
     * @private
     */
    _doInStorage = () => {
    }

    /**
     * 删除
     * @private
     */
    _doDelete = () => {
    }

    /**
     * 清空
     * @private
     */
    _doDeleteAll = () => {
    }

    _onContainerLayoutChanged = ({ nativeEvent: { layout: { width, height } } }) => {
        this.setState({ bottomContentWidth: width })
    }

    render() {
        return (
            <View style={styles.container} onLayout={this._onContainerLayoutChanged}>
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'column' }}>
                        {this._renderListHead()}
                        {this._renderList()}
                    </View>
                </ScrollView>
                {this._renderBottomContent()}
            </View>

        )
    }
}
