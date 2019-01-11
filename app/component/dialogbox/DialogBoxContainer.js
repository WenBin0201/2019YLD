
import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    TextInput,
    StyleSheet

} from 'react-native';

import PulicStyle from '../../style/PublicStyle'

export default class DialogBoxContainer extends Component {

    constructor(props) {
        super(props)

    }

    componentWillMount() {
        let { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
        this.deviceHeight = deviceHeight;
        this.deviceWidth = deviceWidth;
    }

    componentDidMount() {

    };

    componentWillUnmount() {

    }
    render() {

        var _content = null;
        if (this.props.content && Array.isArray(this.props.content)) {
            _content = this.props.content.map((text, i) => {
                return (
                    <Text key={i} style={{ fontSize: 14, color: '#666666',marginTop:i==0?0:10 }}>{text}</Text>
                )
            });
        } else if ((typeof this.props.content == 'string') && (this.props.content.constructor == String)) {
            _content = (<Text style={{ fontSize: 14, color: '#666666' }}>{this.props.content}</Text>);
        } else {
            _content = this.props.content;
        }
        

        return (
            <View style={{ width:350, height:200, backgroundColor: '#FFFFFF' }}>
                {this.props.title ?
                    <View style={{ height: 40, backgroundColor: '#3e8492', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#FFF', fontSize: 16 }}>{this.props.title}</Text>
                    </View>
                    : null
                }
                <View style={{ flex: 1, paddingTop: 10, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', }}>
                    {_content}
                    {this.props.mixedView ? this.props.mixedView : null}
                </View>
                {this.props.buttons && Array.isArray(this.props.buttons) && this.props.buttons.length > 0 ?
                    <View style={{ alignItems: 'center', paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        {this.props.buttons.map((item, i) => {
                            return (
                                <TouchableOpacity key={i} onPress={item.onPress} style={{ height: 30, width: 75, backgroundColor: '#3e8492', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text> {item.text} </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    : null
                }
            </View>
        )
    }

}