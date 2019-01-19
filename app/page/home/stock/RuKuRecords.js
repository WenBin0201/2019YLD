import React, { Component } from 'react';
import { DatePickerAndroid,FlatList, Text, View ,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import TabView from '../../../component/TabView/TabView'
import RuKuRecordsStyle from '../../../style/RuKuRecordsStyle'
import Button from '../../../component/Button'
import CommManaStyle from '../../../style/CommManaStyle'
import { COLOR_SECOND_COLOR, COLOR_F19149, COLOR_DCDCDC } from '../../../constant/ColorConstant'

/**
 * 
 * 入库记录
 */

export default class PgRuKuRecords extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            buttonType:2,
            selectItem:-1,
            dataSource: [
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1", "k7": "1", "k8": "1", "k9": "1", "k10": "1", "k11": "1", "k12": "1"}, 
            ],
            startTime:null,
            endTime:null,
            dataList:[
                { k1: "85965865968545", k2: "2018-12-22 15:22:33"}, 
                { k1: "85965865968545", k2: "2018-12-22 15:22:33"}, 
                { k1: "85965865968545", k2: "2018-12-22 15:22:33"}, 
                { k1: "85965865968545", k2: "2018-12-22 15:22:33"}, 
                { k1: "85965865968545", k2: "2018-12-22 15:22:33"}, 
                { k1: "85965865968545", k2: "2018-12-22 15:22:33"}, 
                { k1: "85965865968545", k2: "2018-12-22 15:22:33"}, 
                { k1: "85965865968545", k2: "2018-12-22 15:22:33"}, 
                { k1: "85965865968545", k2: "2018-12-22 15:22:33"}, 
                { k1: "85965865968545", k2: "2018-12-22 15:22:33"}, 
                { k1: "85965865968545", k2: "2018-12-22 15:22:33"}, 
            ]
        };
      }
    render() {
        return (
            <View style={[RuKuRecordsStyle.container,{paddingLeft:5}]}>
                {this.searchHeader()}
            <View style={{flexDirection:'row',flex:1}}>
                <View style={{width:140,borderColor:'#a3c6d4',borderWidth:1}}>
                    {this.leftViewList()}
                </View>
                <View style={{flex:1,backgroundColor:'#fff',marginLeft:5}}>
                    {this.rightViewList()}
                </View>
            </View>
                {this.footerView()}
            </View>
        );
    }
    /**
     * 头部搜索
     */
    searchHeader(){
        return(
            <View style={RuKuRecordsStyle.headerContainer}>
                <View style={{flexDirection:'row',flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View><Text style={{color:'#2B7888',fontSize:16,marginRight:11,}}>单品查询</Text></View>
                    <View><TextInput
                        placeholder='请输入条码/拼音吗/自编码'
                        placeholderTextColor='#cccccc'
                        style={[RuKuRecordsStyle.searchInput]}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                        />
                    </View>
                    <TouchableOpacity style={[RuKuRecordsStyle.pickButton]} onPress={() => {this.timeSelect('startPick')}}><Text style={{color:(this.state.startTime)?'#646464':'#cccccc',fontSize:13}}>{(this.state.startTime)?this.state.startTime:'年/月/'}</Text></TouchableOpacity> 
                    <TouchableOpacity style={[RuKuRecordsStyle.pickButton]} onPress={() => {this.timeSelect('endPick')}}><Text style={{color:(this.state.endTime)?'#646464':'#cccccc',fontSize:13}}>{(this.state.endTime)?this.state.endTime:'年/月/'}</Text></TouchableOpacity> 
                    <TouchableOpacity style={[RuKuRecordsStyle.button,{backgroundColor:'#ec6941'}]} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#fff',fontSize:14}}>查询</Text></TouchableOpacity> 
                </View>                   
            </View>
        )
    }
    /**
     * 底部内容
     */
    footerView(){
        return(
            <View style={CommManaStyle.CommManaStyle_view3}>
                    <Text style={CommManaStyle.CommManaStyle_text}>采购单共计5单   共计1种商品，商品总量18.00，商品总进货额18.00</Text>
                    <View style={CommManaStyle.CommManaStyle_view4}>
                        <Text style={CommManaStyle.CommManaStyle_text}>共100页</Text>
                        <Button width={60} height={30} text='首页' style={{ marginLeft: 5, }} />
                        <Button width={60} height={30} text='上页' style={{ marginLeft: 5, }} />
                        <TextInput underlineColorAndroid='transparent' style={CommManaStyle.CommManaStyle_input1} />
                        <Button width={60} height={30} text='下页' style={{ marginLeft: 5, }} />
                        <Button width={60} height={30} backgroundColor='#d63200' text='尾页' style={{ marginLeft: 5, marginRight: 5 }} />

                    </View>
                </View>
        )
    }
    /**
     * 左边列表
     */
    leftViewList(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.dataList}
                    keyExtractor= {(item, index) => `${item}_${index}`}
                    renderItem={this._renderItem}
                    ListEmptyComponent = {()=> <View style={{flex:1}}></View>}
                    ItemSeparatorComponent={()=>
                        //分割线
                            <View
                                style={{ height: 1, backgroundColor:'#a3c6d4'}}>
                            </View>

                    }
                    ListHeaderComponent={()=>
                            <View
                                style={{ height: 1, backgroundColor: '#a3c6d4' }}>
                            </View>
                    }
                    ListFooterComponent={()=>
                            <View
                                style={{ height: 1, backgroundColor:'#a3c6d4'}}>
                            </View>
                    }
                />
                <View style={{flexDirection:'row',width:'100%',height:35,justifyContent: 'space-between', alignItems: 'center',backgroundColor:'#a3c6d4' }} >
                        <TouchableOpacity style={[RuKuRecordsStyle.miniButton]} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#fff',fontSize:12}}>上一页</Text></TouchableOpacity> 
                        <TouchableOpacity style={[RuKuRecordsStyle.miniButton,{backgroundColor:'#fff'}]} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#2b7889',fontSize:12}}>1/3</Text></TouchableOpacity> 
                        <TouchableOpacity style={[RuKuRecordsStyle.miniButton]} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#fff',fontSize:12}}>下一页</Text></TouchableOpacity> 
                </View>
            </View>
        )
    }
    _renderItem=({item,index}) => {
        let color='#2B7888'
        let backgroundColor='#fff'
        if(index==this.state.selectItem){
            color='#fff'
            backgroundColor=COLOR_F19149
            console.log(color)
        }
        return (
            <TouchableOpacity style={{backgroundColor: '#a3c6d4'}} onPress={() => {this.setState({selectItem:index}) }}>
                <View style={{backgroundColor: backgroundColor, height: 58,borderRadius:8,borderColor:'#a3c6d4',borderWidth:1}}>
                <View style={{height:20,alignItems:'center'}}>
                    <Text style={{color:color,fontSize:13}}>采购单号</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:color,fontSize:12}}>{item.k1}</Text>
                </View>
                <View style={{height:20,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:color,fontSize:10}}>时间:{item.k2}</Text>
                </View>
                </View>
            </TouchableOpacity>
        )
    }
    /**
     * 右边列表
     */
    rightViewList(){
            return(
               
                    <TabView
                    tabHeadHeight={28}
                    tabHeadTextFontSize={13}
                    tabHeads={['序号', '操作时间', '商品名称', '商品条码', '规格', '进价', '结余存数','入库数','库存数','入库金额','供货商','业务员','联系电话']}
                    tabRowWidth={[1, 2, 2, 2, 1, 1, 1.5,1,1,1.5,2,1,2]}
                    data={this.state.dataSource}
                    renderItem={this._renderRow}
                />
        
             )
    }
    /**
     * 搜索日期选择
     */
    async timeSelect(option){
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
              // 要设置默认值为今天的话，使用`new Date()`即可。
              // 下面显示的会是2020年5月25日。月份是从0开始算的。
              mode:'spinner',
              date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
              // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
                if(option=='startPick'){
                    this.setState({startTime:`${year}/${month+1}/${day}`})
                }else{
                    this.setState({endTime:`${year}/${month+1}/${day}`})
                }
            }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
          }
    }
    /**
     * 列表item
     * @param {*} rowD 
     * @param {*} sectionID 
     * @param {*} rowID 
     * @param {*} highlightRow 
     */
    _renderRow = ({item,index}) => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 30, width: this.deviceWidth }}>
                <View style={[RuKuRecordsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{index+1}</Text>
                </View>
                <View style={[RuKuRecordsStyle.item, { flex: 2,borderLeftWidth:1}]}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={[RuKuRecordsStyle.item, { flex: 2,borderLeftWidth:1}]}>
                    <Text>{item.k2}</Text>
                </View>
                <View style={[RuKuRecordsStyle.item, { flex: 2,borderLeftWidth:1}]}>
                    <Text>{item.k3}</Text>
                </View>
                <View style={[RuKuRecordsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k4}</Text>
                </View>
                <View style={[RuKuRecordsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k5}</Text>
                </View>
                <View style={[RuKuRecordsStyle.item, { flex: 1.5,borderLeftWidth:1}]}>
                    <Text>{item.k6}</Text>
                </View>
                <View style={[RuKuRecordsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k7}</Text>
                </View>
                <View style={[RuKuRecordsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k8}</Text>
                </View>
                <View style={[RuKuRecordsStyle.item, { flex: 1.5,borderLeftWidth:1}]}>
                    <Text>{item.k9}</Text>
                </View>
                <View style={[RuKuRecordsStyle.item, { flex: 2,borderLeftWidth:1}]}>
                    <Text>{item.k10}</Text>
                </View>
                <View style={[RuKuRecordsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k11}</Text>
                </View>
                <View style={[RuKuRecordsStyle.item, { flex: 2,borderLeftWidth:1}]}>
                    <Text>{item.k12}</Text>
                </View>
            </View>
        )
    }
}