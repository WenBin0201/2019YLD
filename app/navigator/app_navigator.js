import {
    createMaterialTopTabNavigator,
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation'

import Login from '../page/login/Login'
import PgHome from '../page/home/PgHome'
import Setting from '../page/test/Setting'
import Detail from '../page/test/Detail'
import PgSettle from '../page/home/receipts/PgSettle' //结算页面
import TakeBillBoxContainer from '../component/takebill/TakeBillBoxContainer'
import ShiftRecord from '../page/login/ShiftRecord'

/**
 * 登录模块
 */
const LoginStack = createStackNavigator(
    {
        Login: Login,
        ShiftRecord: ShiftRecord,
    },
    {
        navigationOptions: {},
        headerMode: 'none',
        transitionConfig: TransitionConfiguration
    }
);

/**
 * 主页模块
 */
const HomeStack = createStackNavigator(
    {
        PgHome: PgHome,
        PgSettle: PgSettle,
        Detail: Detail,
        Setting: Setting,
        TakeBillBoxContainer: TakeBillBoxContainer,
    },
    {
        navigationOptions: {},
        headerMode: 'none',
        transitionConfig: TransitionConfiguration
    }
);


export const AppNavigator = createSwitchNavigator({
    HomeStack: HomeStack,
    LoginStack: LoginStack
})


/**
 * 页面统一跳转动画
 * 默认右进左出
 * 从底部弹入（this.props.navigate('ScreenKey', { transition: 'forVertical' });）；
 */
const TransitionConfiguration = () => ({
    screenInterpolator: (sceneProps) => {
        const {scene} = sceneProps;
        const {route} = scene;
        const params = route.params || {};
        const transition = params.transition || 'forHorizontal';
        return StackViewStyleInterpolator[transition](sceneProps);
    }
});
