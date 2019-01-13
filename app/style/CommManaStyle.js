import { PixelRatio, StyleSheet, Dimensions } from 'react-native'
import { COLOR_GRAY_F3F3F3, COLOR_SECOND_COLOR } from "../constant/ColorConstant";

const CommManaStyle = StyleSheet.create({

    CommManaStyle_main: {
        flex: 1,
        backgroundColor: '#f1f1f1'
    },
    CommManaStyle_to: {
        width: 80,
        height: 30,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: "#2b7889",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 5
    },
    CommManaStyle_view1: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 15
    },
    CommManaStyle_view2:{
        backgroundColor:'#e4e4e4',
        width:20,
        justifyContent:'center',
        alignItems:'center',
        height:28,
        borderBottomRightRadius:5,
        borderTopRightRadius:5
    },
    CommManaStyle_view3:{
        height: 40, 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    CommManaStyle_view4:{
        flexDirection: 'row', 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-end'
    },
    CommManaStyle_view5:{
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    CommManaStyle_input:{
        marginLeft:5,
        width:140,
        height:30,
        paddingTop:0,
        paddingBottom:0,
        fontSize:12,
        backgroundColor:'#FFF',
        borderColor:'#2b7889',
        borderRadius:5,
        borderWidth: 1,
    },
    CommManaStyle_input1:{
        marginLeft:5,
        width:50,
        height:30,
        paddingTop:0,
        paddingBottom:0,
        fontSize:12,
        color:'#2b7889',
        backgroundColor:'#FFF',
        borderColor:'#2b7889',
        borderRadius:5,
        borderWidth: 1,
        textAlign:'center'
    },
    CommManaStyle_text:{
        marginLeft: 15, 
        fontSize: 10, 
        color: '#2b7889' 
    }
})

module.exports = CommManaStyle