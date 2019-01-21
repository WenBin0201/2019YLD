import React, { Component } from 'react';
import { Text, View,TextInput,TouchableOpacity,DatePickerAndroid,FlatList } from 'react-native';
import TabView from '../../../component/TabView/TabView'
import PgSalesDocStyle from '../../../style/PgSalesDocStyle'
import BaseButton from '../../../component/BaseButton'
/**
 * 销售单据
 */
export default class PgSalesDoc extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '1/3',
            buttonType:2,
            selectItem:-1,
            dataSource: [
                { "k1": "云烟(红)", "k2": "443242343", "k3": "45ml", "k4": "瓶", "k5": "3", "k6": "5", "k7": "70.00","k8": "微信", "k9": "微信", "k10": "支付成功" },
                { "k1": "云烟(红)", "k2": "443242343", "k3": "45ml", "k4": "瓶", "k5": "3", "k6": "5", "k7": "70.00","k8": "微信", "k9": "微信", "k10": "支付成功" },
                { "k1": "云烟(红)", "k2": "443242343", "k3": "45ml", "k4": "瓶", "k5": "3", "k6": "5", "k7": "70.00","k8": "微信", "k9": "微信", "k10": "支付成功" },
                { "k1": "云烟(红)", "k2": "443242343", "k3": "45ml", "k4": "瓶", "k5": "3", "k6": "5", "k7": "70.00","k8": "微信", "k9": "微信", "k10": "支付成功" },
                { "k1": "云烟(红)", "k2": "443242343", "k3": "45ml", "k4": "瓶", "k5": "3", "k6": "5", "k7": "70.00","k8": "微信", "k9": "微信", "k10": "支付成功" },
                { "k1": "云烟(红)", "k2": "443242343", "k3": "45ml", "k4": "瓶", "k5": "3", "k6": "5", "k7": "70.00","k8": "微信", "k9": "微信", "k10": "支付成功" },
                { "k1": "云烟(红)", "k2": "443242343", "k3": "45ml", "k4": "瓶", "k5": "3", "k6": "5", "k7": "70.00","k8": "微信", "k9": "微信", "k10": "支付成功" },
                { "k1": "云烟(红)", "k2": "443242343", "k3": "45ml", "k4": "瓶", "k5": "3", "k6": "5", "k7": "70.00","k8": "微信", "k9": "微信", "k10": "支付成功" },
                { "k1": "云烟(红)", "k2": "443242343", "k3": "45ml", "k4": "瓶", "k5": "3", "k6": "5", "k7": "70.00","k8": "微信", "k9": "微信", "k10": "支付成功" },
                { "k1": "云烟(红)", "k2": "443242343", "k3": "45ml", "k4": "瓶", "k5": "3", "k6": "5", "k7": "70.00","k8": "微信", "k9": "微信", "k10": "支付成功" },
                { "k1": "云烟(红)", "k2": "443242343", "k3": "45ml", "k4": "瓶", "k5": "3", "k6": "5", "k7": "70.00","k8": "微信", "k9": "微信", "k10": "支付成功" },
                { "k1": "云烟(红)", "k2": "443242343", "k3": "45ml", "k4": "瓶", "k5": "3", "k6": "5", "k7": "70.00","k8": "微信", "k9": "微信", "k10": "支付成功" },
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
            <View style={[PgSalesDocStyle.container,{paddingLeft:10}]}>
                {this.searchHeader()}
            <View style={{flexDirection:'row',flex:1}}>   
               {this.leftViewList()}
               {this.rightViewList()}
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
            <View style={[PgSalesDocStyle.headerContainer]}>
                    <TouchableOpacity style={[PgSalesDocStyle.pickButton]} onPress={() => {this.timeSelect('startPick')}}><Text style={{color:(this.state.startTime)?'#646464':'#bdbdbd',fontSize:15}}>{(this.state.startTime)?this.state.startTime:'年/月/'}</Text></TouchableOpacity> 
                    <TextInput
                        placeholderTextColor='#cccccc'
                        style={[PgSalesDocStyle.searchInput]}
                        onChangeText={(text) => this.setState({text})}
                        />
                    {/* {this._renderTypeSelect('一级分类', () => {})} */}
                    <BaseButton backgroundColor='#ec6941'   text='查询' />           
            </View>
        )
    }
       /**
     * 底部内容
     */
    footerView(){
        return(
            <View style={[PgSalesDocStyle.footerContainer]}>
                <View style={[PgSalesDocStyle.footerContainerLeft]}>
                    <BaseButton  text='上页' />
                    <View><TextInput
                        style={[PgSalesDocStyle.searchInput]}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                        />
                    </View>
                    <BaseButton  text='下页' />
                    <Text style={{color:'#2b7888',fontSize:15}}>商品总数：2</Text>
                    <Text style={{color:'#2b7888',marginLeft:10,fontSize:15}}>金额￥：12</Text>
                </View>  
                <View style={{flexDirection:'row',flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <BaseButton  text='退回' backgroundColor='#f19149' />
                    <BaseButton  text='反结账' backgroundColor='#eb6100' />
                    <BaseButton  text='补打小票' backgroundColor='#d63200' />
                </View> 
            </View>
        )
    }
     /**
     * 时间选择弹框
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
     * 左边列表
     */
    leftViewList(){
        return(
            <View style={[PgSalesDocStyle.leftContainer]}>
                <View style={{flexDirection:'row',alignItems:'center',height:30,borderColor:'#2b7888',borderBottomWidth:1}}>
                    <Text style={{textAlign:'center',color:'#2b7888',fontSize:15,width:160}}>单号</Text>
                    <Text style={{textAlign:'center',color:'#2b7888',fontSize:15,flex:1}}>总额</Text>
                </View>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.dataList}
                    keyExtractor= {(item, index) => `${item}_${index}`}
                    renderItem={this._renderItem}
                    ListEmptyComponent = {()=> <View style={{flex:1}}></View>}
                    ItemSeparatorComponent={()=>
                        //分割线
                            <View
                                style={{ height: 1, backgroundColor:'#fff'}}>
                            </View>

                    }
                    ListHeaderComponent={()=>
                            <View
                                style={{ height: 1, backgroundColor: '#fff' }}>
                            </View>
                    }
                    ListFooterComponent={()=>
                            <View
                                style={{ height: 1, backgroundColor:'#fff'}}>
                            </View>
                    }
                />
            </View>
        )
    }
    _renderItem=({item,index}) => {
        let color='#2B7888'
        let backgroundColor='#8cb0c9'
        if(index==this.state.selectItem){
            backgroundColor='#f4d000'
            console.log(color)
        }
        return (
            <TouchableOpacity style={{backgroundColor: backgroundColor, height: 43,borderRadius:1,borderColor:'#fff',borderLeftWidth:1,borderRightWidth:1,padding:3}}  onPress={() => {this.setState({selectItem:index}) }}>
                <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
                    <Text style={{color:'#666666',fontSize:12,width:160}}>单号:{item.k1}</Text>
                    <Text style={{textAlign:'center',color:'#666666',fontSize:12,flex:1}}>15.00</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
                    <Text style={{color:'#666666',fontSize:12,width:160}}>时间:{item.k2}</Text>
                    <Text style={{textAlign:'center',color:color,fontSize:12,flex:1}}>支付失败</Text>
                </View>
            </TouchableOpacity>
        )
    }

    rightViewList(){
        return(
            <View  style={{flex:1}}>
                <TabView
                tabHeadHeight={32}
                tabMarginTop={2}
                tabHeadTextFontSize={14}
                tabHeads={['选择', '商品名称', '条码', '规格', '单位', '零售价', '数量','退货数量','金额','支付方式','支付状态']}
                tabRowWidth={[0.5, 3, 2, 1, 1, 1, 1,1,1,1,1,1]}
                data={this.state.dataSource}
                renderItem={this._renderRow}
            />
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
    _renderRow = ({item,index}) => {
        return (
            <View style={[PgSalesDocStyle.rowItem]}>
                <View style={[PgSalesDocStyle.item, { flex: 0.5,borderLeftWidth:1}]}>
                    <Text>口</Text>
                </View>
                <View style={[PgSalesDocStyle.item, { flex: 3,borderLeftWidth:1}]}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={[PgSalesDocStyle.item, { flex: 2,borderLeftWidth:1}]}>
                    <Text>{item.k2}</Text>
                </View>
                <View style={[PgSalesDocStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k3}</Text>
                </View>
                <View style={[PgSalesDocStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k4}</Text>
                </View>
                <View style={[PgSalesDocStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k5}</Text>
                </View>
                <View style={[PgSalesDocStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k6}</Text>
                </View>
                <View style={[PgSalesDocStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k7}</Text>
                </View>
                <View style={[PgSalesDocStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k8}</Text>
                </View>
                <View style={[PgSalesDocStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k9}</Text>
                </View>
                <View style={[PgSalesDocStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k10}</Text>
                </View>
            </View>
        )
    }
}