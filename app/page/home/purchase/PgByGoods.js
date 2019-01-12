import React, { Component } from 'react';
import { Button, Text, View ,TouchableOpacity,TextInput,WebView} from 'react-native';
import TabView from '../../../component/TabView/TabView'
import ReceiptsStyle from '../../../style/ReceiptsStyle'
/**
 * 智能补货
 */
export default class PgByGoods extends Component {
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
            selectValue:1
        };
      }
    render() {
        return (
            <View style={{flex:1,padding:5}}>
             <View style={{flexDirection:'row',height: 50,marginLeft:10, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{flexDirection:'row',flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <TouchableOpacity style={{backgroundColor:'#fff',borderWidth:1,borderColor:'#2B7888',borderRadius:3,padding:5,margin:5}} onPress={() => {this.timeSelect('startPick')}}><Text style={{color:(this.state.selectValue)?'#646464':'#bdbdbd'}}>{(this.state.selectValue)?this.state.selectValue:'年/月/'}</Text></TouchableOpacity> 
                    <View><TextInput
                        placeholder='条码/拼音码/自编码'
                        style={{height: 30, borderColor: '#bdbdbd', borderWidth: 1,borderRadius:3}}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                        />
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#ec6941',padding:5,margin:5}} ><Text style={{color:'#fff'}}>查询</Text></TouchableOpacity> 
                </View>
                <View style={{flexDirection:'row',flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <TouchableOpacity style={{backgroundColor:'#2B7888',padding:5,margin:5}} ><Text style={{color:'#fff'}}>生成采购订单</Text></TouchableOpacity> 
                    <TouchableOpacity style={{backgroundColor:'#ec6941',padding:5,margin:5}} ><Text style={{color:'#fff'}}>导出EXCEL至邮箱</Text></TouchableOpacity> 
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
            return(
                <View  style={{flex:1}}>
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