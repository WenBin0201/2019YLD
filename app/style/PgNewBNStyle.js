import React from 'react';
import { StyleSheet } from 'react-native';
import {COLOR_WHITE_COLOR,COLOR_3E8492 } from '../constant/ColorConstant';

export const RuKuRecordsStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  headerContainer:{
    flexDirection:'row',
    height: global.RuKuRecordsSize*46,
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
    height:25,
    width:80,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#2b7889',
    borderRadius:5,
    margin:5
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EAEAEA',
  },
  rowItem:{
    flexDirection: 'row', 
    backgroundColor: '#FFFFFF', 
    height: 29,
  },
  footerContainer:{
    flexDirection:'row',
    width:'100%',
    height:60,
    justifyContent: 'space-between',
     alignItems: 'center' 
  },
  footerContainerText:{
    color:'#2B7888',
    fontSize:20
  },
  searchInput:{
    height: global.RuKuRecordsSize*32,
    fontSize:13, 
    borderColor: '#2b7889',
    width:192, 
    borderWidth: 1,
    borderRadius:global.RuKuRecordsSize*6,
    padding: 0,
    paddingLeft:5,
    marginRight:10,
    marginLeft:10
  },
  headerText:{
    backgroundColor:'#dcdcdc',
    flexDirection:'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    height:70
  },
  headerRow:{
    flexDirection:'row',
    paddingLeft:10,
    height:25,
    justifyContent: 'flex-start', 
    alignItems: 'center' 
  },
  headerRowItem:{
    flexDirection:'row',
    height:25,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    width:300 
  },
  headerRowItemTitle:{
    color:'#666666',
    fontSize:15
  },
  headerRowItemText:{
    color:'#2B7888',
    fontSize:15
  }
});
module.exports = RuKuRecordsStyle;