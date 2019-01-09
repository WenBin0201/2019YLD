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
        this.btn = ['95折','9折','85折','8折','75折','7折','65折','6折','免单','抹零']
    }

    render() {
        return (
            <View style={{  flex: 1, 
                backgroundColor: '#999999', 
                borderBottomRightRadius:5,
                borderTopRightRadius:5,alignItems: 'center', justifyContent: 'center' }}>
                <Text>整单打折设置</Text>
                <View style={{flexDirection:'row',height:30,width:100,alignItems:'center',backgroundColor:'#FFF'}}>
                    <TextInput placeholder={'输入折扣'} style={{flex:1,paddingTop:0,paddingBottom:0}}>

                    </TextInput>
                    <Text style={{marginLeft:10}}>
                        %
                    </Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:15,marginRight:15,flexWrap:'wrap'}}>
                    {this.btn.map((item,i)=>{
                        return(
                            <Button text = {item} height={25} width={46} style={{marginLeft:i%2 !=0?8:0,marginTop: 10,}}
                            
                            />
                        )
                    })}
                </View>
            </View>
        )
    }
}