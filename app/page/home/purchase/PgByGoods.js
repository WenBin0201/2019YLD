import React, { Component } from 'react';
import { Text, View ,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import TabView from '../../../component/TabView/TabView'
import PgByGoodsStyle from '../../../style/PgByGoodsStyle'
import Button from '../../../component/Button'
import BaseButton from '../../../component/BaseButton'
import CommManaStyle from '../../../style/CommManaStyle'
import PublicStyle from '../../../style/PublicStyle'
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
                { "k1": "可供", "k2": "云烟(红)", "k3": "75485784935", "k4": "称重计件", "k5": "分类名称", "k6": "分类名称", "k7": "20支", "k8": "盒", "k9": "7", "k10": "8", "k11": "70", "k12": "70", "k13": "70", "k14": "未提交" },
                { "k1": "可供", "k2": "云烟(红)", "k3": "75485784935", "k4": "称重计件", "k5": "分类名称", "k6": "分类名称", "k7": "20支", "k8": "盒", "k9": "7", "k10": "8", "k11": "70", "k12": "70", "k13": "70", "k14": "未提交" },
                { "k1": "可供", "k2": "云烟(红)", "k3": "75485784935", "k4": "称重计件", "k5": "分类名称", "k6": "分类名称", "k7": "20支", "k8": "盒", "k9": "7", "k10": "8", "k11": "70", "k12": "70", "k13": "70", "k14": "未提交" },
                { "k1": "可供", "k2": "云烟(红)", "k3": "75485784935", "k4": "称重计件", "k5": "分类名称", "k6": "分类名称", "k7": "20支", "k8": "盒", "k9": "7", "k10": "8", "k11": "70", "k12": "70", "k13": "70", "k14": "未提交" },
                { "k1": "可供", "k2": "云烟(红)", "k3": "75485784935", "k4": "称重计件", "k5": "分类名称", "k6": "分类名称", "k7": "20支", "k8": "盒", "k9": "7", "k10": "8", "k11": "70", "k12": "70", "k13": "70", "k14": "未提交" },
                { "k1": "可供", "k2": "云烟(红)", "k3": "75485784935", "k4": "称重计件", "k5": "分类名称", "k6": "分类名称", "k7": "20支", "k8": "盒", "k9": "7", "k10": "8", "k11": "70", "k12": "70", "k13": "70", "k14": "未提交" },
                { "k1": "可供", "k2": "云烟(红)", "k3": "75485784935", "k4": "称重计件", "k5": "分类名称", "k6": "分类名称", "k7": "20支", "k8": "盒", "k9": "7", "k10": "8", "k11": "70", "k12": "70", "k13": "70", "k14": "未提交" },
                { "k1": "可供", "k2": "云烟(红)", "k3": "75485784935", "k4": "称重计件", "k5": "分类名称", "k6": "分类名称", "k7": "20支", "k8": "盒", "k9": "7", "k10": "8", "k11": "70", "k12": "70", "k13": "70", "k14": "未提交" },
            ],
            selectValue:1
        };
      }
    render() {
        return (
            <View style={[PgByGoodsStyle.container,{paddingLeft:10}]}>
                {this.searchHeader()}
            <View style={{flex:1,backgroundColor:'#fff'}}>
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
            <View style={[PgByGoodsStyle.headerContainer]}>
                <View style={[PgByGoodsStyle.headerContainerLeft]}>
                         {this._renderTypeSelect('一级分类', () => {
                        })}
                        {this._renderTypeSelect('二级分类', () => {
                        })}
                        {this._renderTypeSelect('三级分类', () => {
                        })}
                    <View><TextInput
                        placeholder='条码/拼音吗/自编码'
                        placeholderTextColor='#cccccc'
                        style={[PgByGoodsStyle.searchInput]}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                        />
                    </View>
                    <BaseButton backgroundColor='#ec6941'   text='查询' onPress={() => {this.setState({buttonType:1}) }}/>
                </View>  
                <View style={[PgByGoodsStyle.headerContainerRight]}>
                    <BaseButton  text='生成采购订单' />
                    <BaseButton  text='导出EXCEL至邮箱' backgroundColor='#ec6941'/>
                </View>                   
            </View>
        )
    }
     /**
     * 下拉列表
     */
    _renderTypeSelect = (str, onPress) => {
        return (
            <TouchableOpacity style={CommManaStyle.CommManaStyle_to} onPress={onPress}>
                <View style={PublicStyle.ajcjf}>
                    <Text style={PublicStyle.text_9e9e9e_18}>{str}</Text>
                </View>
                <View style={CommManaStyle.CommManaStyle_view2}>
                    <Text style={PublicStyle.text_2B7888_18}>▼</Text>
                </View>
            </TouchableOpacity>

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
    webViewMethods(){
            return(
                    <TabView
                    tabHeadHeight={30}
                    tabMarginTop={2}
                    tabHeadTextFontSize={13}
                    tabHeads={['口','序号', '供货状态', '商品名称', '商品条码', '商品属性', '一级分类', '二级分类','规格','单位','现库存','进价','上限值','下限值','建议采购量','提交状态']}
                    tabRowWidth={[0.5,0.5, 1, 2, 1.5, 1, 1, 1,0.5,0.5,1,0.5,1,1,1,1]}
                    data={this.state.dataSource}
                    renderItem={this._renderRow}
                />
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
            <TouchableOpacity style={[PgByGoodsStyle.rowItem]}>
                <View style={[PgByGoodsStyle.item, { flex: 0.5,borderLeftWidth:1}]}>
                    <Text>口</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 0.5,borderLeftWidth:1}]}>
                    <Text>{index+1}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k1}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 2,borderLeftWidth:1}]}>
                    <Text>{item.k2}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 1.5,borderLeftWidth:1}]}>
                    <Text>{item.k3}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k4}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k5}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k6}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 0.5,borderLeftWidth:1}]}>
                    <Text>{item.k7}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 0.5,borderLeftWidth:1}]}>
                    <Text>{item.k8}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k9}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 0.5,borderLeftWidth:1}]}>
                    <Text>{item.k10}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k11}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k12}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k13}</Text>
                </View>
                <View style={[PgByGoodsStyle.item, { flex: 1,borderLeftWidth:1}]}>
                    <Text>{item.k14}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}