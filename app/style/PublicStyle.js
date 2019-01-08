import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_GRAY_F3F3F3, COLOR_WHITE_COLOR, COLOR_SECOND_COLOR } from '../constant/ColorConstant';
/**
 * 公用的样式属性
 */
export const PulicStyle = StyleSheet.create({
    text_FFF_16: {
        color: '#fff',
        fontSize: 16
    },
    text_FFF_14: {
        color: '#fff',
        fontSize: 14
    },

    text_3E8492_16: {
        fontSize: 16,
        color: '#3e8492'
    },

    text_3E8492_14: {
        fontSize: 14,
        color: '#3e8492'
    },
    text_3E8492_12: {
        fontSize: 12,
        color: '#3e8492'
    },
    box_main: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    btn_27:{
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 25, 
        width: 65, 
        borderRadius: 5, 
        backgroundColor: '#f19149' 
    },
    tab_item:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#EAEAEA',
    }
    
});
module.exports = PulicStyle;