import * as React from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';
import { Avatar, Button, Icon, Input, Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Chat() {

  const navigation = useNavigation();

  return(
    <View style={{flex:1,width:"100%",justifyContent:"space-between", alignItems:"center", backgroundColor:"transparent"}}>

      <View style={{width:"100%",flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"white", height:50}}>
        <Icon
          name='chevron-left'
          type='font-awesome'
          color='black'
          size={20}
          onPress={()=>navigation.goBack('Chat')}
           />
        <View style={{width:"50%"}}>
          <Text style={{fontSize:15,fontWeight:"bold",textAlign:"center",width:"100%"}}>Jack</Text>
        </View>
        <Icon
          name='home'
          color='black'
          size={20}
          onPress={()=>navigation.navigate('Sale')}
          />
      </View>

      <ScrollView style={{width:"100%", marginTop:10}}>
        <View style={{width:"100%"}}>

          <View style={{width:"95%", justifyContent:"flex-start", alignItems:"flex-start", margin:10}}>
            <View style={{width:"80%",backgroundColor:"rgba(0,0,0,.1)", alignItems:"center", borderRadius:10, padding:10}}>
              <Text style={{fontSize:15,fontWeight:"bold",textAlign:"left",width:"100%", marginLeft:0}}>Jack</Text>
              <Text style={{fontSize:15,textAlign:"justify"}}>Welcome to the BestOne chat, I am Dario, how can I help you?</Text>
              <Text style={{fontSize:15,textAlign:"right", width:"100%", color:"rgba(0,0,0,.7)"}}>15:11</Text>
            </View>
          </View>

          <View style={{flex:1,width:"100%", justifyContent:"flex-start", alignItems:"flex-end"}}>
            <View style={{backgroundColor:"white", alignItems:"flex-end", borderRadius:10, margin:10, padding:5}}>
              <Text style={{fontSize:15,fontWeight:'bold',textAlign:"center", padding:2}} numberOfLines={10}>Arthur</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2}} numberOfLines={10}>Wall street 100, ny</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2}} numberOfLines={10}>1 package of bread</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2}} numberOfLines={10}>1 package of milk</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2}} numberOfLines={10}>1 package of toiet paper</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2}} numberOfLines={10}>1 package glicerine</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2, color:"green"}} numberOfLines={10}>aprox 100 USD</Text>
              <Text style={{fontSize:15,textAlign:"right", width:"100%", color:"rgba(0,0,0,.7)",padding:2}}>15:12</Text>
            </View>
          </View>

          <View style={{width:"100%", justifyContent:"flex-start", alignItems:"flex-start", margin:10}}>
            <View style={{width:"80%",backgroundColor:"rgba(0,0,0,.1)", alignItems:"center", borderRadius:10, padding:10}}>
              <Text style={{fontSize:15,fontWeight:"bold",textAlign:"left",width:"100%", marginLeft:0}}>Jack</Text>
              <Text style={{fontSize:15,textAlign:"justify"}}>Would you like to pay by cash, credit or debit card?</Text>
              <Text style={{fontSize:15,textAlign:"right", width:"100%", color:"rgba(0,0,0,.7)"}}>15:13</Text>
            </View>
          </View>

          <View style={{flex:1,width:"100%", justifyContent:"flex-start", alignItems:"flex-end"}}>
            <View style={{backgroundColor:"white", alignItems:"flex-start", borderRadius:10, margin:10, padding:5}}>
              <Text style={{fontSize:15,fontWeight:'bold',textAlign:"center", padding:2}} numberOfLines={10}>Arthur</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2}} numberOfLines={10}>crédit card</Text>
              <Text style={{fontSize:15,textAlign:"right", width:"100%", color:"rgba(0,0,0,.7)",padding:2}}>15:12</Text>
            </View>
          </View>

          <View style={{flex:1,width:"100%", justifyContent:"flex-start", alignItems:"flex-start"}}>
            <View style={{backgroundColor:"rgba(0,0,0,.1)", alignItems:"flex-start", borderRadius:10, margin:10, padding:5, borderWidth:1}}>
              <Text style={{fontSize:15,fontWeight:'bold',textAlign:"center", padding:2}} numberOfLines={10}></Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2}} numberOfLines={10}>1 package of bread</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2}} numberOfLines={10}>1 package of milk</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2}} numberOfLines={10}>1 package of toilet paper</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2}} numberOfLines={10}>1 package glicerine</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2}} numberOfLines={10}>Merchandise cost: 500 USD</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2}} numberOfLines={10}>Shipping: 10 USD</Text>
              <Text style={{fontSize:15,textAlign:"center", padding:2, color:"green"}} numberOfLines={10}>510 USD</Text>
              <Text style={{fontSize:15,textAlign:"right", width:"100%", color:"rgba(0,0,0,.7)",padding:2}}>15:12</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{width:"100%",flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"white"}}>
        <Icon
          name='camera'
          type='font-awesome'
          color='black'
          size={20}
          onPress={()=>navigation.navigate('Chat')}
           />
        <View style={{width:"50%"}}>
          <TextInput placeholder="White a message"/>
        </View>
        <Icon
          name='send'
          color='black'
          size={20}
          onPress={()=>navigation.navigate('Chat')}
          />
      </View>
    </View>
  )
}
