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
        height: 87, 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    topCell_left:{
        width: 98,
        borderColor:'#FFF',
        height:87,
        borderRightWidth:2,
        marginLeft: 15, 
        marginRight: 5 
    },
    topcell_zs:{          
        // marginLeft: 18, 
        flex: 1, 
    },
    tab_cell:{
        width: 45, 
        height: 45, 
        backgroundColor: '#666666', 
    },
    text: {
        color: COLOR_WHITE_COLOR, 
        fontSize: 17
    }

});
module.exports = HomeStyle;