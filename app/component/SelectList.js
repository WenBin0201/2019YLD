import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { COLOR_SECOND_COLOR,COLOR_WHITE_COLOR,COLOR_F1F1F1} from '../constant/ColorConstant';
/**
 * 按鈕
 */
export default class SelectList extends Component {


    constructor(props) {
        super(props)
      
        this.ff = [1,2,3,4,5,6,7,8,9,10]
    }

    render(){
        return(
            <View style = {{width:200,height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#ffff00'}}>
                <Text>12333</Text>
            </View>
        )
    }

}