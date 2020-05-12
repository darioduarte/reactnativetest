import * as React from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';
import { Avatar, Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmSMS() {

  const navigation = useNavigation();

  return(
    <View style={{flex:1,width:"100%",justifyContent:"flex-start", alignItems:"center", backgroundColor:"white"}}>
      <Text style={{width:"90%",fontSize:25, marginTop:20, textAlign:"left"}}>Confirm your number</Text>
      <View style={{width:"90%", justifyContent:"flex-start"}}>
        <Text style={{width:"90%",fontSize:20, marginTop:20,marginLeft:15, textAlign:"left", color:"rgba(0,0,0,.7)"}}>Confirm the 4-digit code BestOne just sent to 555-12345</Text>
        <View style={{width:"90%",flexDirection:"row", justifyContent:"space-around", marginTop:10}}>
          <Input
            keyboardType="number-pad"
            placeholder=''
            containerStyle={{width:50}}
          />
          <Input
            keyboardType="number-pad"
            placeholder=''
            containerStyle={{width:50}}
          />
          <Input
            keyboardType="number-pad"
            placeholder=''
            containerStyle={{width:50}}
          />
          <Input
            keyboardType="number-pad"
            placeholder=''
            containerStyle={{width:50}}
          />
        </View>
        <View style={{flexDirection:"row", marginTop:20}}>
          <Text style={{fontSize:20, marginTop:20,marginLeft:15, textAlign:"left",color:"rgba(0,0,0,.7)"}}>Didn't get a text?</Text>
          <Text style={{fontSize:20, marginTop:20,marginLeft:15, textAlign:"left", fontWeight:'bold'}} onPress={()=>navigation.navigate('Request')}>try again</Text>
        </View>
      </View>
    </View>
  )
}
