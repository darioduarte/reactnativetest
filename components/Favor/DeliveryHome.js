import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Avatar, Button, Icon, Badge } from 'react-native-elements';
import { Text, View, ScrollView, Image } from 'react-native';
import { ActivityIndicator } from 'react-native';


function Services() {

  const navigation = useNavigation();

  return (
    <View style={{backgroundColor:"white",justifyContent: 'center', alignItems: 'center'}}>

      <View style={{width:"100%", padding:10, flexDirection:"row", justifyContent:"space-around", alignItems:"center", height:70, borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)"}}>
        <Avatar rounded title="A" />
        <View>
          <Text style={{fontSize:15, textAlign:"left"}} onPress={()=>navigation.navigate('Chat')}>Arthur</Text>
          <Text style={{fontSize:12, }}>2 miles of distance</Text>
        </View>
        <View styles={{marginTop:5}}>
          <Text style={{fontSize:15, textAlign:"center"}}>15:11</Text>
          <Badge value="1+" status="success" textStyle={{textAlign:"right"}} />
        </View>
        <View>
          <Button title="accept"/>
        </View>
      </View>

      <View style={{width:"100%", padding:10, flexDirection:"row", justifyContent:"space-around", alignItems:"center", height:70, borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)"}}>
        <Avatar rounded title="A" />
        <View>
          <Text style={{fontSize:15, textAlign:"left"}}>Andrea</Text>
          <Text style={{fontSize:12, }}>3 miles of distance</Text>
        </View>
        <View styles={{marginTop:5}}>
          <Text style={{fontSize:15, textAlign:"center"}}>15:12</Text>
          <Badge value="1+" status="success" textStyle={{textAlign:"right"}} />
        </View>
        <View>
          <Button title="accept"/>
        </View>
      </View>

      <View style={{width:"100%", padding:10, flexDirection:"row", justifyContent:"space-around", alignItems:"center", height:70, borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)"}}>
        <Avatar rounded title="A" />
        <View>
          <Text style={{fontSize:15, textAlign:"left"}}>Alfred</Text>
          <Text style={{fontSize:12, }}>4 miles of distance</Text>
        </View>
        <View styles={{marginTop:5}}>
          <Text style={{fontSize:15, textAlign:"center"}}>15:15</Text>
          <Badge value="1+" status="success" textStyle={{textAlign:"right"}} />
        </View>
        <View>
          <Button title="accept"/>
        </View>
      </View>



      <View style={{width:"100%", padding:10, flexDirection:"row", justifyContent:"space-around", alignItems:"center", height:70, borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)"}}>
        <Avatar rounded title="A" />
        <View>
          <Text style={{fontSize:15, textAlign:"left"}}>Anthony</Text>
          <Text style={{fontSize:12, }}>5 miles of distance</Text>
        </View>
        <View styles={{marginTop:5}}>
          <Text style={{fontSize:15, textAlign:"center"}}>15:20</Text>
          <Badge value="1+" status="success" textStyle={{textAlign:"right"}} />
        </View>
        <View>
          <Button title="accept"/>
        </View>
      </View>

    </View>
  );
}

function Post() {
  return (
    <View style={{flexDirection:"column",justifyContent: 'center', alignItems: 'center', marginTop:10, backgroundColor:"white"}}>

      <View style={{width:"100%", padding:10, flexDirection:"row", justifyContent:"space-around", alignItems:"center", height:70, borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.1)"}}>
        <Avatar rounded title="A" />
        <View>
          <Text style={{fontSize:15, textAlign:"left"}}>Anthony</Text>
          <Text style={{fontSize:12, }}>Complete</Text>
        </View>
        <View styles={{marginTop:5}}>
          <Text style={{fontSize:15, textAlign:"center"}}>15:20</Text>
          <Text style={{fontSize:15, textAlign:"center"}}>20/3/20</Text>
        </View>
        <View>
          <Button title=" ok "/>
        </View>
      </View>

    </View>
  );
}

function Reviews() {
  return(
      <ScrollView>
        <View style={{width:"100%", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
          <Image
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
            style={{ width: "100%", height: 200}}
          />
          <View style={{width:"95%",flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <Text style={{width:"50%",marginLeft:5,marginTop:10,marginBottom:0, fontSize:25}}>Andrea</Text>
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
          <Text style={{width:"95%", marginLeft:10, fontSize:12, color:"rgba(0,0,0,.5)"}}>New York, NY</Text>
          <View style={{flexDirection:"row",justifyContent:"flex-start",width:"95%", marginTop:5, marginLeft:10}}>
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
            <Text style={{fontSize:20,borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,1)"}}>Data</Text>
          </View>
        </View>
      </ScrollView>
  )
}

const Tab = createMaterialTopTabNavigator();

export default function TabProfile() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Services" component={Services} />
        <Tab.Screen name="History" component={Post} />
        <Tab.Screen name="Reviews" component={Reviews} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
