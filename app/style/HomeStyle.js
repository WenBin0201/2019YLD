import React from 'react';
import { StyleSheet } from 'react-native';
import {COLOR_WHITE_COLOR,COLOR_3E8492 } from '../constant/ColorConstant';

export const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_WHITE_COLOR,
    },
    topCell: {
        backgroundColor: '#a3c6d4', 
        height: 58, 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    topCell_left:{
        width: 65,
        borderColor:'#FFF',
        height:58,
        borderRightWidth:1,
        marginLeft: 15, 
        marginRight: 5 
    },
    topcell_zs:{
        alignItems: 'flex-start', 
        marginLeft: 15, 
        flex: 1, 
        justifyContent: 'center' 
    },
    tab_cell:{
        width: 25, 
        height: 25, 
        backgroundColor: '#666666', 
    },
    text: {
        color: COLOR_WHITE_COLOR, 
        fontSize: 12
    }

});
module.exports = HomeStyle;