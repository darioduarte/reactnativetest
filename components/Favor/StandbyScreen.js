import * as React from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';
import { Avatar, Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function StandbyScreen() {

  const navigation = useNavigation();

  return(
    <View style={{flex:1,width:"100%",justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
      <Text style={{width:"90%",fontSize:25, marginTop:20, textAlign:"center"}}>looking for couriers nearby.</Text>
      <Icon
        raised
        name='crosshairs'
        type='font-awesome'
        color='blue'
        size={30}
        onPress={()=>navigation.navigate('Chat')}
         />
    </View>
  )
}
