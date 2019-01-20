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
                <Text style={{ fontSize: 21, color: '#fff' }}>整单打折设置</Text>
                <View style={{ flexDirection: 'row', height: 40, width: 151, alignItems: 'center', backgroundColor: '#FFF', borderRadius: 6, marginTop: 20 }}>
                    <TextInput placeholder={'输入折扣'} placeholderTextColor={'#dbdbdb'} style={{ flex: 1, paddingTop: 0, paddingBottom: 0, fontSize: 18 }}>

                    </TextInput>
                    <Text style={{ marginLeft: 5,marginRight:5 ,fontSize: 25,color: "#2b7889"}}>
                        %
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20,marginTop:10, flexWrap: 'wrap' }}>
                    {this.btn.map((item, i) => {
                        return (
                            <Button key={i} fontSize={14} borderRadius={3} text={item} height={35} width={71} style={{ marginLeft: i % 2 != 0 ? 10 : 0, marginTop: 15, backgroundColor: i == this.btn.length - 1 ? '#f19149' : '#2b7888' }}
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