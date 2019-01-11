import React, { Component } from 'react';
import { Button, Text, View ,TouchableOpacity,TextInput,WebView} from 'react-native';
import TabView from '../../../component/TabView/TabView'
import ReceiptsStyle from '../../../style/ReceiptsStyle'

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
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1"}, 
                { "k1": "1", "k2": "1", "k3": "10", "k4": "1", "k5": "1", "k6": "1"}, 
            ]
        };
      }
    render() {
        return (
            <View style={{flex:1,padding:5}}>
            <View style={{flexDirection:'row',flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity style={{backgroundColor:'#e4393c',padding:5,margin:5}} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#fff'}}>卷烟订货</Text></TouchableOpacity>                    
                <View style={{flexDirection:'row',height:50,justifyContent: 'space-between', alignItems: 'center' }}>
                    <View><TextInput
                        placeholder='请输入新商盟订单号码'
                        style={{height: 30, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                    /></View>
                    <TouchableOpacity style={{backgroundColor:'#e4393c',padding:5,margin:5}} onPress={() => {this.setState({buttonType:2}) }}><Text style={{color:'#fff'}}>卷烟订单</Text></TouchableOpacity>                    
                </View>
            </View>
            <View style={{flex:15}}>
                {this.webViewMethods()}
            </View>
            <View style={{flexDirection:'row',width:'100%',height:50,justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={{color:'#2B7888'}}>我的档位22位</Text>
                </View>
            </View>
            </View>
        );
    }
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
                        <View style={{backgroundColor:'#f1f1f1',flexDirection:'row',justifyContent: 'space-between', alignItems: 'center' }}>
                            <View>
                            <View style={{flexDirection:'row',paddingLeft:10,height:35,justifyContent: 'flex-start', alignItems: 'center' }}>
                                {this.itemText('订单编号：','BT16000000000000000')}
                                {this.itemText('订单时间：','2018-12-10')}
                                {this.itemText('该订单订购卷烟种类：','26')}
                            </View>
                            <View style={{flexDirection:'row',paddingLeft:10,height:35,justifyContent: 'flex-start', alignItems: 'center' }}>
                                {this.itemText('已订购：','28条')}
                                {this.itemText('金额(元)：','18169.23')}
                                {this.itemText('预计利润(元)：','3798.54')}
                            </View>
                            </View>
                            <View>
                                <TouchableOpacity style={{backgroundColor:'#2B7888',padding:10,borderRadius:3}} ><Text style={{color:'#fff',fontSize:18}}>生产卷烟采购订单</Text></TouchableOpacity>                    
                            </View>
                        </View>
                        
                            <View style={{height:125,marginTop:5}}>
                            <TabView
                            tabHeadSeparatorLineColor="#EAEAEA"
                            tabHeadBg="#fff"
                            tabHeadTextColor="#000"
                            tabHeads={['卷烟价位', '商品编码', '商品名称', '批发价', '需求量', '订购量']}
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
    }
    itemText(label,value){
        return(
            <View style={{flexDirection:'row',height:40,justifyContent: 'flex-start', alignItems: 'center',width:300 }}><Text>{label}</Text><Text>{value}</Text></View>
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