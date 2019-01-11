import React, { Component } from 'react';
import { DatePickerAndroid,FlatList, Text, View ,TouchableOpacity,TextInput,WebView} from 'react-native';
import TabView from '../../../component/TabView/TabView'
import ReceiptsStyle from '../../../style/ReceiptsStyle'
import PgPurchaseRecordsStyle from '../../../style/PgPurchaseRecordsStyle'

/**
 * 采购记录
 */
export default class PgPurchaseRecords extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            buttonType:2,
            dataSource: [
                { "k1": "69432434324", "k2": "云烟(红)", "k3": "57.34", "k4": "4", "k5": "3", "k6": "5", "k7": "70.00", "k8": "70.00", "k9": "70.00" },
                { "k1": "69432434324", "k2": "云烟(红)", "k3": "57.34", "k4": "4", "k5": "3", "k6": "5", "k7": "70.00", "k8": "70.00", "k9": "70.00" },
                { "k1": "69432434324", "k2": "云烟(红)", "k3": "57.34", "k4": "4", "k5": "3", "k6": "5", "k7": "70.00", "k8": "70.00", "k9": "70.00" },
                { "k1": "69432434324", "k2": "云烟(红)", "k3": "57.34", "k4": "4", "k5": "3", "k6": "5", "k7": "70.00", "k8": "70.00", "k9": "70.00" },
                { "k1": "69432434324", "k2": "云烟(红)", "k3": "57.34", "k4": "4", "k5": "3", "k6": "5", "k7": "70.00", "k8": "70.00", "k9": "70.00" },
                { "k1": "69432434324", "k2": "云烟(红)", "k3": "57.34", "k4": "4", "k5": "3", "k6": "5", "k7": "70.00", "k8": "70.00", "k9": "70.00" },
                { "k1": "69432434324", "k2": "云烟(红)", "k3": "57.34", "k4": "4", "k5": "3", "k6": "5", "k7": "70.00", "k8": "70.00", "k9": "70.00" },
            ],
            tableTotal:[
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1"}, 
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
            <View style={[PgPurchaseRecordsStyle.container,{padding:5}]}>
            <View style={{flexDirection:'row',height: 50,marginLeft:10, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{flexDirection:'row',flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View><Text style={{color:'#2B7888',fontSize:16}}>入库单查询</Text></View>
                    <TouchableOpacity style={{backgroundColor:'#fff',borderWidth:1,borderColor:'#2B7888',borderRadius:3,padding:5,margin:5}} onPress={() => {this.timeSelect('startPick')}}><Text style={{color:(this.state.startTime)?'#646464':'#bdbdbd'}}>{(this.state.startTime)?this.state.startTime:'年/月/'}</Text></TouchableOpacity> 
                    <TouchableOpacity style={{backgroundColor:'#fff',borderWidth:1,borderColor:'#2B7888',borderRadius:3,padding:5,margin:5}} onPress={() => {this.timeSelect('endPick')}}><Text style={{color:(this.state.endTime)?'#646464':'#bdbdbd'}}>{(this.state.endTime)?this.state.endTime:'年/月/'}</Text></TouchableOpacity> 
                    <TouchableOpacity style={{backgroundColor:'#ec6941',padding:5,margin:5}} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#fff'}}>查询</Text></TouchableOpacity> 
                </View>
                <View style={{flexDirection:'row',flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <View><TextInput
                        placeholder='条码/拼音码/自编码'
                        style={{height: 30, borderColor: '#bdbdbd', borderWidth: 1,borderRadius:3}}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                        />
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#fff',borderWidth:1,borderColor:'#2B7888',borderRadius:3,padding:5,margin:5}} onPress={() => {this.timeSelect('startPick')}}><Text style={{color:(this.state.startTime)?'#646464':'#bdbdbd'}}>{(this.state.startTime)?this.state.startTime:'年/月/'}</Text></TouchableOpacity> 
                    <TouchableOpacity style={{backgroundColor:'#fff',borderWidth:1,borderColor:'#2B7888',borderRadius:3,padding:5,margin:5}} onPress={() => {this.timeSelect('endPick')}}><Text style={{color:(this.state.endTime)?'#646464':'#bdbdbd'}}>{(this.state.endTime)?this.state.endTime:'年/月/'}</Text></TouchableOpacity> 
                    <TouchableOpacity style={{backgroundColor:'#ec6941',padding:5,margin:5}} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#fff'}}>查询</Text></TouchableOpacity> 
                </View>                   
            </View>
            <View style={{backgroundColor:'#f1f1f1',marginLeft:10,flexDirection:'row',justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{flexDirection:'row',flex:2,height:35,justifyContent: 'flex-start', alignItems: 'center' }}>
                    {this.itemText('订单编号：','BT16000000000000000')}
                    <View style={{width:50}}></View>
                    {this.itemText('订单时间：','2018-12-10')}
                </View>
                <View style={{flexDirection:'row',flex:1,height:35,justifyContent: 'flex-end', alignItems: 'center' }}>
                    {this.itemText('该订单订购卷烟种类：','26种')}
                </View>
            </View>
            <View style={{flexDirection:'row',flex:1}}>
                <View style={{flex:1,borderColor:'#2B7888',borderWidth:1}}>
                    {this.leftViewList()}
                </View>
                <View style={{flex:4,backgroundColor:'#fff'}}>
                    {this.rightViewList()}
                </View>
            </View>
            </View>
        );
    }
    itemText(label,value){
        return(
            <View style={{flexDirection:'row',height:40,justifyContent: 'flex-start', alignItems: 'center'}}><Text style={{color:'#2B7888'}}>{label}</Text><Text style={{color:'#2B7888'}}>{value}</Text></View>
        )
    }
    leftViewList(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.dataList}
                    keyExtractor= {(item,index)=>{index}}
                    renderItem={this._renderItem}
                    ListEmptyComponent = {()=> <View style={{flex:1}}></View>}
                    ItemSeparatorComponent={()=>
                        //分割线
                            <View
                                style={{ height: 1, backgroundColor:'#2B7888'}}>
                            </View>

                    }
                    ListHeaderComponent={()=>
                            <View
                                style={{ height: 1, backgroundColor: '#2B7888' }}>
                            </View>
                    }
                    ListFooterComponent={()=>
                            <View
                                style={{ height: 1, backgroundColor:'#2B7888'}}>
                            </View>
                    }
                />
            </View>
        )
    }
    _renderItem=({item,index}) => {
        return (
            <View style={{backgroundColor: '#2B7888'}}>
                <View style={{backgroundColor: '#fff', height: 100,borderRadius:8,borderColor:'#2B7888',borderWidth:1}}>
                <View style={{height:30,alignItems:'center'}}>
                    <Text>采购单号</Text>
                </View>
                <View style={{height:30,alignItems:'center'}}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={{height:30,alignItems:'center'}}>
                    <Text>时间：{item.k2}</Text>
                </View>
                </View>
            </View>
        )
    }
    rightViewList(){
            return(
                <View  style={{flex:1}}>
                    <View>
                            <View style={{height:125,marginTop:5}}>
                            <TabView
                            tabHeadSeparatorLineColor="#EAEAEA"
                            tabHeadBg="#fff"
                            tabHeadTextColor="#000"
                            tabHeads={['卷烟价位', '订购量(条)', '金额合计(元)', '卷烟价位', '订购量(条)', '金额合计(元)']}
                            tabRowWidth={[1, 1, 1, 1, 1, 1]}
                            data={this.state.tableTotal}
                            renderItem={this._renderTotalRow}
                        />
                        </View>
                    </View>
                    <View style={{flex:1,marginTop:5}}>
                    <TabView
                    tabHeads={['序号', '商品编码', '商品名称', '批发价', '需求量', '订购量', '确认量','零售指导价','金额','预计盈利']}
                    tabRowWidth={[0.5, 1.5, 1, 1, 1, 1, 1,1,1,1,1]}
                    data={this.state.dataSource}
                    renderItem={this._renderRow}
                />
                    </View>
                </View>
                
             )
    }
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
                <View style={[ReceiptsStyle.item, { flex: 0.5,borderLeftWidth:1}]}>
                    <Text>{index+1}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1.5}]}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k2}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k3}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k4}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k5}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k6}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k7}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k8}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k9}</Text>
                </View>
            </View>
        )
    }

    /**
     * 列表item
     * @param {*} rowD 
     * @param {*} sectionID 
     * @param {*} rowID 
     * @param {*} highlightRow 
     */
    _renderTotalRow=({item,index}) => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 30, width: this.deviceWidth }}>
                <View style={[ReceiptsStyle.item, { flex: 1}]}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k2}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k3}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k4}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k5}</Text>
                </View>
                <View style={[ReceiptsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k6}</Text>
                </View>
            </View>
        )
    }
}