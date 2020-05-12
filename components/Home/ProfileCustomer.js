import * as React from 'react';
import { Input, Icon, SocialIcon, Divider, Text, Button, Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput, View, ScrollView, Image } from 'react-native';
import TabProfile from '../Home/TabProfile.js';


export default function SearchButton(props) {

  const navigation = useNavigation();

  return(
    <>
      <ScrollView>
        <View style={{width:"100%", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
          <Image
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
            style={{ width: "100%", height: 200}}
          />
          <View style={{width:"95%",flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <Text style={{width:"50%",marginLeft:5,marginTop:10,marginBottom:0, fontSize:25}}>Andrea</Text>
            <Button
             title="Follow"
             buttonStyle={{height:30}}
             iconRight
             icon={
                <Icon
                  type="font-awesome"
                  name="heart"
                  size={15}
                  color="white"
                  iconStyle={{marginLeft:5}}
                />
              }
            />
          </View>
          <View style={{width:"95%", marginLeft:10, flexDirection:"row"}}>
            <Text style={{marginBottom:5}}>Verified for BestOne</Text>
            <Icon
              name='check'
              type='font-awesome'
              color='green'
              size={15}
              iconStyle={{marginLeft:2, marginTop:2}}
              onPress={() => alert('Verified for BestOne')} />
          </View>
          <Text style={{width:"95%", marginLeft:10, fontSize:15, color:"rgba(0,0,0,.9)"}}>Software developer</Text>
          <Text style={{width:"95%", marginLeft:10, fontSize:12, color:"rgba(0,0,0,.5)"}}>New York, NY</Text>
          <View style={{flexDirection:"row",justifyContent:"flex-start",width:"95%", marginTop:5, marginLeft:10}}>
            <Text style={{fontSize:20, color:"green"}}>Open | </Text>
            <Text style={{fontSize:20}}>9:00 am - 11:00 pm</Text>
          </View>
          <View style={{width:"95%", flexDirection:"row", justifyContent:"space-around",alignItems:"center", borderTopWidth:1, marginTop:10}}>
            <View style={{marginTop:10, flexDirection:"column", alignItems:"center"}}>
              <Icon
                name='heart'
                type='font-awesome'
                color='#f50'
                size={25}
                onPress={() => console.log('hello')} />
                <Text style={{fontSize:20}}>5</Text>
                <Text>Followers</Text>
            </View>

            <View style={{marginTop:10, flexDirection:"column", alignItems:"center"}}>
              <Icon
                name='panorama-fish-eye'
                color='#3f51b5'
                size={25}
                onPress={() => console.log('hello')} />
                <Text style={{fontSize:20}}>20</Text>
                <Text>Views</Text>
            </View>

            <View style={{marginTop:10, flexDirection:"column", alignItems:"center"}}>
              <Icon
                name='exchange'
                type='font-awesome'
                color='#2196f3'
                size={25}
                onPress={() => console.log('hello')} />
                <Text style={{fontSize:20}}>5</Text>
                <Text>Services</Text>
            </View>

            <View style={{marginTop:10, flexDirection:"column", alignItems:"center"}}>
              <Icon
                name='comment-o'
                type='font-awesome'
                color='#00695c'
                size={25}
                onPress={() => console.log('hello')} />
                <Text style={{fontSize:20}}>5</Text>
                <Text>Post</Text>
            </View>

          </View>
          <View style={{width:"95%", marginTop:10, paddingLeft:5, borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)", paddingBottom:10}}>
            <Text style={{fontSize:20,borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,1)"}}>Official description</Text>
            <Text style={{fontSize:15, marginTop:10,textAlign:"justify", color:"rgba(0,0,0,.7)"}}>
              I am a software developer 5 years ago, I dedicate myself to creating mobile apps, web pages and advising companies on informatics.
            </Text>
          </View>
        </View>

        <TabProfile/>
      </ScrollView>
      <View style={{width:"100%", justifyContent:"center",alignItems:"center", backgroundColor:"white"}}>
        <Button title="Chat now" containerStyle={{position: 'relative', left: 0, right: 0, bottom: 0, width:"95%", borderRadius:15}}/>
      </View>
    </>
  )
}
