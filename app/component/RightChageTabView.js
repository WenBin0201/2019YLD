import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native'

import { COLOR_SECOND_COLOR, COLOR_WHITE_COLOR, COLOR_DCDCDC } from '../constant/ColorConstant'
import Button from './Button'

/**
 * 左侧选择器
 *
 * onChageTab
 */
export default class RightChageTabView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0
        }

        this.tabs = this.props.tabs
    }

    render() {
        return (
            <View style={[ lctvStyle.lctv_main, { backgroundColor: COLOR_WHITE_COLOR } ]}>
                <ScrollView>

                    {this.tabs.map((item, i) => {
                        return (
                            <Button
                                key={item}
                                style={lctvStyle.lctv_btn}
                                backgroundColor={this.state.currentPage == i ? '#f4d000' : COLOR_SECOND_COLOR}
                                text={item}
                                fontSize={14}
                                height={30}
                                color ={this.state.currentPage == i ? COLOR_SECOND_COLOR : '#FFF'}
                                width={90}
                                onPress={this._onChageTab.bind(this, i)}/>
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

const lctvStyle = StyleSheet.create({
    lctv_main: {
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        alignItems: 'center',
        width: 100
    },
    lctv_btn: {
        marginTop: 8
    }
})
