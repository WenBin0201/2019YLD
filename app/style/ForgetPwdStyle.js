import { PixelRatio, StyleSheet, Dimensions } from 'react-native'
import { COLOR_GRAY_F3F3F3, COLOR_SECOND_COLOR } from "../constant/ColorConstant";

const ForgetPwdStyle = StyleSheet.create({

    ForgetPwdStyle_view1: {
        backgroundColor: '#ffffff', 
        width: 286, 
        height: 235, 
        borderRadius: 5, 
        elevation: 2, 
        paddingTop: 5, 
        paddingBottom: 5 
    },

    ForgetPwdStyle_view2: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        borderBottomColor: '#f1f1f1', 
        borderBottomWidth: 1,
        justifyContent:'space-between' 
    },
    ForgetPwdStyle_view3:{
        width:20,
        height:20,
        borderColor:'#f4d000',
        borderWidth:1,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    ForgetPwdStyle_view4:{
        width:77,
        height:30,
        borderColor:'#bfbfbf',
        borderWidth:1,
        borderRadius:5,
        marginRight:10
    },
    ForgetPwdStyle_view5:{
        alignItems:'center',
        flexDirection:'row'
    },
    ForgetPwdStyle_view6:{
        height: 60, 
        alignItems: 'center' 
    },
    ForgetPwdStyle_to:{
        width:58,height:20,
        borderColor:'#f4d000',
        borderWidth:1,
        borderRadius:5,
        marginRight:10,
        marginLeft:3,
        justifyContent:'center',
        alignItems:'center'
    },
    ForgetPwdStyle_text1:{
        fontSize: 16, 
        color: '#2b7888',
        marginLeft:15
    },
    ForgetPwdStyle_text2:{
        fontSize:10,
        color:'#f4d000'
    },
    ForgetPwdStyle_text3:{
        color: '#e74c39', 
        fontSize: 12, 
        marginTop: 5 ,
        marginBottom: 5,
    },
    ForgetPwdStyle_ti1:{
        paddingTop:0,
        paddingBottom:0,
        width:188,
        
    }
})

module.exports = ForgetPwdStyle