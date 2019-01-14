import React, { Component } from 'react'
import { Text, View, TextInput, FlatList } from 'react-native'
import { WIDTH_RATIO } from '../../../constant/StaticDataDef'
import styles from '../../../style/PgPanDianStyle'
import Button from '../../../component/Button'
import FormCell from '../../../component/FormCell'

/**
 * 盘点
 */

const testDataSource = require('../../test/TestData_PanDian')

const buttonTextSize = 16
const listHeadItems: Array = require('./PgPanDianListHead')
const widths = listHeadItems.map(({ text, width }) => width)

export default class PgPanDian extends Component {

    _renderHeadButtons = () => {
        return (
            <View style={styles.buttonsContainer}>
                <View style={styles.leftButtonContainer}>
                    <Button
                        text={'全库盘点'}
                        width={80 * WIDTH_RATIO}
                        height={27 * WIDTH_RATIO}
                        onPress={() => {
                        }}
                        fontSize={buttonTextSize}
                        backgroundColor={'rgb(235,97,0)'}/>
                    <Button
                        text={'抽样盘点'}
                        width={80 * WIDTH_RATIO}
                        height={27 * WIDTH_RATIO}
                        onPress={() => {
                        }}
                        fontSize={buttonTextSize}
                        style={{ marginLeft: 7 * WIDTH_RATIO }}
                        backgroundColor={'rgb(235,97,0)'}/>
                    <Text style={styles.noticeText}>!</Text>
                    <Text style={styles.tintText} onPress={f => f}>
                        查看帮助提示
                    </Text>
                </View>
                <Button
                    text={'盘点历史'}
                    width={80 * WIDTH_RATIO}
                    height={27 * WIDTH_RATIO}
                    fontSize={buttonTextSize}
                    onPress={() => {
                    }}
                    backgroundColor={'rgb(235,97,0)'}/>
            </View>
        )
    }

    _renderListHead = () => {
        const heads = listHeadItems.map(({ text, width }) => (
            <FormCell
                key={() => text}
                customStyle={{ flex: width, ...styles.headItem }}
            >{text}</FormCell>
        ))
        return (
            <View style={styles.headContainer}>
                {heads}
            </View>
        )
    }

    _renderItem({ item }) {
        const { key1, key2, key3, key4, key5, key6, key7, key8, key9 } = item
        const values = [ key1, key2, key3, key4, key5, key6, key7, key8, key9 ]
        const items = values.map((text, index) => (
            <FormCell
                key={() => text}
                customStyle={{ flex: widths[ index ], ...styles.listItem }}
            >{text}</FormCell>
        ))
        return (
            <View style={[ styles.headContainer, styles.listItemContainer ]}>
                {items}
            </View>
        )
    }

    _renderList = () => {
        return (
            <FlatList
                style={styles.list}
                data={testDataSource}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => `item_${index}`}/>
        )
    }

    _renderBottomTotal = () => {
        return (
            <Text style={styles.bottomTotalText}>商品总售价:0.00,总进货价:0.00,（原始库存数0.00,已盘库存数:0.00,差异库存数:0.00）</Text>
        )
    }

    _renderContent = () => {
        return (
            <View style={styles.contentContainer}>
                {this._renderListHead()}
                {this._renderList()}
                {this._renderBottomTotal()}
            </View>
        )
    }

    _renderBottomContent = () => {
        return (
            <View style={styles.bottomContainer}>
                <View style={styles.bottomLeftContainer}>
                    <TextInput
                        placeholderTextColor={'rgb(158,158,158)'}
                        style={styles.barCodeInput}
                        underlineColorAndroid={'transparent'}
                        placeholder={'输入条码/拼音码/自编码'}/>
                    <Text style={[ styles.bottomText, { width: 68 * WIDTH_RATIO } ]}>总数：1500</Text>
                    <Text style={[ styles.bottomText, { width: 58 * WIDTH_RATIO } ]}>已盘：1</Text>
                    <Text style={[ styles.bottomText, { width: 58 * WIDTH_RATIO } ]}>未盘：1499</Text>
                </View>
                <Button width={123 * WIDTH_RATIO} borderRadius={6} height={45 * WIDTH_RATIO} text={'提交库存'}
                        backgroundColor={'red'}
                        style={styles.rightBtn} fontSize={24}/>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderHeadButtons()}
                {this._renderContent()}
                {this._renderBottomContent()}
            </View>
        )
    }
}
