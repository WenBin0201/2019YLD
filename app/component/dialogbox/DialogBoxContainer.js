
import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,
    StyleSheet

} from 'react-native';

import PublicStyle from '../../style/PublicStyle'

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
                    <Text key={i} style={{ fontSize: 16, color: '#2b7888', marginTop: i == 0 ? 0 : 10 }}>{text}</Text>
                )
            });
        } else if ((typeof this.props.content == 'string') && (this.props.content.constructor == String)) {
            _content = (<Text style={{ fontSize: 16, color: '#2b7888' }}>{this.props.content}</Text>);
        } else {
            _content = this.props.content;
        }


        return (
            <View style={{ width: 425, height: 256, backgroundColor: '#FFFFFF' }}>
                {this.props.showTitle == true ?
                    <View style={{ height: 43, backgroundColor: '#2b7888', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#FFF', fontSize: 25 }}>{this.props.title}</Text>
                        {this.props.showCancelBtn == true ?
                            <TouchableOpacity onPress={() => {
                                this.props.destroy();
                            }} style={{ position: 'absolute', right: 0, height: 43, width: 39, borderColor: '#ffffff', borderLeftWidth: 2, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../image/login/shiftRecord-cross.png')}
                                    resizeMode={'contain'}
                                    style={{width:25,height:25}} />
                            </TouchableOpacity>
                            : null}
                    </View>
                    : null
                }
                <View style={{ flex: 1, paddingTop: 10, paddingBottom: 15, justifyContent: 'center', alignItems: 'center', }}>
                    {_content}
                    {this.props.mixedView ? this.props.mixedView : null}
                </View>
                {this.props.buttons && Array.isArray(this.props.buttons) && this.props.buttons.length > 0 ?
                    <View style={{ alignItems: 'center', paddingBottom: 20, flexDirection: 'row', justifyContent: 'center' }}>
                        {this.props.buttons.map((item, i) => {
                            return (
                                <TouchableOpacity key={i} onPress={item.onPress} style={{ height: 30, marginLeft: i == 0 ? 0 : 25, width: 70, backgroundColor: item.backgroundColor ? item.backgroundColor : '#2b788', borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 14, color: '#ffffff' }}> {item.text} </Text>
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