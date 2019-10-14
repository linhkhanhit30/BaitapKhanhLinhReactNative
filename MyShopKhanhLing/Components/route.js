import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DangNhap from './dangnhap'
import Home from './home'
import Out from './out'
import Dangki from './dangki'
import TimKiem from './timkiem'
import Them from './themsp'

const AppNavigator = createStackNavigator({

  DangNhaps:DangNhap,
  Dangkis :Dangki,
  Homes:Home,
  TimKiems :TimKiem,
  Outs:Out,
  Thems:Them
 

},
);

export default createAppContainer(AppNavigator);