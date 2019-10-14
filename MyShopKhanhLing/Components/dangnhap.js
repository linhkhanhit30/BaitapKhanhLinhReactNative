import React, { Component } from 'react';
import {   SafeAreaView,TextInput,
    StyleSheet,TouchableOpacity,
    ScrollView,Image, ImageBackground,
    View,Alert,
    Text,
    StatusBar, } from 'react-native';

export default class DangNhap extends Component {
    
  static navigationOptions = {
    headerStyle: {
    height:0
      
    },
  
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:'',
    };
  }
  
  _onPress(){
    const {username, password} = this.state;
        fetch('http://192.168.1.92:8080/ApiReactNative/dangnhap.php',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
              "username":username, 
              "password":password,
            })
        })
      .then((response) => response.json()) 
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,

        }, function(){
        
        });
        Alert.alert(responseJson)
        if(responseJson =='Đăng nhập thành công') return this.props.navigation.navigate('Homes')
     
       
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  

  render() {
    return (
      <View style={style.khung}>
        <ImageBackground source={require("../src/anh/anhbia.jpg")} style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={style.khung2}>
            <View style={style.khunglog}>

              <Text style={style.label}>User Name</Text>
              <TextInput onChangeText ={(username) => this.setState({username})}  placeholder=' abc@gamil.com' style={style.ipuser}/>
              <Text style={style.label}>PassWord</Text>
              <TextInput  onChangeText ={(password) => this.setState({password})}   secureTextEntry={true} style={style.ipuser}/>
            </View>

            <View style={style.bt}>
            <TouchableOpacity onPress = {this._onPress.bind(this)}>
              <View style={style.btlog}>
                   <Text style={{textAlign:'center',marginTop:7,color:'white'}}>Đăng Nhập</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Dangkis')}>
              <View style={style.btlog}>
                   <Text style={{textAlign:'center',marginTop:7,color:'white'}}>Đăng Kí</Text>
              </View>
          </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>




    </View>
    );
  }
}
const style = StyleSheet.create({
  khung:{
      flex:1,
      alignItems: 'center'
  },
  khung1:{

  },
  label:{
color:'white',fontSize:17
  },
  khung2:{
      backgroundColor:'rgba(255,255,255,0)',justifyContent: 'center',alignItems: 'center'
  },
  khung3:{
      backgroundColor:'red'
  },
  ipuser:{
      borderRadius:14,height: 35,width:220, borderColor: 'white', borderWidth: 1
  },
  bt:{
      
      flexDirection:'row'
  },
  btlog:{
      width:110,height:40,backgroundColor:'gray',marginTop:5,borderRadius:14,opacity:0.8,marginLeft:8
  }

})