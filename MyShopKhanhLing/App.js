import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Home from './Components/home';
import DangNhap from './Components/dangnhap';
import AppNavigator from './Components/route';
import User from './Components/user';

export default class HelloWorldApp extends Component {
  render() {
    return (
     <AppNavigator/>
    );
  }
}
