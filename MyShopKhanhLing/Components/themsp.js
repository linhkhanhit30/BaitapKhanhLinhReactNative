import React, { Component } from 'react';
import {  SafeAreaView,TextInput,
    StyleSheet,TouchableOpacity,
    ScrollView,Image, ImageBackground,
    View,Alert,
    Text,
    StatusBar,} from 'react-native';

export default class Them extends Component {

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
      constructor(props) {
        super(props);
        this.state = {
            tensp: '',
          mota:'',
          gia:'',
          hinhanh:'',
        };
      }
      themsp(){
        const {tensp, mota, gia , hinhanh} = this.state;
            fetch('http://192.168.1.92:8080/ApiReactNative/them.php',
            {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                  "tensp":tensp, 
                  "mota":mota,
                  "gia":gia,
                  "hinhanh":hinhanh,
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
        <ImageBackground source={require("../src/anh/anhbia3.jpg")} style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
    <View>
        <Text style={{color:'black',fontSize:17}}>Tên Sản Phẩm</Text>
        <TextInput onChangeText ={(tensp) => this.setState({tensp})}  placeholder=' abc@gamil.com' style={style.ipuser}/>
    </View>
    <View>
        <Text style={{color:'black',fontSize:15}}>Mô Tả</Text>
        <TextInput onChangeText ={(mota) => this.setState({mota})}  placeholder=' abc@gamil.com' style={style.ipuser}/>
    </View>
    <View>
        <Text style={{color:'black',fontSize:15}}>Giá Bán</Text>
        <TextInput onChangeText ={(gia) => this.setState({gia})} placeholder=' abc@gamil.com' style={style.ipuser}/>
    </View>
    <View>
        <Text style={{color:'black',fontSize:15}}>Hình ảnh</Text>
        <TextInput onChangeText ={(hinhanh) => this.setState({hinhanh})}   placeholder=' Số nhà, phường , tỉnh thành phố' style={style.ipuser}/>
    </View>
    <TouchableOpacity  onPress = {this.themsp.bind(this)}
     style={{marginTop:15,borderRadius:14,justifyContent: 'center',alignItems: 'center', height: 35,width:220,backgroundColor:'#ae0105'}}>
        <Text style={{ color:'white', fontSize:17}}>Thêm</Text>
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
       height: 35,width:220, borderColor: 'white', borderWidth: 3/2,
    },
    bt:{
            
        flexDirection:'row'
    },
    btlog:{
        width:110,height:40,backgroundColor:'gray',marginTop:5,borderRadius:14,opacity:0.7
    }
    });