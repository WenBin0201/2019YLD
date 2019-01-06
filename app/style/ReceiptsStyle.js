import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_GRAY_F3F3F3, COLOR_WHITE_COLOR, COLOR_SECOND_COLOR } from '../constant/ColorConstant';

export const ReceiptsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    item: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#eaeaea',
        borderLeftWidth: 0.5,
        borderTopWidth: 0.5,
        borderRightWidth: 0.5,
    },

    text1: {
        color: '#fff',
        fontSize: 14
    },

    text2: {
        fontSize: 12,
        color: '#9e9e9e'
    },

    tab2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#f1f1f1',
        borderTopWidth: 1
    },

    btn: {
        borderRadius: 5,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 65,
        height: 25,
    },

    btn2: {
        marginTop: 10, 
        marginLeft: 15, 
        width: 200, 
        height: 40, 
        backgroundColor: '#f19149', 
        borderRadius: 6, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },

    btn3: {
        flexDirection: 'row', 
        backgroundColor: '#f19149', 
        alignItems: 'center', 
        marginRight: 10, 
        height: 61, 
        width: 300, 
        borderRadius: 10 
    },

    textIput1: {
        height: 28,
        paddingTop: 0,
        paddingBottom: 0,
        width: 200,
        alignItems: 'center',
        marginLeft: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 14
    },

    textIput2: {
        height: 28, 
        paddingTop: 0, 
        paddingBottom: 0, 
        alignItems: 'center', 
        fontSize: 14 
    }
});
module.exports = ReceiptsStyle;