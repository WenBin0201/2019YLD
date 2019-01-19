import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Animated,
    Easing
} from 'react-native';

import Button from '../Button';
/**
 * 折扣弹窗  此处样式待调整
 */
export default class DiscountView extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        this.btn = ['95折', '9折', '85折', '8折', '75折', '7折', '65折', '6折', '免单', '抹零']
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#a3c6d4',
                borderBottomRightRadius: 5,
                alignItems: 'center', justifyContent: 'center'
            }}>
                <Text style={{ fontSize: 14, color: '#fff' }}>整单打折设置</Text>
                <View style={{ flexDirection: 'row', height: 25, width: 100, alignItems: 'center', backgroundColor: '#FFF', borderRadius: 3, marginTop: 5 }}>
                    <TextInput placeholder={'输入折扣'} placeholderTextColor={'#dbdbdb'} style={{ flex: 1, paddingTop: 0, paddingBottom: 0, fontSize: 12 }}>

                    </TextInput>
                    <Text style={{ marginLeft: 5,marginRight:5 }}>
                        %
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, flexWrap: 'wrap' }}>
                    {this.btn.map((item, i) => {
                        return (
                            <Button key={i} borderRadius={3} text={item} height={25} width={46} style={{ marginLeft: i % 2 != 0 ? 8 : 0, marginTop: 10, backgroundColor: i == this.btn.length - 1 ? '#f19149' : '#2b7888' }}
                                onPress={() => {
                                    this.props.onPress(item);
                                }}
                            />
                        )
                    })}
                </View>
            </View>
        )
    }
}