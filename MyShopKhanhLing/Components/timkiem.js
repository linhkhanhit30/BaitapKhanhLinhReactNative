import React, { Component } from 'react';
import {ScrollView,Text, View ,StyleSheet, FlatList,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
export default class TimKiem extends Component {
  
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
  constructor(props)
  {
    super(props);
    this.state={
      LinhTimKiem: '',
      LinhGiaRe: []
    }
  }
  //FlatList thế éo nào lại thành FIleList :)  :v
  fetchData()
  {
    const  {LinhTimKiem} = this.state;
    const API = 'http://192.168.1.92:8080/ApiReactNative/timkiem.php?s='+LinhTimKiem;
    fetch(API)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({LinhGiaRe: responseJson});
        console.log(this.state.LinhGiaRe);
        return responseJson;
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    return (
      <ScrollView style={ style.khung}>
          <Input
            inputStyle={{fontSize: 13}}
            placeholder='Túi Dior đang giảm giá 20%' placeholderTextColor="black" 
            onChangeText={(LinhTimKiem) => this.setState({LinhTimKiem})}
          />
          <Button
            buttonStyle={{borderWidth: 0, width: 100}}
            title="Tìm kiếm"
            type="outline"
            onPress={() => this.fetchData()}
          />
          <View>
            <FlatList
              data={this.state.LinhGiaRe}
              renderItem={({item}) =>(
                <View style={{justifyContent: 'center',alignItems: 'center', borderBottomColor:'white',borderBottomWidth:1,flex:1,flexDirection:'row'}}>
              
                <View style={{flex:1,}}>
                   <Image style={{width:150,height:250,marginLeft:10}} source={{uri: item.hinhanh}} />
                </View>
                <View  style={{flex:1,}} >
                      <Text style={{fontSize:17}}>{item.tensp }</Text>
                                      <Text style={{marginTop:14}}> Giá : {item.gia} $</Text>
                                      
                </View>
               
                </View>
              )
            
            }
            />
          </View>
      </ScrollView>
    );
  }
}
const style = StyleSheet.create({
    khung:{
        flex:1,
        flexDirection: 'column',
        
    },
    ipuser:{
        height: 36,width:320, borderColor: 'gray', borderWidth: 1,justifyContent: 'center',marginLeft:30,marginBottom:5,backgroundColor:'white'
         
     },
})