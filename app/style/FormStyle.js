import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_SECOND_COLOR,COLOR_GRAY_DBDBDB } from '../constant/ColorConstant';
const HEIGHT_DEFAULT = 40;
const formStyle = {
    containerView: {
        backgroundColor: 'transparent'
    },
    TextInputWidget:{
        rowContainer: {
            flex:1,
            borderBottomWidth: 1,
            borderColor: COLOR_GRAY_DBDBDB,
            borderRadius:9
        },
        row: {
            height: HEIGHT_DEFAULT,
            alignItems:'flex-end',
        },
        textInputTitleInline: {
            marginLeft: 10,
            paddingLeft: 0,
            width: 80,
            fontSize:18,
            color:COLOR_SECOND_COLOR,
            height:28
            /* color:TEXT_MAIN_COLOR,*/
        },
        rowImage: {
            height: 20,
            width: 20,
            marginLeft: 10,
            alignSelf:'flex-end'
        },
        textInputInline: {
            height:40,
            paddingBottom:0,
            color:COLOR_GRAY_DBDBDB,
        },
       textInputTitle:{
            color:COLOR_GRAY_DBDBDB,
            fontSize:35
        },
          textInput:{
             color:COLOR_GRAY_DBDBDB,
         }
    },
}

module.exports = formStyle;