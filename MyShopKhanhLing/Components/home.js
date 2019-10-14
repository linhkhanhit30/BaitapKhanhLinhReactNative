import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ActivityIndicator,Alert,
  TextInput, StyleSheet} from 'react-native';
  import Drawer from 'react-native-drawer';
  import User from './user'
  import Outs from './out'

export default class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      height: 0,
    },
    
}
  
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.1.92:8080/ApiReactNative/product.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
  
    this._drawer.open()
  
  };
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style = {Styles.viewAll}>
           <View style={{flex:7 ,}}>
                   <Drawer
                         openDrawerOffset={0.3}
                         tapToClose={true}
                      ref={(ref) => this._drawer = ref}
                      content={
                        <User/>
                      }>


                    <TouchableOpacity onPress={()=>this.openControlPanel()}>
                      <Image  style={{width:30,height:30,padding:3}} source ={require("../src/anh/iconstack.png")}/>

                    </TouchableOpacity>
                    <TextInput placeholder=' What do you want to buy?' style={Styles.ipuser}/>

                         <View style={{flex:6,backgroundColor:"white",padding:5,justifyContent: 'center',alignItems: 'center'}}>
                             <FlatList
                             data={this.state.dataSource}
                             renderItem={({item}) => (
                                <TouchableOpacity onPress = {()=>Alert.alert(item.mota)}>
                                  <View  style = {Styles.viewItem}>
                                    <View style = {Styles.viewImage}>
                                    <Image style={{width:150,height:250,}} source={{uri: item.hinhanh}} />
                                    </View>
                                    <View style = {Styles.viewText}>
                                      <Text style={{fontSize:17}}>{item.tensp }</Text>
                                      <Text style={{marginTop:14}}> Giá : {item.gia} $</Text>
                                      <Text style={{marginTop:14}}> Mô Tả : {item.mota} </Text>

                                    
                                      <View style={{ flexDirection:'row'}}>
                                      <TouchableOpacity  onPress = {()=>Alert.alert('Facebook')}>
                                        <Image  style={{width:35,height:39,marginLeft:10,marginTop:20 }} source ={require("../src/anh/iconf.jpg")}/>
                                      </TouchableOpacity>
                                      <TouchableOpacity  onPress = {()=>Alert.alert('Twitter')}>
                                       <Image  style={{width:35,height:39,marginLeft:10,marginTop:20 }} source ={require("../src/anh/icontw.jpg")}/>
                                      </TouchableOpacity>
                                      <TouchableOpacity  onPress = {()=>Alert.alert('Instagram')}>
                                      <Image  style={{width:35,height:39,marginLeft:10,marginTop:20 }} source ={require("../src/anh/iconi.jpg")}/>
                                      </TouchableOpacity>
                                      
                                      </View>
                                    </View>
                                  </View>
                                </TouchableOpacity>
                                
                              )}
                          />
                           </View>
                  </Drawer>
                  
                </View>

            <View style={{flex:1/2,backgroundColor:'white',  borderWidth:1,borderColor:'gray',flexDirection:'row'}}>
               <Image  style={{width:35,height:39,marginLeft:10 }} source ={require("../src/anh/iconhome.jpg")}/>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('TimKiems')}>
                  <Image  style={{width:35,height:39,marginLeft:70}} source ={require("../src/anh/icontin.jpg")}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Thems')}>
                   <Image  style={{width:35,height:39,marginLeft:70}} source ={require("../src/anh/iconadd.jpg")}/>
              </TouchableOpacity>
            
               <TouchableOpacity onPress={()=>this.props.navigation.navigate('Outs')}> 
                   <Image  style={{width:32,height:39,marginLeft:82 }} source ={require("../src/anh/iconuser.png")}/>  
               </TouchableOpacity>
            
               
            </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  viewAll:{
      flex:1,
      backgroundColor:'#ae0105',
      flexDirection:'column'},

  viewItem:{padding:20, borderBottomColor:'white',borderBottomWidth:1,flex:1,flexDirection:'row'},
  viewImage:{},
  viewText:{ marginLeft:20, alignItems:'flex-start',marginTop:20},
  ipuser:{
     height: 36,width:320, borderColor: 'gray', borderWidth: 1,justifyContent: 'center',marginLeft:30,marginBottom:5,backgroundColor:'white'
      
  },
})
