import React, { Component } from 'react'
import {
    Text,
    View,
    ActivityIndicator,
    FlatList
} from 'react-native';


export default class TabView extends Component {

    static defaultProps = {
        tabHeadBg: '#2b7888',//列表背景色
        tabHeadHeight: 30, //列表头部高度
        tabHeadSeparatorLineColor: '#FFFFFF',//列表头部分割线颜色
        SeparatorLineColor: '#EAEAEA',//列表分割线颜色
        tabHeadTextColor: '#FFFFFF',//列表头部文字颜色
        tabHeadTextFontSize: 16,//列表头部文字大小
    }

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
        this.tabHeads = this.props.tabHeads
        this.tabRowWidth = this.props.tabRowWidth
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: this.props.tabHeadBg, flexDirection: 'row', height: this.props.tabHeadHeight, width: this.deviceWidth }}>
                    {this.tabHeads.map((item, i) => {
                        return (
                            <View key={i} style={{ flex: this.tabRowWidth ? this.tabRowWidth[i] : 1, justifyContent: 'center', alignItems: 'center', borderColor: this.props.tabHeadSeparatorLineColor, borderLeftWidth: i == 0 ? 0 : 1, borderTopWidth: 1 }}>
                                <Text style={{ color: this.props.tabHeadTextColor, fontSize: this.props.tabHeadTextFontSize }}>{item}</Text>
                            </View>
                        )
                    })}
                </View>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.data}
                    keyExtractor={(item, index) => { index}}
                    renderItem={this.props.renderItem}
                    ListEmptyComponent={() =>
                        <View style={{ flex: 1,justifyContent:'center',alignItems:'center'}}>
                            <ActivityIndicator size="small" color="#0000ff" />
                        </View>
                    }
                    ItemSeparatorComponent={() =>
                        //分割线
                        <View
                            style={{ height: 1, backgroundColor: this.props.SeparatorLineColor }}>
                        </View>

                    }
                    ListHeaderComponent={() =>
                        <View
                            style={{ height: 1, backgroundColor: this.props.SeparatorLineColor }}>
                        </View>
                    }
                    ListFooterComponent={() =>
                        <View
                            style={{ height: 1, backgroundColor: this.props.SeparatorLineColor }}>
                        </View>
                    }
                />
            </View>
        )
    }


}