import React, { Component } from 'react';
import { DatePickerAndroid,FlatList, Text, View ,TouchableOpacity,TextInput,WebView} from 'react-native';
import TabView from '../../../component/TabView/TabView'
import ReceiptsStyle from '../../../style/ReceiptsStyle'
import PgPurchaseRecordsStyle from '../../../style/PgPurchaseRecordsStyle'
import { COLOR_SECOND_COLOR, COLOR_F19149, COLOR_DCDCDC } from '../../../constant/ColorConstant'

/**
 * 采购记录
 */
export default class PgPurchaseRecords extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            buttonType:2,
            selectItem:-1,
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
                { "k1": "一类烟", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1"}, 
                { "k1": "三类烟", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1"}, 
                { "k1": "五类烟", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1"}, 
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
                {this.searchHeader()}
                {this.textHeader()}
            <View style={{flexDirection:'row',flex:1}}>
                <View style={{width:140,borderColor:'#a3c6d4',borderWidth:1}}>
                    {this.leftViewList()}
                </View>
                <View style={{flex:4,backgroundColor:'#fff'}}>
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
            <View style={{flexDirection:'row',height: 35, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{flexDirection:'row',flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View><Text style={{color:'#2B7888',fontSize:16}}>入库单查询</Text></View>
                    <TouchableOpacity style={[PgPurchaseRecordsStyle.pickButton]} onPress={() => {this.timeSelect('startPick')}}><Text style={{color:(this.state.startTime)?'#646464':'#bdbdbd',fontSize:13}}>{(this.state.startTime)?this.state.startTime:'年/月/'}</Text></TouchableOpacity> 
                    <TouchableOpacity style={[PgPurchaseRecordsStyle.pickButton]} onPress={() => {this.timeSelect('endPick')}}><Text style={{color:(this.state.endTime)?'#646464':'#bdbdbd',fontSize:13}}>{(this.state.endTime)?this.state.endTime:'年/月/'}</Text></TouchableOpacity> 
                    <TouchableOpacity style={[PgPurchaseRecordsStyle.button,{backgroundColor:'#ec6941'}]} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#fff',fontSize:14}}>查询</Text></TouchableOpacity> 
                </View>
                <View style={{flexDirection:'row',flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View><TextInput
                        placeholder='请输入条码/拼音吗/自编码'
                        placeholderTextColor='#cccccc'
                        style={{height: 28,fontSize:13, borderColor: '#2b7889',width:150, borderWidth: 1,borderRadius:5,padding: 0,paddingLeft:5}}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                        />
                    </View>
                    <TouchableOpacity style={[PgPurchaseRecordsStyle.pickButton]} onPress={() => {this.timeSelect('startPick')}}><Text style={{color:(this.state.startTime)?'#646464':'#cccccc',fontSize:13}}>{(this.state.startTime)?this.state.startTime:'年/月/'}</Text></TouchableOpacity> 
                    <TouchableOpacity style={[PgPurchaseRecordsStyle.pickButton]} onPress={() => {this.timeSelect('endPick')}}><Text style={{color:(this.state.endTime)?'#646464':'#cccccc',fontSize:13}}>{(this.state.endTime)?this.state.endTime:'年/月/'}</Text></TouchableOpacity> 
                    <TouchableOpacity style={[PgPurchaseRecordsStyle.button,{backgroundColor:'#ec6941'}]} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#fff',fontSize:14}}>查询</Text></TouchableOpacity> 
                </View>                   
            </View>
        )
    }
    /**
     * 头部说明
     */
    textHeader(){
        return(
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
        )
    }
    itemText(label,value){
        return(
            <View style={{flexDirection:'row',height:40,justifyContent: 'flex-start', alignItems: 'center'}}><Text style={{color:'#2B7888'}}>{label}</Text><Text style={{color:'#2B7888'}}>{value}</Text></View>
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
            </View>
        )
    }
     /**
     * 底部内容
     */
    footerView(){
        return(
            <View style={[PgPurchaseRecordsStyle.footerContainer]}>
                <View style={{flex:1}}>
                    <Text style={{color:'#2B7888',fontSize:12}}>采购单共计5单   共计1种商品，商品总量18.00，商品总进货额18.00</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent: 'flex-end', alignItems: 'center',paddingRight:15}}>
                <Text style={{color:'#2B7888',fontSize:12}}>共100页</Text>
                    <TouchableOpacity style={[PgPurchaseRecordsStyle.button]} onPress={() => {this.setState({buttonType:1}) }}><Text style={[PgPurchaseRecordsStyle.buttonText]}>首页</Text></TouchableOpacity> 
                    <TouchableOpacity style={[PgPurchaseRecordsStyle.button]} onPress={() => {this.setState({buttonType:1}) }}><Text style={[PgPurchaseRecordsStyle.buttonText]}>上页</Text></TouchableOpacity> 
                    <TouchableOpacity style={[PgPurchaseRecordsStyle.button,{backgroundColor:'#fff',borderColor:'#2B7888',borderWidth:1}]} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#2B7888',fontSize:16}}>0</Text></TouchableOpacity> 
                    <TouchableOpacity style={[PgPurchaseRecordsStyle.button]} onPress={() => {this.setState({buttonType:1}) }}><Text style={[PgPurchaseRecordsStyle.buttonText]}>下页</Text></TouchableOpacity> 
                    <TouchableOpacity style={[PgPurchaseRecordsStyle.button,{backgroundColor:'#ec6941'}]} onPress={() => {this.setState({buttonType:1}) }}><Text style={[PgPurchaseRecordsStyle.buttonText]}>尾页</Text></TouchableOpacity> 
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
    rightViewList(){
        return(
            <View  style={{flex:1}}>
                 <View style={{height:85,marginTop:5}}>
                        <TabView
                        tabHeadSeparatorLineColor="#EAEAEA"
                        tabHeadBg="#fff"
                        tabHeadTextFontSize={12}
                        tabHeadHeight={20}
                        tabMarginTop={0}
                        tabHeadTextColor="#000"
                        tabHeads={['卷烟价位', '订购量', '金额合计(元)', '卷烟价位', '订购量(条)', '金额合计(元)']}
                        tabRowWidth={[1, 1, 1, 1, 1, 1]}
                        data={this.state.tableTotal}
                        renderItem={this._renderTotalRow}
                    />
                    </View>
                <View style={{flex:1,marginTop:5}}>
                <TabView
                tabHeadTextFontSize={12}
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
            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 20, width: this.deviceWidth }}>
                <View style={[PgPurchaseRecordsStyle.item, { flex: 1}]}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={[PgPurchaseRecordsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k2}</Text>
                </View>
                <View style={[PgPurchaseRecordsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k3}</Text>
                </View>
                <View style={[PgPurchaseRecordsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k4}</Text>
                </View>
                <View style={[PgPurchaseRecordsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k5}</Text>
                </View>
                <View style={[PgPurchaseRecordsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k6}</Text>
                </View>
            </View>
        )
    }
}