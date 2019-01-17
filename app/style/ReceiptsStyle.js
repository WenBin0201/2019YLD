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
        borderColor: '#EAEAEA',
    },

    text2: {
        fontSize: 17,
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
        marginTop: 15,
        marginLeft: 15,
        width: 244,
        height: 56,
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
        height: 91,
        width: 440,
        borderRadius: 10
    },

    textIput1: {
        height: 31,
        paddingTop: 0,
        paddingBottom: 0,
        width: 246,
        alignItems: 'center',
        marginLeft: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 17
    },

    textIput2: {
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: 'center',
        fontSize: 17
    },
    ReceiptsStyle_view_bottom:{
        width: 301, 
        marginLeft: 55,
        height:102, 
        borderRadius: 6, 
        backgroundColor: "#fff" 
    },
    ReceiptsStyle_view_2:{
        flexDirection: 'row', 
        backgroundColor: '#2b7888', 
        alignItems: 'center',
        height:138 
    }

});
module.exports = ReceiptsStyle;