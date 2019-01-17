import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_WHITE_COLOR, COLOR_SECOND_COLOR, COLOR_3E8492, COLOR_F19149, COLOR_EAEAEA, COLOR_GRAY_9E9E9E } from '../constant/ColorConstant';
/**
 * 公用的样式属性
 */
export const PublicStyle = StyleSheet.create({


    text_FFF_12: {
        color: COLOR_WHITE_COLOR,
        fontSize: 12
    },
    text_FFF_13: {
        color: COLOR_WHITE_COLOR,
        fontSize: 13
    },
    text_FFF_14: {
        color: COLOR_WHITE_COLOR,
        fontSize: 14
    },
    text_FFF_15: {
        color: COLOR_WHITE_COLOR,
        fontSize: 15
    },
    text_FFF_16: {
        color: COLOR_WHITE_COLOR,
        fontSize: 16
    },
    text_FFF_17: {
        color: COLOR_WHITE_COLOR,
        fontSize: 17
    },
    text_FFF_20: {
        fontSize: 20,
        color: COLOR_WHITE_COLOR
    },
    text_FFF_25: {
        fontSize: 25,
        color: COLOR_WHITE_COLOR
    },
    text_FFF_30: {
        fontSize: 30,
        color: COLOR_WHITE_COLOR
    },
    text_FFF_35: {
        fontSize: 35,
        color: COLOR_WHITE_COLOR
    },
    text_FFF_52: {
        fontSize: 52,
        color: COLOR_WHITE_COLOR
    },

    text_3E8492_16: {
        fontSize: 16,
        color: COLOR_3E8492
    },

    text_3E8492_14: {
        fontSize: 14,
        color: COLOR_3E8492
    },
    text_3E8492_12: {
        fontSize: 12,
        color: COLOR_3E8492
    },
    text_2B7888_14: {
        fontSize: 14,
        color: COLOR_SECOND_COLOR

    },
    text_2B7888_12: {
        fontSize: 12,
        color: COLOR_SECOND_COLOR

    },
    text_2B7888_16: {
        fontSize: 16,
        color: COLOR_SECOND_COLOR

    },
    text_9E9E9E_10: {
        fontSize: 10,
        color: COLOR_GRAY_9E9E9E
    },
    text_9E9E9E_12: {
        fontSize: 12,
        color: COLOR_GRAY_9E9E9E
    },
    text_9E9E9E_14: {
        fontSize: 14,
        color: COLOR_GRAY_9E9E9E
    },
    text_E74C39_18:{
        fontSize: 18, 
        color: '#e74c39' 

    },
    text_2b7888_18:{
        fontSize: 18, 
        color: '#2b7888'

    },

    text_333333_16: {
        fontSize: 16,
        color: '#333333'

    },

    box_main: {
        backgroundColor: COLOR_WHITE_COLOR,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    btn_27: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        width: 65,
        borderRadius: 5,
        backgroundColor: COLOR_F19149
    },
    tab_item: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLOR_EAEAEA,
    },
    ajcjf: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    bg: {
        flex: 1,
        backgroundColor: '#f1F1f1'
    },

    navigator: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        backgroundColor: '#2b7888'
    },
    navigator_left: {
        position: 'absolute',
        left: 0,
        width: 65,
        height: 65,
        borderColor: '#165562',
        borderRightWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigator_right_cancel: {
        position: 'absolute',
        right: 0,
        width: 65,
        height: 65,
        borderColor: '#ffffff',
        borderLeftWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigator_right: {
        position: 'absolute',
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 7,
    },
    navigator_icon: {
        width: 73,
        height: 45,
    },

    view_top: {
        height: 50,
        backgroundColor: '#3e8492',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view_top_right: {
        borderColor: '#FFF',
        borderLeftWidth: 1,
        height: 50,
        width: 50,
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tab_defalut_item: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#EAEAEA',
    }
});
module.exports = PublicStyle;