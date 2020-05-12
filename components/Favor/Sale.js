import React, {useState} from 'react';
import { Text, TextInput, View, ScrollView, Picker } from 'react-native';
import { Avatar, Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Sale() {

  const [country, setCountry] = useState()
  const navigation = useNavigation();

  return(
    <View style={{flex:1,width:"100%",justifyContent:"flex-start", alignItems:"center", backgroundColor:"white"}}>
    <ScrollView style={{width:"100%"}}>
      <View style={{width:"100%",justifyContent:"center", alignItems:"center"}}>
          <Text style={{width:"90%",fontSize:25, marginTop:20, marginLeft:30,textAlign:"left"}}>Sale</Text>
          <View style={{width:"90%", justifyContent:"flex-start"}}>
            <Text style={{width:"90%",fontSize:20, marginTop:20,marginLeft:15, textAlign:"left"}}>Request</Text>
            <Input
              multiline
              numberOfLines={5}
            />
            <Text style={{width:"90%",fontSize:20, marginTop:20,marginLeft:15, textAlign:"left"}}>Pay method</Text>
            <View>
              <Picker
                selectedValue={country}
                onValueChange={(itemValue, itemIndex) =>
                  setCountry(itemValue)
                }
                style={{ width: "100%", marginLeft:5 }}
              >
                <Picker.Item label="Selected pay method" value="0" color="rgba(0,0,0,.5)" />
                <Picker.Item label="Credit card" value="Credit card"/>
                <Picker.Item label="Debit card" value="Debit card" />
              </Picker>
            </View>
            <Text style={{width:"90%",fontSize:20, marginTop:20,marginLeft:15, textAlign:"left"}}>Request value</Text>
            <Input
              keyboardType="number-pad"
              placeholder='Write value of the request.'
            />
            <Text style={{width:"90%",fontSize:20, marginTop:20,marginLeft:15, textAlign:"left"}}>shipping value</Text>
            <Text style={{width:"90%",fontSize:15, marginTop:20,marginLeft:15, textAlign:"left"}}>The minimum fee is 7 USD.</Text>
            <Input
              keyboardType="number-pad"
              placeholder='Write the value of your rate.'
            />
            <Button title="Sale" buttonStyle={{width:310, marginLeft:5, backgroundColor:"#00a680", justifyContent:"center",marginTop:10, marginBottom:20}} containerStyle={{marginTop:10}} onPress={()=>navigation.navigate('ConfirmSMS')}/>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
