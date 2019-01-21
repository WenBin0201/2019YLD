import React from 'react';
import { StyleSheet } from 'react-native';
global.RuKuRecordsSize=1

export const PgSalesDocStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  headerContainer:{
    flexDirection:'row',
    height: global.RuKuRecordsSize*55,
    justifyContent: 'flex-start',
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
  pickButton:{
    justifyContent: 'center',
    padding:3,
    height:39,
    width:161,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#2b7889',
    borderRadius:5,
    margin:5
  },
  footerContainer:{
    flexDirection:'row',
    width:'100%',
    height:50,
    justifyContent: 'space-between',
     alignItems: 'center' 
  },
  footerContainerLeft:{
    flexDirection:'row',
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center' 
  },
  searchInput:{
    height: global.RuKuRecordsSize*39,
    fontSize:18, 
    borderColor: '#2b7889',
    width:90, 
    borderWidth: 1,
    borderRadius:global.RuKuRecordsSize*5,
    marginRight:10,
    textAlign:'center',
    color:'#2b7889'
  },
  leftContainer:{
    width:251,
    borderColor:'#2b7888',
    borderWidth:1
  }
});
module.exports = PgSalesDocStyle;