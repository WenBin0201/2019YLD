import React, { Component } from 'react';
import { Button, Text, View ,TouchableOpacity,TextInput,WebView} from 'react-native';
import TabView from '../../../component/TabView/TabView'
import ReceiptsStyle from '../../../style/ReceiptsStyle'
import PgNewBNStyle from '../../../style/PgNewBNStyle'

/**
 * 新商盟
 */
export default class PgNewBN extends Component {
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
                { "k1": "一类烟", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1"}, 
                { "k1": "三类烟", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1"}, 
                { "k1": "五类烟", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1"}, 
            ]
        };
      }
    render() {
        return (
            <View style={{flex:1,paddingLeft:5,paddingRight:5,backgroundColor:'#f1f1f1'}}>
                {this.searchHeader()}
            <View style={{flex:15}}>
                {this.webViewMethods()}
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
            <View style={[PgNewBNStyle.headerContainer]}> 
                <TouchableOpacity style={[PgNewBNStyle.button,{backgroundColor:'#e4393c',paddingLeft:0}]} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#fff'}}>卷烟发货</Text></TouchableOpacity>                    
                <View style={{flexDirection:'row',height:50,justifyContent: 'space-between', alignItems: 'center' }}>
                    <View><TextInput
                        placeholder='请输入条码/拼音吗/自编码'
                        placeholderTextColor='#cccccc'
                        style={[PgNewBNStyle.searchInput]}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                        />
                    </View>
                    <TouchableOpacity style={[PgNewBNStyle.button,{backgroundColor:'#e4393c'}]} onPress={() => {this.setState({buttonType:2}) }}><Text style={{color:'#fff'}}>卷烟订单查询</Text></TouchableOpacity>                    
                </View>                 
            </View>
        )
    }
     /**
     * 底部内容
     */
    footerView(){
        return(
            <View style={[PgNewBNStyle.footerContainer]}>
                <View style={{flex:1}}>
                    <Text style={{color:'#2B7888',fontSize:16}}>我的档位：22位</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Text style={{color:'#2B7888',fontSize:16}}>我的星级：三星</Text>
                </View>
            </View>
        )
    }
    /**
     * 卷烟订单查询内容
     */
    webViewMethods(){
        if(this.state.buttonType==0){
            return(<View></View>)
        }else if(this.state.buttonType==1){
            return(
                <WebView
                     source={{uri:'https://www.baidu.com'}}
                     style={{width:'100%',height:'100%'}}
                 />
             )
        }else{
            return(
                <View  style={{flex:1}}>
                    <View>
                        <View style={{backgroundColor:'#dcdcdc',flexDirection:'row',justifyContent: 'space-between', alignItems: 'center' }}>
                            <View>
                            <View style={{flexDirection:'row',paddingLeft:10,height:25,justifyContent: 'flex-start', alignItems: 'center' }}>
                                {this.itemText('订单编号：','BT1600000000000')}
                                {this.itemText('订单时间：','2018-12-10')}
                                {this.itemText('该订单订购卷烟种类：','26')}
                            </View>
                            <View style={{flexDirection:'row',paddingLeft:10,height:25,justifyContent: 'flex-start', alignItems: 'center' }}>
                                {this.itemText('已订购：','28条')}
                                {this.itemText('金额(元)：','18169.23')}
                                {this.itemText('预计利润(元)：','3798.54')}
                            </View>
                            </View>
                            <View>
                                <TouchableOpacity style={[PgNewBNStyle.button,{backgroundColor:'#2B7888'}]} ><Text style={[PgNewBNStyle.buttonText]}>生产卷烟采购订单</Text></TouchableOpacity>                    
                            </View>
                        </View>
                        
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
                    </View>
                    <View style={{flex:1,marginTop:5}}>
                    <TabView
                    tabHeadTextFontSize={13}
                    tabHeads={['序号', '商品编码', '商品名称', '批发价', '需求量', '订购量', '确认量','零售指导价','金额','预计盈利']}
                    tabRowWidth={[0.5, 1.5, 1, 1, 1, 1, 1,1,1,1,1]}
                    data={this.state.dataSource}
                    renderItem={this._renderRow}
                />
                    </View>
                </View>
                
             )
        }
    }
    itemText(label,value){
        return(
            <View style={{flexDirection:'row',height:25,justifyContent: 'flex-start', alignItems: 'center',width:200 }}><Text style={{color:'#666666',fontSize:13}}>{label}</Text><Text style={{color:'#2B7888',fontSize:13}}>{value}</Text></View>
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
            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 30, width: this.deviceWidth }}>
                <View style={[PgNewBNStyle.item, { flex: 0.5,borderLeftWidth:1}]}>
                    <Text>{index+1}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1.5,borderLeftWidth:1}]}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k2}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k3}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k4}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k5}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k6}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k7}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k8}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
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
                <View style={[PgNewBNStyle.item, { flex: 1}]}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k2}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k3}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k4}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k5}</Text>
                </View>
                <View style={[PgNewBNStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k6}</Text>
                </View>
            </View>
        )
    }
}