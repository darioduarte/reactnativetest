import * as React from 'react';
import { Button, Text, TextInput, View, ScrollView } from 'react-native';
import { Avatar, ListItem, Image, Icon } from 'react-native-elements';


export default function NewsFeed(props) {

  return(
    <View style={{backgroundColor:"white"}}>
      <Text style={{fontSize:25, marginLeft:5}}>News in BestOne</Text>
      <Text style={{fontSize:13, marginLeft:5, marginBottom:10}}>Recommended for you in your area</Text>
      <View style={{marginBottom:20}}>
            <ListItem
              key={0}
              leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
              rightIcon={{ name: "add-location", color:"blue" }}
              title="Felipe"
              subtitle="Clean Company"
              bottomDivider
            />
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
              style={{ width: "100%", height: 200 }}
            />
            <View style={{width:"100%",alignContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-half" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-border"  color="green" containerStyle={{width:20, margin:5}}/>
              <Text> (100)</Text>
            </View>
            <Text style={{marginTop:5, color:"rgba(0,0,0,.7)", marginLeft:5}}>New offers in a clean houses and offices, visit my profile</Text>
      </View>

      <View style={{marginBottom:20}}>
            <ListItem
              key={0}
              leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
              rightIcon={{ name: "add-location", color:"blue" }}
              title="Felipe"
              subtitle="Clean Company"
              bottomDivider
            />
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
              style={{ width: "100%", height: 200 }}
            />
            <View style={{width:"100%",alignContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-half" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-border"  color="green" containerStyle={{width:20, margin:5}}/>
              <Text> (100)</Text>
            </View>
            <Text style={{marginTop:5, color:"rgba(0,0,0,.7)", marginLeft:5}}>New offers in a clean houses and offices, visit my profile</Text>
      </View>

      <View style={{marginBottom:20}}>
            <ListItem
              key={0}
              leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
              rightIcon={{ name: "add-location", color:"blue" }}
              title="Felipe"
              subtitle="Clean Company"
              bottomDivider
            />
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
              style={{ width: "100%", height: 200 }}
            />
            <View style={{width:"100%",alignContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-half" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-border"  color="green" containerStyle={{width:20, margin:5}}/>
              <Text> (100)</Text>
            </View>
            <Text style={{marginTop:5, color:"rgba(0,0,0,.7)", marginLeft:5}}>New offers in a clean houses and offices, visit my profile</Text>
      </View>

      <View style={{marginBottom:20}}>
            <ListItem
              key={0}
              leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
              rightIcon={{ name: "add-location", color:"blue" }}
              title="Felipe"
              subtitle="Clean Company"
              bottomDivider
            />
            <Image
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
              style={{ width: "100%", height: 200 }}
            />
            <View style={{width:"100%",alignContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-half" color="green" containerStyle={{width:20, margin:5}}/>
              <Icon name="star-border"  color="green" containerStyle={{width:20, margin:5}}/>
              <Text> (100)</Text>
            </View>
            <Text style={{marginTop:5, color:"rgba(0,0,0,.7)", marginLeft:5}}>New offers in a clean houses and offices, visit my profile</Text>
      </View>

    </View>
  )
}
