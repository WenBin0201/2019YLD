import React, { Component } from 'react';
import { Button, Text, View ,TouchableOpacity,TextInput} from 'react-native';

/**
 * 新商盟
 */
export default class PgNewBN extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
      }
    render() {
        return (
            <View style={{flex:1}}>
            <View style={{flexDirection:'row',flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity style={{backgroundColor:'#2B7888',padding:5,margin:5}}><Text style={{color:'#fff'}}>卷烟订货</Text></TouchableOpacity>                    
                <View style={{flexDirection:'row',height:50,justifyContent: 'space-between', alignItems: 'center' }}>
                    <View><TextInput
                        placeholder='请输入新商盟订单号码'
                        style={{height: 30, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                    /></View>
                    <TouchableOpacity style={{backgroundColor:'#2B7888',padding:5,margin:5}}><Text style={{color:'#fff'}}>卷烟订单</Text></TouchableOpacity>                    
                </View>
            </View>
            <View style={{borderWidth:1,borderColor:'#2B7888',flex:15}}></View>
            </View>
        );
    }
}