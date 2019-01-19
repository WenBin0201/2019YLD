import React from 'react';
import { StyleSheet } from 'react-native';
import {COLOR_WHITE_COLOR,COLOR_3E8492 } from '../constant/ColorConstant';

export const PgStockConvertStyle = StyleSheet.create({
  container: {
    flex:1,
    paddingLeft:5,
    paddingRight:5,
    backgroundColor:'#f1f1f1'
  },
  headerContainer:{
    flexDirection:'row',
    marginLeft:11, 
    justifyContent: 'space-between',
    alignItems: 'center' 
  },
  button:{
    justifyContent: 'center',
    alignItems:'center',
    height:30,
    margin:2,
    borderRadius:3,
    backgroundColor:'#2B7888',
    paddingLeft:15,
    paddingRight:15
  },
  buttonText:{
    color:'#fff',
    fontSize:14
  },
  miniButton:{
    justifyContent: 'center',
    alignItems:'center',
    height:23,
    width:40,
    backgroundColor:'#ec6941',
    borderRadius:5
  },
  pickButton:{
    justifyContent: 'center',
    padding:3,
    height:25,
    width:75,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#2b7889',
    borderRadius:3,
    margin:2
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EAEAEA',
  },
  bottomItem:{
    flexDirection:'row',
    justifyContent: 'space-around',
     alignItems: 'center', 
     flex: 2.5,
     borderLeftWidth:1,
     borderColor:'#EAEAEA'
  },
  footerContainer:{
    flexDirection:'row',
    width:'100%',
    height:40,
    justifyContent: 'space-between',
     alignItems: 'center' 
  },
  searchInput:{
    height: 30,
    fontSize:13, 
    borderColor: '#2b7889',
    width:100, 
    borderWidth: 1,
    borderRadius:5,
    padding: 0,
    paddingLeft:5
  }
});
module.exports = PgStockConvertStyle;