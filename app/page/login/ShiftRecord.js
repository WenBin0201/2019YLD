/**
 * 交接班记录
 * */

import React from 'react'
import commonStyle from '../../style/CommonStyle'
import { Image, View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import styles from '../../style/ShiftRecordStyle'
import Button from '../../component/Button'

/**
 * 测试数据
 */
const testData = require('../test/TestData_ShiftRecord')

class ShiftRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cashierAccount: '',    // 收银员账号
            cashierPassword: '',   // 收银员密码
            cashData: testData           // 收银信息列表
        }
    }

    /**
     * 渲染头
     * @returns {*}
     * @private
     */
    _renderHead = () => {
        return (
            <View style={[ commonStyle.logoFrame, styles.headContainer ]}>
                <Image source={require('../../image/login/shiftRecord-text.png')} style={styles.headTextImage}
                       resizeMode={'contain'}/>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.pop()
                    }}
                    style={[ styles.headRightContainer ]}>
                    <View style={styles.headRightDivision}/>
                    <Image source={require('../../image/login/shiftRecord-cross.png')}
                           resizeMode={'contain'}
                           style={styles.headRightCrossImage}/>
                </TouchableOpacity>
            </View>
        )
    }

    /**
     * 渲染收营员账号、密码、查询
     * @returns {*}
     * @private
     */
    _renderCashierQuery = () => {
        return (
            <View style={styles.cashierContainer}>
                <View style={styles.cashierAccountContainer}>
                    <Text style={styles.cashierLeftText}>收银员账号</Text>
                    <TextInput
                        style={styles.cashierInput}
                        value={this.state.cashierAccount}
                        onChangeText={text => this.setState({ cashierAccount: text })}/>
                </View>
                <View style={styles.cashierAccountContainer}>
                    <Text style={styles.cashierLeftText}>收银员密码</Text>
                    <TextInput
                        style={styles.cashierInput}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        value={this.state.cashierPassword}
                        onChangeText={text => this.setState({ cashierPassword: text })}/>
                </View>
                <Button text='查询' fontSize={16} color={'white'} width={50} onPress={this._doQuery}/>
            </View>
        )
    }

    /**
     * 渲染列表头
     * @returns {*}
     * @private
     */
    _renderListHead = () => (
        <View style={styles.listHeadContainer}>
            <Text style={styles.listHeadLeftText}>登录时间</Text>
            <Text style={styles.listHeadMiddleText}>登出时间</Text>
            <Text style={styles.listHeadRightText}>销售金额</Text>
        </View>
    )

    /**
     * 渲染列表
     * @returns {*}
     * @private
     */
    _renderList = () =>
        <FlatList
            style={{ backgroundColor: 'white', marginTop: 15 }}
            data={this.state.cashData}
            renderItem={this._renderListItem}
            keyExtractor={(item, index) => `${item}_${index}`}
            ItemSeparatorComponent={this._renderSeparator}
            ListHeaderComponent={this._renderSeparator}
            ListFooterComponent={this._renderSeparator}
        />

    _renderSeparator = () => ( <View style={styles.listItemSeparatorView}/> )

    _renderListItem = ({ item = {} }, index) => {
        const { startTime, endTime, money = 0 } = item
        return (
            <View style={[ styles.listHeadContainer, { backgroundColor: 'white' } ]}>
                <Text
                    style={[ styles.listHeadLeftText, styles.listItemExtraStyle ]}>{startTime}</Text>
                <Text
                    style={[ styles.listHeadMiddleText, styles.listItemExtraStyle ]}>{endTime}</Text>
                <Text
                    style={[ styles.listHeadRightText, styles.listItemExtraStyle ]}>{money}</Text>
            </View>
        )
    }

    /**
     * 收银员查询
     * @private
     */
    _doQuery = () => {

    }

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                {this._renderHead()}
                {this._renderCashierQuery()}
                {this._renderListHead()}
                {this._renderList()}
            </View>
        )
    }
}

export default ShiftRecord
