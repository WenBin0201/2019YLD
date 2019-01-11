import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import { COLOR_SECOND_COLOR, COLOR_F19149, COLOR_DCDCDC } from '../constant/ColorConstant'
import Button from './Button'
/**
 * 左侧选择器
 * 
 * onChageTab
 */
export default class LeftChageTabView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0
        }

        this.tabs = this.props.tabs;
    }

    render() {
        return (
            <View style={[lctvStyle.lctv_main,{backgroundColor: COLOR_DCDCDC}]}>
                <ScrollView>

                    {this.tabs.map((item, i) => {
                        return (
                            <Button
                                style={lctvStyle.lctv_btn}
                                backgroundColor={this.state.currentPage == i ? COLOR_F19149 : COLOR_SECOND_COLOR}
                                text={item}
                                fontSize={16}
                                height={52}
                                width={142}
                                onPress={this._onChageTab.bind(this, i)} />
                        )
                    })}
                </ScrollView>

            </View>
        )
    }

    _onChageTab(i) {
        this.setState({
            currentPage: i
        }, () => {
            this.props.onChangeTab && this.props.onChangeTab(i)
        })

    }

}

const lctvStyle  = StyleSheet.create({
    lctv_main :{
        paddingBottom: 5, 
        paddingLeft: 2, 
        paddingRight: 2, 
        alignItems: 'center',
        width: 146, 
    },
    lctv_btn :{
        marginTop: 5 
    }
})