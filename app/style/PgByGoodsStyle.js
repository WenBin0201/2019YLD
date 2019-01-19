import React from 'react';
import { StyleSheet } from 'react-native';
import {COLOR_WHITE_COLOR,COLOR_3E8492 } from '../constant/ColorConstant';
global.RuKuRecordsSize=1

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
  headerContainerRight:{
    flexDirection:'row',
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'center' 
  },
  miniButton:{
    justifyContent: 'center',
    alignItems:'center',
    height:23,
    width:40,
    backgroundColor:'#ec6941',
    borderRadius:5
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EAEAEA',
  },
  rowItem:{
    flexDirection: 'row', 
    backgroundColor: '#FFFFFF', 
    height: 45,
  },
  footerContainer:{
    flexDirection:'row',
    width:'100%',
    height:50,
    justifyContent: 'space-between',
     alignItems: 'center' 
  },
  searchInput:{
    height: global.RuKuRecordsSize*39,
    fontSize:18, 
    borderColor: '#2b7889',
    width:204, 
    borderWidth: 1,
    borderRadius:global.RuKuRecordsSize*6,
    padding: 0,
    paddingLeft:5,
    marginRight:10
  }
});
module.exports = RuKuRecordsStyle;