import * as React from 'react';
import { Button, Text, TextInput, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import Stories from '../Home/Stories.js';
import Categories from '../Home/Categories.js';
import SearchButton from '../Home/SearchButton.js';
//import NewsFeed from '../Home/NewsFeed.js';
//import Favor from '../Home/Favor.js';

const list = [
  {
    name: 'Andrea ',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Andres ',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris ',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Jackson ',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris ',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Jackson ',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris ',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Jackson ',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris ',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

export default function RegisterStack() {
  return(
    <ScrollView>
      <View style={{backgroundColor:"white"}}>
        <Header
         centerComponent={{ text: 'BestOne', style: { color: '#555', marginBottom:25, fontSize:20} }}
         rightComponent={{ icon: 'search', color: 'rgba(0,0,0,.5)', marginBottom:30 }}
         containerStyle={{height:50, backgroundColor:"#fafafa", marginBottom:10, fontSize:20}}
        />
        <Stories list={list}/>
        <SearchButton/>
        <Categories/>
      </View>
    </ScrollView>
  )
}
