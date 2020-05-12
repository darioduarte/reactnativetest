import * as React from 'react';
import { Button, Text, TextInput, View, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';


export default function stories(props) {

  return(
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor:"white", borderBottomWidth:1, borderBottomColor:"rgba(0,0,0,.05)"}}>
      {
        props.list.map((l, i) => (
          <View style={{flex:1, justifyContent:"center", alignItems:"center", marginTop:5, marginBottom:10}}>
            <Avatar
              rounded
              source={{uri:l.avatar_url}}
              size="medium"
              containerStyle={{margin:5}}
              onLongPress={()=>alert("Add a new history")}
              />
              <Text style={{fontSize:12}}>{l.name}</Text>
          </View>
        ))
      }
    </ScrollView>
  )
}
