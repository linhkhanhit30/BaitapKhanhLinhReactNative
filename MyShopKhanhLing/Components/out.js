import React, { Component } from 'react';
import {  SafeAreaView,TextInput,
  StyleSheet,TouchableOpacity,
  ScrollView,Image, ImageBackground,
  View,Alert,
  Text,
  StatusBar,} from 'react-native';

export default class Out extends Component {
  static navigationOptions = {
    title: 'Trang Chủ',
    headerStyle: {
      backgroundColor: '#ae0105',
      height: 50,
    },
    headerTintColor: '#fff',
headerTitleStyle: {
fontWeight: 'bold',
marginLeft: 90
},
  
  };
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <View style={{flexDirection:'row',borderColor:'gray',borderBottomWidth:1}} >
            <Image  style={{width:35,height:39,marginLeft:10 ,marginTop:10}} source ={require("../src/anh/iconcaidat.jpg")}/>
            <Text style={{fontSize:17,marginTop:17,marginLeft:10}}>Cài Đặt</Text>
          </View>
          <View  style={{flex:1}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('DangNhaps')}>
              <View style={{flexDirection:'row',}} >
               <Image  style={{width:35,height:39,marginLeft:10 ,marginTop:10}} source ={require("../src/anh/icondangx.jpg")}/>
                <Text style={{fontSize:17,marginTop:17,marginLeft:10,color:'red'}}>Đăng Xuất</Text>
              </View>
            </TouchableOpacity>
           
          </View>
        </View>

        <View  style={{flex:1}}>
        </View>
      </View>
    );
  }
}
