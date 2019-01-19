import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_WHITE_COLOR, COLOR_3E8492 } from '../constant/ColorConstant';

export const RuKuRecordsStyle = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      flex: 1,
      backgroundColor: '#f1f1f1',
    },
    headerContainer:{
      flexDirection:'row',
      height: global.RuKuRecordsSize*55,
      justifyContent: 'space-between',
      alignItems: 'center' 
    },
    headerContainerLeft:{
      flexDirection:'row',
      flex: 1, 
      justifyContent: 'flex-start', 
      alignItems: 'center' 
    },
    headerTitle:{
      color:'#2B7888',
      fontSize:20,
    },
    leftContainer:{
      width:159,
      borderColor:'#a3c6d4',
      borderWidth:1
    },
    minContainer:{
      flexDirection:'row',
      width:'100%',
      height:65,
      justifyContent: 'space-between', 
      alignItems: 'center',
      backgroundColor:'#a3c6d4' 
    },
    miniButton:{
      justifyContent: 'center',
      alignItems:'center',
      height:31,
      width:51,
      backgroundColor:'#ec6941',
      borderRadius:5,
    },
    minText:{
      color:'#fff',
      fontSize:13
    },
    pickButton:{
      justifyContent: 'center',
      padding:3,
      height:39,
      width:80,
      backgroundColor:'#fff',
      borderWidth:1,
      borderColor:'#2b7889',
      borderRadius:5,
      margin:5
    },
    footerContainer:{
      flexDirection:'row',
      width:'100%',
      height:40,
      justifyContent: 'space-between',
       alignItems: 'center' 
    },
    item: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#EAEAEA',
    },
    rowItem:{
      flexDirection: 'row', 
      backgroundColor: '#FFFFFF', 
      height: 25,
    },
    searchInput:{
      height: global.RuKuRecordsSize*39,
      fontSize:15, 
      borderColor: '#2b7889',
      width:204, 
      borderWidth: 1,
      borderRadius:global.RuKuRecordsSize*6,
      padding: 0,
      paddingLeft:5,
      marginRight:10,
      marginLeft:10
    }
});
module.exports = RuKuRecordsStyle;