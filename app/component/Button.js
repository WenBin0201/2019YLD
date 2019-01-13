import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';

import { COLOR_SECOND_COLOR,COLOR_WHITE_COLOR,COLOR_F1F1F1} from '../constant/ColorConstant';
/**
 * 按鈕
 */
export default class Button extends Component {

    static defaultProps = {
        backgroundColor: COLOR_SECOND_COLOR,
        borderRadius: 3,
        height:25,
        color: COLOR_WHITE_COLOR,
        fontSize: 14,
        disabled: false
    }



    constructor(props) {
        super(props)
      
    }

    componentWillReceiveProps(nextProps){
      
    }

    render() {
        return (
            <TouchableOpacity
                disabled={this.props.disabled}
                style={[{
                    height: this.props.height,
                    backgroundColor: this.props.disabled?COLOR_F1F1F1:this.props.backgroundColor,
                    borderRadius: this.props.borderRadius,
                    alignItems:'center',
                    justifyContent:'center',
                    width:this.props.width
                   
                },this.props.style]}
                onPress = {()=>{
                    if(this.props.onPress){
                        this.props.onPress();
                    }
                }}
            >
                <Text style={{
                    fontSize: this.props.fontSize,
                    color: this.props.color
                }}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>)
    }
}