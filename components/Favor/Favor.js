import * as React from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';
import { Avatar, Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function Favor() {

  const navigation = useNavigation();

  return(
    <View style={{width:"100%",justifyContent:"space-around", alignItems:"center"}}>
      <Text style={{width:"80%",fontSize:25, marginTop:20, textAlign:"center"}}>BestOne</Text>
      <Text style={{width:"90%",fontSize:20, marginTop:20}}>Do you need to buy something or a favor?</Text>
      <Text style={{width:"90%",fontSize:15, marginTop:20, color:"rgba(0,0,0,.7)"}}>Press the button and in a few steps someone will assist you</Text>
      <Button title="Press and ask for a favor" buttonStyle={{width:330, marginLeft:5, backgroundColor:"#00a680", justifyContent:"center",marginTop:10}} containerStyle={{marginTop:20}} onPress={()=>navigation.navigate('SigInUser')}/>
        <Text style={{width:"90%",fontSize:20, marginTop:20}}>Do you want to work with us as a domiciliary ?<Text style={{fontSize:20, marginTop:20, color:"green"}}> Sign up</Text></Text>
      <Text style={{width:"90%",fontSize:15, marginTop:20, color:"rgba(0,0,0,.7)"}}>Share our service with your friends on social networks.</Text>
      <Button title="Sign in like a delivery" buttonStyle={{width:330, marginLeft:5, backgroundColor:"#2196f3", justifyContent:"center",marginTop:10}} containerStyle={{marginTop:20}} onPress={()=>navigation.navigate('LoginDelivery')}/>
      <View style={{flexDirection:"row", marginTop:20}}>
        <Icon
          raised
          name='instagram'
          type='font-awesome'
          color='#E1306C'
          onPress={() => console.log('hello')} />
          <Icon
            raised
            name='facebook'
            type='font-awesome'
            color='#3b5980'
            onPress={() => console.log('hello')} />
          <Icon
            raised
            name='share-alt'
            type='font-awesome'
            color='#9e9e9e'
            onPress={() => console.log('hello')} />
      </View>
    </View>
  )
}
