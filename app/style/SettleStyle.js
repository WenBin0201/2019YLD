import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_3E8492, COLOR_WHITE_COLOR, COLOR_SECOND_COLOR } from '../constant/ColorConstant';

export const SettleStyle = StyleSheet.create({

    settle_view_top: {
        height: 60,
        backgroundColor: COLOR_3E8492,
        alignItems: 'center',
        justifyContent: 'center'
    },
    settle_view_top_right: {
        borderColor: COLOR_WHITE_COLOR,
        borderLeftWidth: 2,
        height: 50,
        width: 60,
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    settle_view_1: {
        flexDirection: 'row',
        marginTop: 15,
        height: 59,
        width:621,
        justifyContent: 'center',
        alignItems: 'center'
    },
    settle_icon: {
        width: 45,
        height: 45,
        marginRight: 15,
        backgroundColor: '#666666'
    },
    settle_input: {
        marginLeft: 15,
        borderColor: '#3e8492',
        flex:1,
        height:58,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        marginRight:15,
        paddingTop: 0,
        paddingBottom: 0
    },
    settle_view_2: {
        flexDirection: 'row',
        marginTop: 30,
        width:621,
    },
    settle_view_3: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex:1
    },

    settle_view_Ani4: {
        width:247,
        height: 397,
        borderColor: COLOR_SECOND_COLOR,
        position: 'absolute',
        top: 40,
        flexDirection: 'row'
    },
    settle_touchO_zk: {
        width: 48,
        height: 117,
        borderColor: COLOR_SECOND_COLOR,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: '#f4d000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    settle_touchO_jz: {
        width: 227,
        height: 72,
        borderColor: COLOR_SECOND_COLOR,
        position: 'absolute',
        right: 45,
        top: 40,
        borderRadius: 5,
        backgroundColor: '#a3c6d4',
        borderWidth: 1,
        flexDirection: 'row',
    },
    settle_view_jz: {
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    settle_view_5: {
        flex: 1,
        backgroundColor: '#999999',
        borderRadius: 5
    }
})
module.exports = SettleStyle;