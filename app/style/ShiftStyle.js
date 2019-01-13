import { PixelRatio, StyleSheet, Dimensions } from 'react-native'
import { COLOR_GRAY_F3F3F3, COLOR_SECOND_COLOR } from "../constant/ColorConstant";

const ShiftStyle = StyleSheet.create({

    ShiftStyle_view1: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        width: 600,
        marginTop: 45,
        marginBottom: 65,
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        elevation: 2,
        alignItems: 'center'
    },

    ShiftStyle_view2: {
        height: 40,
        width: 570,
        marginTop: 5,
        flexDirection: 'row',
        borderColor: '#3e8492',
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ShiftStyle_view3:{
        flex: 1, 
        width: 570, 
        marginTop: 10, 
        marginBottom: 10 
    },
    ShiftStyle_view4:{
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 15, 
        paddingRight: 15, 
        flex: 1, 
        borderColor: '#3e8492', 
        borderRadius: 5, 
        borderWidth: 1 
    },
    ShiftStyle_view5:{
        flex: 1, 
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    }

})

module.exports = ShiftStyle