import React from 'react';
import { StyleSheet } from 'react-native';
import {COLOR_WHITE_COLOR,COLOR_3E8492 } from '../constant/ColorConstant';

export const PgPurchaseRecordsStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  headerContainer:{
    flexDirection:'row',
    height: global.RuKuRecordsSize*45,
    justifyContent: 'space-between',
    alignItems: 'center' 
  },
  button:{
    justifyContent: 'center',
    alignItems:'center',
    height:25,
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
    height:31,
    width:75,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#2b7889',
    borderRadius:5,
    margin:2
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
  footerContainer:{
    flexDirection:'row',
    width:'100%',
    height:40,
    justifyContent: 'space-between',
     alignItems: 'center' 
  },
  searchInput:{
    height: 31,
    fontSize:13, 
    borderColor: '#2b7889',
    width:128, 
    borderWidth: 1,
    borderRadius:5,
    padding: 0,
    paddingLeft:5,
    marginLeft:8
  },
  headerText:{
    flexDirection:'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    height:45
  },
  headerRow:{
    flexDirection:'row',
    flex:2,
    height:30,
    justifyContent: 'flex-start', 
    alignItems: 'center'  
  },
  headerRowItem:{
    flexDirection:'row',
    height:40,
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },
  headerRowItemText:{
    color:'#2B7888',
    fontSize:15
  }
});
module.exports = PgPurchaseRecordsStyle;