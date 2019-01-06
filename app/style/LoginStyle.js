import React from 'react';
import { StyleSheet } from 'react-native';
import {COLOR_GRAY_F3F3F3,COLOR_WHITE_COLOR,COLOR_SECOND_COLOR } from '../constant/ColorConstant';

export const loginStyle = StyleSheet.create({
    loginF:{
        width:286,
        backgroundColor:COLOR_WHITE_COLOR,
        borderRadius:9,
        alignSelf:'center',
        borderWidth:1,
        borderColor:COLOR_GRAY_F3F3F3,
        shadowColor:COLOR_GRAY_F3F3F3,
        shadowOffset:{width:1},
        shadowOpacity:0.8,
        shadowRadius:0.5,
        marginTop:49,
    },
    btnFrame:{
        width:286,
        alignSelf:'center',
        marginTop:10
    },
    btnBg:{
        backgroundColor:COLOR_SECOND_COLOR,
        borderRadius:10,
        paddingVertical:5,
        paddingHorizontal:10
    },
    btnText:{
        color:COLOR_WHITE_COLOR
    },
    btnMargin:{
        marginHorizontal:24
    }
});
module.exports = loginStyle;