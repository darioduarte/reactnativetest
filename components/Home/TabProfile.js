import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Avatar, Image, Button, Icon } from 'react-native-elements';
import { Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native';


function Services() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={{backgroundColor:"white", marginTop:20, marginBottom:20,width:"95%"}}>
        <Image
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
          style={{ width: "100%", height: 200 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={{fontSize:20, margin:5}}>Landing page</Text>
        <Text style={{fontSize:15, margin:5, color:"rgba(0,0,0,.7)"}}>Design and programming landing page width 7 sections, with low cost domain and hosting per one year</Text>
        <View style={{alignItems:"flex-end", padding:10}}>
          <Text style={{fontSize:20, fontWeight:"bold",margin:5, color:"rgba(0,0,0,1)"}}>300 USD</Text>
          <Button title="ADD" buttonStyle={{width:100, marginBottom:10, marginLeft:5, backgroundColor:"#00a680"}}/>
        </View>
      </View>

    </View>
  );
}

function Post() {
  return (
    <View style={{flexDirection:"column",justifyContent: 'center', alignItems: 'center', marginTop:10, backgroundColor:"white"}}>
       <View style={{flexDirection:"row", justifyContent: 'flex-start', alignItems: 'center', width:"100%", borderBottomWidth:1, borderBottomColor:'rgba(0,0,0,.1)'}}>
        <Avatar
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          containerStyle={{marginLeft:10}}
        />
        <View style={{marginLeft:10}}>
          <Text style={{fontSize:15}}>Andrea</Text>
          <Text style={{fontSize:12, color:"rgba(0,0,0,.7)"}}>Software developer</Text>
        </View>
      </View>
      <Image
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        containerStyle={{ width: "100%", height: 200 }}
      />

      <View style={{width:"100%", flexDirection:"row", justifyContent:"flex-start", paddingTop:10, paddingBottom:10, backgroundColor:"#f5f5f5"}}>
        <Icon
          name='heart'
          type='font-awesome'
          color='#f50'
          onPress={() => console.log('hello')}
          iconStyle={{marginLeft:10}}
        />
        <Icon
          name='send'
          type='font-awesome'
          color='#2196f3'
          onPress={() => console.log('hello')}
          iconStyle={{marginLeft:10}}
        />
        <Icon
          name='comment'
          type='font-awesome'
          color='#2196f3'
          size={25}
          onPress={() => console.log('hello')}
          iconStyle={{marginLeft:10}}
        />
      </View>

      <View style={{marginLeft:10}}>
        <Text style={{fontSize:25}}>UI webpage</Text>
        <Text style={{fontSize:12, color:"rgba(0,0,0,.7)"}}>Complete design of webpage with icons, banners and 7 sections</Text>
      </View>

      <View style={{width:"100%",alignItems:"flex-end", padding:10}}>
        <Text style={{fontSize:20, fontWeight:"bold",margin:5, color:"rgba(0,0,0,1)"}}>300 USD</Text>
        <Button title="ADD" buttonStyle={{width:100, marginBottom:10, marginLeft:5, backgroundColor:"#00a680"}}/>
      </View>

    </View>
  );
}

function Reviews() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Reviews!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TabProfile() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Services" component={Services} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Reviews" component={Reviews} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
