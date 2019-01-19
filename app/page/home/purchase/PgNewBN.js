import React, { Component } from 'react';
import { Button, Text, View ,TouchableOpacity,TextInput,WebView} from 'react-native';
import TabView from '../../../component/TabView/TabView'
import ReceiptsStyle from '../../../style/ReceiptsStyle'
import PgNewBNStyle from '../../../style/PgNewBNStyle'
import BaseButton from '../../../component/BaseButton'

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
                <BaseButton backgroundColor='#eb6100' height={32} borderRadius={4} fontSize={13} text='卷烟发货' onPress={() => {this.setState({buttonType:1}) }}/>                             
                <View style={{flexDirection:'row',height:50,justifyContent: 'space-between', alignItems: 'center' }}>
                    <View><TextInput
                        placeholder='请输入新商盟订单号码'
                        placeholderTextColor='#cccccc'
                        style={[PgNewBNStyle.searchInput]}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                        />
                    </View>
                    <BaseButton backgroundColor='#d63200' height={32} borderRadius={4} fontSize={13} text='卷烟订单查询' onPress={() => {this.setState({buttonType:2}) }}/>               
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
                    <Text style={[PgNewBNStyle.footerContainerText]}>我的档位：22位</Text>
                </View>
                <Text style={[PgNewBNStyle.footerContainerText]}>我的星级：三星</Text>
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
                        <View style={[PgNewBNStyle.headerText]}>
                            <View>
                                <View style={[PgNewBNStyle.headerRow]}>
                                    {this.itemText('订单编号：','BT1600000000000')}
                                    {this.itemText('订单时间：','2018-12-10')}
                                    {this.itemText('该订单订购卷烟种类：','26')}
                                </View>
                                <View style={[PgNewBNStyle.headerRow]}>
                                    {this.itemText('已订购：','28条')}
                                    {this.itemText('金额(元)：','18169.23')}
                                    {this.itemText('预计利润(元)：','3798.54')}
                                </View>
                            </View>
                            <BaseButton  text='生产卷烟采购订单' backgroundColor='#2B7888'/>
                        </View>
                        
                        <View style={{height:81,marginTop:5}}>
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
                        tabHeadTextFontSize={13}
                        tabHeadHeight={33}
                        tabMarginTop={2}
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
            <View style={[PgNewBNStyle.headerRowItem]}><Text style={[PgNewBNStyle.headerRowItemTitle]}>{label}</Text><Text style={[PgNewBNStyle.headerRowItemText]}>{value}</Text></View>
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
            <View style={[PgNewBNStyle.rowItem]}>
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