import React, { Component } from 'react';
import {  SafeAreaView,TextInput,
  StyleSheet,TouchableOpacity,
  ScrollView,Image, ImageBackground,
  View,Alert,
  Text,
  StatusBar,} from 'react-native';


export default class Dangki extends Component {

  static navigationOptions = {
    title: 'Đăng Nhập',
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
  constructor(props) {
    super(props);
    this.state = {
        username: '',
      password:'',
      sdt:'',
      diachi:'',
    };
  }
  dangki(){
    const {username, password, sdt , diachi} = this.state;
        fetch('http://192.168.1.92:8080/ApiReactNative/dangki.php',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
              "username":username, 
              "password":password,
              "sdt":sdt,
              "diachi":diachi,
            })
        })
      .then((response) => response.json()) 
      .then((responseJson) => {
        Alert.alert(responseJson)
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    return (
      <View style={ style.khung}>
      <ImageBackground source={require("../src/anh/anhbiadangki.jpg")} style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
  <View>
      <Text style={{color:'black',fontSize:17}}>User Name</Text>
      <TextInput onChangeText ={(username) => this.setState({username})} placeholder=' abc@gamil.com' style={style.ipuser}/>
  </View>
  <View>
      <Text style={{color:'black',fontSize:17}}>PassWord</Text>
      <TextInput onChangeText ={(password) => this.setState({password})} secureTextEntry={true}  placeholder=' abc@gamil.com' style={style.ipuser}/>
  </View>
  <View>
      <Text style={{color:'black',fontSize:17}}>Số Điện Thoại</Text>
      <TextInput onChangeText ={(sdt) => this.setState({sdt})}  placeholder=' abc@gamil.com' style={style.ipuser}/>
  </View>
  <View>
      <Text style={{color:'black',fontSize:17}}>Địa Chỉ</Text>
      <TextInput onChangeText ={(diachi) => this.setState({diachi})}   placeholder=' Số nhà, phường , tỉnh thành phố' style={style.ipuser}/>
  </View>
  <TouchableOpacity  onPress = {this.dangki.bind(this)}
   style={{marginTop:15,borderRadius:14,justifyContent: 'center',alignItems: 'center', height: 35,width:220,backgroundColor:'#ae0105'}}>
      <Text style={{ color:'white', fontSize:17}}>Đăng Kí</Text>
  </TouchableOpacity>
  </ImageBackground>
  
</View>
    );
  }
}
const style = StyleSheet.create({
  khung:{
      justifyContent: 'center',alignItems: 'center',flex:1,
  },
  ipuser:{
      borderRadius:14,height: 35,width:220, borderColor: 'white', borderWidth: 3/2,
  },
  bt:{
          
      flexDirection:'row'
  },
  btlog:{
      width:110,height:40,backgroundColor:'gray',marginTop:5,borderRadius:14,opacity:0.7
  }
  });