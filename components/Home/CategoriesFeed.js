import * as React from 'react';
import { Input, Icon, Button, SocialIcon, Divider, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TextInput, View, ScrollView, Image } from 'react-native';


export default function CategoriesFeed(props) {

  const navigation = useNavigation();

  return(
    <ScrollView>
      <View style={{width:"100%", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
        <View style={{borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)", width:"100%"}}><Text style={{fontSize:20, margin:10}}>Recommended for Felipe</Text></View>

        <View style={{width:"100%",height:150, flexDirection:"row", justifyContent:"center", alignItems:"center", borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)"}}>
          <View style={{width:"35%", justifyContent:"center", alignItems:"center"}}>
            <View style={{borderRadius:15}}>
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
              style={{ width: 80, height: 80, borderRadius:10 }}
            />
            </View>
          </View>
          <View style={{width:"50%"}}>
            <Text style={{fontSize:15, fontWeight:'bold'}} onPress={()=>navigation.navigate('ProfileCustomer')}>FreshClean</Text>
            <Text>Company for cleaning houses, offices an others</Text>
            <View style={{width:"100%",alignContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-half" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-border"  color="green" containerStyle={{width:20, margin:5}}/>
              <Text> (100)</Text>
            </View>
          </View>
        </View>

        <View style={{width:"100%",height:150, flexDirection:"row", justifyContent:"center", alignItems:"center", borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)"}}>
          <View style={{width:"35%", justifyContent:"center", alignItems:"center"}}>
            <View style={{borderRadius:15}}>
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
              style={{ width: 80, height: 80, borderRadius:10 }}
            />
            </View>
          </View>
          <View style={{width:"50%"}}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>FreshClean</Text>
            <Text>Company for cleaning houses, offices an others</Text>
            <View style={{width:"100%",alignContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-half" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-border"  color="green" containerStyle={{width:20, margin:5}}/>
              <Text> (100)</Text>
            </View>
          </View>
        </View>

        <View style={{width:"100%",height:150, flexDirection:"row", justifyContent:"center", alignItems:"center", borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)"}}>
          <View style={{width:"35%", justifyContent:"center", alignItems:"center"}}>
            <View style={{borderRadius:15}}>
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
              style={{ width: 80, height: 80, borderRadius:10 }}
            />
            </View>
          </View>
          <View style={{width:"50%"}}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>FreshClean</Text>
            <Text>Company for cleaning houses, offices an others</Text>
            <View style={{width:"100%",alignContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-half" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-border"  color="green" containerStyle={{width:20, margin:5}}/>
              <Text> (100)</Text>
            </View>
          </View>
        </View>

        <View style={{width:"100%",height:150, flexDirection:"row", justifyContent:"center", alignItems:"center", borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)"}}>
          <View style={{width:"35%", justifyContent:"center", alignItems:"center"}}>
            <View style={{borderRadius:15}}>
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
              style={{ width: 80, height: 80, borderRadius:10 }}
            />
            </View>
          </View>
          <View style={{width:"50%"}}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>FreshClean</Text>
            <Text>Company for cleaning houses, offices an others</Text>
            <View style={{width:"100%",alignContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-half" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-border"  color="green" containerStyle={{width:20, margin:5}}/>
              <Text> (100)</Text>
            </View>
          </View>
        </View>

        <View style={{width:"100%",height:150, flexDirection:"row", justifyContent:"center", alignItems:"center", borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)"}}>
          <View style={{width:"35%", justifyContent:"center", alignItems:"center"}}>
            <View style={{borderRadius:15}}>
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
              style={{ width: 80, height: 80, borderRadius:10 }}
            />
            </View>
          </View>
          <View style={{width:"50%"}}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>FreshClean</Text>
            <Text>Company for cleaning houses, offices an others</Text>
            <View style={{width:"100%",alignContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-half" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-border"  color="green" containerStyle={{width:20, margin:5}}/>
              <Text> (100)</Text>
            </View>
          </View>
        </View>

        <View style={{width:"100%",height:150, flexDirection:"row", justifyContent:"center", alignItems:"center", borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)"}}>
          <View style={{width:"35%", justifyContent:"center", alignItems:"center"}}>
            <View style={{borderRadius:15}}>
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
              style={{ width: 80, height: 80, borderRadius:10 }}
            />
            </View>
          </View>
          <View style={{width:"50%"}}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>FreshClean</Text>
            <Text>Company for cleaning houses, offices an others</Text>
            <View style={{width:"100%",alignContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-half" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-border"  color="green" containerStyle={{width:20, margin:5}}/>
              <Text> (100)</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}
