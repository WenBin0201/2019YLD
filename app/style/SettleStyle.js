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
        marginTop: 10,
        width: 400,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    settle_icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#666666'
    },
    settle_input: {
        flex: 1, marginLeft: 10,
        borderColor: COLOR_SECOND_COLOR,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        paddingTop: 0,
        paddingBottom: 0
    },
    settle_view_2: {
        flexDirection: 'row',
        width: 400,
        marginTop: 20
    },
    settle_view_3: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    settle_view_Ani4: {
        width: 163,
        height: 250,
        borderColor: COLOR_SECOND_COLOR,
        position: 'absolute',
        top: 40,
        flexDirection: 'row'
    },
    settle_touchO_zk: {
        width: 33,
        height: 80,
        borderColor: COLOR_SECOND_COLOR,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: '#f4d000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    settle_touchO_jz: {
        width: 160,
        height: 48,
        borderColor: COLOR_SECOND_COLOR,
        position: 'absolute',
        right: 35,
        top: 40,
        borderRadius: 5,
        backgroundColor: '#f1f1f1',
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