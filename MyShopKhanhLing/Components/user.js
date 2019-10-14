import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';

export default class User extends Component {
  constructor(){
    super();
    this.state={hoten:'Nguyễn Khánh Linh',sdt:'0965774036',dc:'Z115, p. Tân Thịnh, Tp Thái Nguyên'}
  }
  render() {
    return (
      <View  style={{flex:1 ,backgroundColor:'#EE6363',  borderWidth:1,borderColor:'white'}}>
      <View  style={{flex:2,justifyContent: 'center',alignItems: 'center'}}>
          <Image style={{width:150,height:150,borderRadius:64}}source={require("../src/anh/anhbia.jpg")} />
          <Text style={{color:'white'}}>{this.state.hoten}</Text>
          <Text style={{color:'white'}}>{this.state.sdt}</Text>
          <Text style={{color:'white'}}>{this.state.dc}</Text>
      </View>
     
  </View>
    );
  }
}
