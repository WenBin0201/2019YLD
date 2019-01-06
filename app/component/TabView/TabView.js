import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Easing,
    BackHandler,
    ListView
} from 'react-native';

/**
 * 表格
 * 头部数据：[]
 * 
 */
var _contentDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class TabView extends Component {

    static defaultProps = {
        tabHeadBg:'#2b7888',//列表背景色
        tabHeadHeight: 30, //列表头部高度
        tabHeadBorderColor:'#FFFFFF',//列表分割线颜色
        tabHeadTextColor:'#FFFFFF',//列表头部文字颜色
        tabHeadTextFontSize:16,//列表头部文字大小
    }

    constructor(props) {
        super(props)
        this.state ={
            dataSource :this.props.dataSource
        }
        this.tabHeads = this.props.tabHeads
        this.tabRowWidth = this.props.tabRowWidth
    }

    componentWillReceiveProps(nextProps){
        this.setState({dataSource:nextProps.dataSource})
    }

    render() {
        return (
            <View style={{flex:1}}>
                  <View style={{ backgroundColor: this.props.tabHeadBg, flexDirection: 'row', height: this.props.tabHeadHeight, width: this.deviceWidth }}>
                    {this.tabHeads.map((item, i) => {
                        return (
                            <View key={i} style={{ flex: this.tabRowWidth?this.tabRowWidth[i]:1, justifyContent: 'center', alignItems: 'center', borderColor: this.props.tabHeadBorderColor, borderLeftWidth: i == 0 ? 0.5 : 0, borderTopWidth: 1, borderRightWidth: 0.5 }}>
                                <Text style={{ color: this.props.tabHeadTextColor, fontSize: this.props.tabHeadTextFontSize}}>{item}</Text>
                            </View>
                        )
                    })}
                </View>   
                <ListView
                    style={{ flex: 1 }}
                    dataSource={_contentDataSource.cloneWithRows(this.state.dataSource)}
                    renderRow={this.props.renderRow}
                />
            </View>
        )
    }


}