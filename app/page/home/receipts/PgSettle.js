import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import Button from '../../../component/Button'
/**
 * 结算
 */

export default class PgSettle extends Component {

    constructor(props) {
        super(props)

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {


        return (
            <View style={{ flex: 1 }}>
                {/* 导航栏 可做封装;;;;*/}
                <View style={SettleStyle.view_top}>
                    <Text style={{ fontSize: 35, color: '#fff' }}>收款</Text>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack();
                    }} style={SettleStyle.view_top_right}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>关闭</Text>
                    </TouchableOpacity>
                </View>

                <Button
                    backgroundColor='#f19149'
                    width={60}
                    height={27}
                    text='总额'
                    onPress={() => {

                    }}
                />
                 <Button
                    backgroundColor='#2b7889'
                    width={60}
                    height={27}
                    text='现金'
                    onPress={() => {

                    }}
                />
                <Button
                    backgroundColor='#8fc31f'
                    width={60}
                    height={27}
                    text='现金'
                    onPress={() => {

                    }}
                />
            </View>
        )
    }
}

const SettleStyle = StyleSheet.create({
    view_top: {
        height: 60,
        backgroundColor: '#3e8492',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view_top_right: {
        borderColor: '#FFF',
        borderLeftWidth: 2,
        height: 50,
        width: 60,
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

