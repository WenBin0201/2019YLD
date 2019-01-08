import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Animated,
    Easing
} from 'react-native';

import Button from '../../../component/Button'
import SelectList from '../../../component/SelectList'
/**
 * 结算
 */

export default class PgSettle extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            isXpjz: false,
            isleft: true,
            left:new Animated.Value(-133),
        }
        this.isCose = true;
        this.num = ['1', '2', '3', '50', '4', '5', '6', '100', '7', '8', '9', '200', '0', '00', '.', '500']

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    _moveLeft(){
        if(this.isCose){
            this.state.left.setValue(-133);
            Animated.timing(this.state.left, {
                toValue: 0,
                duration: 500,
                easing: Easing.linear,
            }).start(()=>{
                this.isCose  = false
            });
        }else{
            this.state.left.setValue(0);
            Animated.timing(this.state.left, {
                toValue: -133,
                duration: 500,
                easing: Easing.linear,
            }).start(()=>{
                this.isCose  = true
            });
        }
        
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
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <View style={{ flexDirection: 'row', marginTop: 10, width: 400, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            backgroundColor='#f19149'
                            width={60}
                            height={27}
                            text='总额' />
                        <TextInput
                            underlineColorAndroid='transparent'
                            style={{ flex: 1, marginLeft: 10, borderColor: '#2b7889', alignItems: 'center', borderRadius: 5, borderWidth: 1, paddingTop: 0, paddingBottom: 0 }} />
                        <View style={{ width: 30, height: 30, marginLeft: 10, marginRight: 10, backgroundColor: '#666666' }}>

                        </View>
                        <Button
                            backgroundColor='#2b7889'
                            width={80}
                            height={40}
                            text='现金' />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, width: 400, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            backgroundColor='#2b7889'
                            width={60}
                            height={27}
                            text='现金'
                            onPress={() => {

                            }}
                        />
                        <TextInput
                            underlineColorAndroid='transparent'
                            style={{ flex: 1, borderColor: '#2b7889', marginLeft: 10, alignItems: 'center', borderRadius: 5, borderWidth: 1, paddingTop: 0, paddingBottom: 0 }} />
                        <View style={{ width: 30, height: 30, marginLeft: 10, marginRight: 10, backgroundColor: '#666666' }}>

                        </View>
                        <Button
                            backgroundColor='#2b7889'
                            width={80}
                            height={40}
                            text='刷卡' />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, width: 400, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            backgroundColor='#8fc31f'
                            width={60}
                            height={27}
                            text='找零'
                            onPress={() => {

                            }}
                        />
                        <TextInput
                            underlineColorAndroid='transparent'
                            style={{ flex: 1, borderColor: '#2b7889', marginLeft: 10, alignItems: 'center', borderRadius: 5, borderWidth: 1, paddingTop: 0, paddingBottom: 0 }} />
                        <View style={{ width: 30, height: 30, marginLeft: 10, marginRight: 10, backgroundColor: '#666666' }}>

                        </View>
                        <Button
                            backgroundColor='#2b7889'
                            width={80}
                            height={40}
                            text='扫码' />
                    </View>
                    <View style={{ flexDirection: 'row', width: 400, marginTop: 20 }}>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                            {this.num.map((item, i) => {
                                return (<Button
                                    style={{ margin: 5 }}
                                    backgroundColor='#2b7889'
                                    width={350 / 5}
                                    height={40}
                                    text={item} />)
                            })}
                        </View>
                        <View style={{ width: 80 }}>
                            <Button
                                style={{ marginTop: 5 }}
                                backgroundColor='#2b7889'
                                height={40}
                                text='删除'
                            />
                            <Button
                                style={{ marginTop: 10 }}
                                backgroundColor='#2b7889'
                                height={140}
                                text='确认'
                            />
                        </View>
                    </View>

                    <Animated.View  style={{
                            width: 163, height:250, borderColor: '#2b7889',
                            position: 'absolute', left: this.state.left, top: 40,
                            flexDirection:'row'
                        }}>
                        <View style={{flex:1,backgroundColor:'#999999', borderRadius: 5,}}></View>
                        <TouchableOpacity
                        onPress={() => {
                           this. _moveLeft();
                        }}
                        style={{
                            width: 33, height: 80, borderColor: '#2b7889',
                          borderRadius: 5,
                            backgroundColor: '#f4d000',justifyContent:'center',alignItems:'center'

                        }}>
                        <Text style={{ fontSize: 25, color: '#fff' }}>折{'\n'}扣</Text>


                    </TouchableOpacity>
                    </Animated.View>

                   
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ isXpjz: !this.state.isXpjz })
                        }}
                        style={{
                            width: 160, height: 48, borderColor: '#2b7889',
                            position: 'absolute', right: 35, top: 40, borderRadius: 5,
                            backgroundColor: '#f1f1f1', borderWidth: 1,
                            flexDirection: 'row', justifyContent: this.state.isXpjz ? 'flex-end' : 'flex-start'

                        }}>
                        <View style={{ backgroundColor: this.state.isXpjz ? '#ec6941' : '#666666', paddingLeft: 8, paddingRight: 8, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 12, color: '#fff' }}>{this.state.isXpjz ? '打小票结账' : '不打小票结账'}</Text>
                        </View>

                    </TouchableOpacity>

                </View>
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

