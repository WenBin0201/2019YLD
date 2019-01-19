import React, { Component } from 'react';
import {Text, View ,TouchableOpacity,TextInput,WebView} from 'react-native';
import TabView from '../../../component/TabView/TabView'
import PgStockConvertStyle from '../../../style/PgStockConvertStyle'
import PgNewBNStyle from '../../../style/PgNewBNStyle'
/**
 * 库存转换
 */
export default class PgStockConvert extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            buttonType:2,
            dataSource: [
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
                { "k1": "中华烟", "k2": "98543985943", "k3": "小熊猫", "k4": "42343424343", "k5": "10", "k6": "启用"},
            ]
        };
      }
    render() {
        return (
        <View style={[PgStockConvertStyle.container]}>
            {this.webViewMethods()}
            {this.footerView()}
        </View>
        );
    }
    /**
     * 列表内容
     */
    webViewMethods(){
            return(
                <View  style={{flex:1,marginTop:5}}>
                    <TabView
                    tabMarginTop={0}
                    tabHeadTextFontSize={13}
                    tabHeads={['序号', '大件商品名称', '大件商品条码', '小件商品条码','小件商品条码', '转换数量', '状态', '操作']}
                    tabRowWidth={[0.5, 2, 1.5, 2, 1.5, 1,1, 2.5]}
                    data={this.state.dataSource}
                    renderItem={this._renderRow}
                />
                </View>
                
             )
    }
     /**
     * 底部内容
     */
    footerView(){
        return(
            <View style={[PgStockConvertStyle.footerContainer]}>
                <View style={{flexDirection:'row',flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View><TextInput
                        placeholder='大件商品条码'
                        placeholderTextColor='#cccccc'
                        style={[PgStockConvertStyle.searchInput]}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                        />
                    </View>
                    <Text style={{color:'#2b7888'}}>*</Text>
                    <View><TextInput
                        placeholder='小件商品条码'
                        placeholderTextColor='#cccccc'
                        style={[PgStockConvertStyle.searchInput]}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                        />
                    </View>
                    <Text style={{color:'#2b7888'}}>*</Text>
                    <View><TextInput
                        placeholder='数量'
                        placeholderTextColor='#cccccc'
                        style={[PgStockConvertStyle.searchInput,{width:50}]}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                        />
                    </View>
                    <TouchableOpacity style={[PgStockConvertStyle.button]} ><Text style={{color:'#fff',fontSize:14}}>公示新增</Text></TouchableOpacity> 
                    <TouchableOpacity style={[PgStockConvertStyle.button,{backgroundColor:'#ec6941'}]} ><Text style={{color:'#fff'}}>公示检测</Text></TouchableOpacity> 
                </View>  
                <View style={{flexDirection:'row',flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <View><TextInput
                        placeholder='商品条码'
                        placeholderTextColor='#cccccc'
                        style={[PgStockConvertStyle.searchInput]}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                        />
                    </View>
                    <TouchableOpacity style={[PgStockConvertStyle.button,{backgroundColor:'#d63200'}]} ><Text style={{color:'#fff'}}>未页</Text></TouchableOpacity> 
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
    _renderRow = ({item,index}) => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', height: 30, width: this.deviceWidth }}>
                <View style={[PgStockConvertStyle.item, { flex: 0.5,borderLeftWidth:1}]}>
                    <Text>{index+1}</Text>
                </View>
                <View style={[PgStockConvertStyle.item, { flex: 2,borderLeftWidth:1}]}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={[PgStockConvertStyle.item, { flex: 1.5,borderLeftWidth:1}]}>
                    <Text>{item.k2}</Text>
                </View>
                <View style={[PgStockConvertStyle.item, { flex: 2,borderLeftWidth:1}]}>
                    <Text>{item.k3}</Text>
                </View>
                <View style={[PgStockConvertStyle.item, { flex: 1.5,borderLeftWidth:1}]}>
                    <Text>{item.k4}</Text>
                </View>
                <View style={[PgStockConvertStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k5}</Text>
                </View>
                <View style={[PgStockConvertStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k6}</Text>
                </View>
                <View style={[PgStockConvertStyle.bottomItem]}>
                <TouchableOpacity style={[PgStockConvertStyle.miniButton,{backgroundColor:'#d63200'}]} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#fff',fontSize:13}}>启用</Text></TouchableOpacity> 
                <TouchableOpacity style={[PgStockConvertStyle.miniButton,{backgroundColor:'#eb6100'}]} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#fff',fontSize:13}}>禁用</Text></TouchableOpacity> 
                <TouchableOpacity style={[PgStockConvertStyle.miniButton,{backgroundColor:'#f19149'}]} onPress={() => {this.setState({buttonType:1}) }}><Text style={{color:'#fff',fontSize:13}}>删除</Text></TouchableOpacity> 
                </View>
            </View>
        )
    }
}