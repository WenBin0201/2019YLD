import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_WHITE_COLOR,COLOR_3E8492,COLOR_F19149,COLOR_EAEAEA } from '../constant/ColorConstant';
/**
 * 公用的样式属性
 */
export const PulicStyle = StyleSheet.create({
  
   
    text_FFF_12: {
        color: COLOR_WHITE_COLOR,
        fontSize: 12
    },
    text_FFF_14: {
        color: COLOR_WHITE_COLOR,
        fontSize: 14
    },
    text_FFF_16: {
        color: COLOR_WHITE_COLOR,
        fontSize: 16
    },
    text_FFF_20:{
        fontSize: 20, 
        color: COLOR_WHITE_COLOR 
    },
    text_FFF_25:{
        fontSize: 25, 
        color: COLOR_WHITE_COLOR
    },
    text_FFF_35:{
        fontSize: 35, 
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
    box_main: {
        backgroundColor: COLOR_WHITE_COLOR,
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
        backgroundColor: COLOR_F19149 
    },
    tab_item:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLOR_EAEAEA,
    },
    ajcjf:{
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1 
    }
    
});
module.exports = PulicStyle;