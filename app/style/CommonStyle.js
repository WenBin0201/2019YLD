import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_SECOND_COLOR,COLOR_GRAY_FAFAFA,COLOR_GRAY_9E9E9E } from '../constant/ColorConstant';

export const commonStyle = StyleSheet.create({
    scrollFrame:{
      flex:1,
      backgroundColor:COLOR_GRAY_FAFAFA
    },
    /*flex*/
    flexRow:{
        flexDirection:'row',
    },
    flex1:{
        flex:1
    },
    flex7:{
        flex:7
    },
    flex8:{
        flex:8
    },
    flex9:{
        flex:9
    },
    /*aline*/
    centerRCF:{
        alignItems:'center'
    },
    centerRZF:{
        justifyContent:'center'
    },
    alignRZF:{
        justifyContent:'flex-end'
    },
    alignRCF:{
        alignItems:'flex-end'
    },
    textAlignR:{
        textAlign:'right'
    },
    /*padding*/
    paddingR4:{
        paddingRight:4
    },
    paddingR10:{
        paddingRight:10
    },
    paddingR20:{
        paddingRight:20
    },
    paddingL10:{
        paddingLeft:10
    },
    paddingTop5:{
        paddingTop:5
    },
    paddingBottom5:{
        paddingBottom:5
    },
    /*position*/
    positionRight5:{
      position:'absolute',
      right:5
    },
    /*color*/
    color9e:{
        color:COLOR_GRAY_9E9E9E
    },
    /*font*/
    font12:{
        fontSize:12
    },
    underline:{
        textDecorationLine:'underline'
    },
    /*logo*/
    logoFrame:{
        height:61,
        backgroundColor:COLOR_SECOND_COLOR
    },
    loginText:{
        width:200,
        height:30
    },
    loginIcon:{
        width:73,
        height:45
    },
    loginF:{
        width:145,
        height:86,
        borderRadius:4,
        alignSelf:'center',
        borderWidth:5,
        borderColor:'red',
        backgroundColor:'#00CD00'
        /*shadowColor:COLOR_GRAY_F3F3F3,
        shadowOffset:{width:1},
        shadowOpacity:0.8,
        shadowRadius:0.5*/
    },

});
module.exports = commonStyle;