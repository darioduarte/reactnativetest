import React, {useState} from 'react';
import { Text, TextInput, View, ScrollView, Picker } from 'react-native';
import { Avatar, Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function SigInUser() {
  const [country, setCountry] = useState()
  const navigation = useNavigation();

  return(
    <ScrollView>
      <View style={{width:"100%",justifyContent:"center", alignItems:"center"}}>

          <Text style={{width:"90%",fontSize:25, marginTop:20, marginLeft:30,textAlign:"left"}}>Sign in</Text>
          <View style={{width:"90%", justifyContent:"flex-start"}}>
            <Text style={{width:"90%",fontSize:20, marginTop:20,marginLeft:15, textAlign:"left"}}>Country</Text>
            <View>
              <Picker
                selectedValue={country}
                onValueChange={(itemValue, itemIndex) =>
                  setCountry(itemValue)
                }
                style={{ width: "100%", marginLeft:5 }}
                itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:30 }}
              >
                <Picker.Item label="Select country" value="0" color="rgba(0,0,0,.5)" />
                <Picker.Item label="+1 United states" value="+1"/>
                <Picker.Item label="+57 Colombia" value="+57" />
              </Picker>
            </View>
            <Text style={{width:"90%",fontSize:20, marginTop:20,marginLeft:15, textAlign:"left"}}>Phone number</Text>
            <Input
              keyboardType="number-pad"
              placeholder='Write your cellphone number'
            />
            <Text style={{width:"90%",fontSize:20, marginTop:20,marginLeft:15, textAlign:"left"}}>Fullname</Text>
            <Input
              placeholder='Write your Fullname'
            />
            <Text style={{width:"90%",fontSize:12, marginTop:20,marginLeft:15, textAlign:"justify"}}>We'll call or text you to confirm your number. Standard message and rates repply.By continuing I accept that I am over 21 years old, terms and conditions.</Text>
            <Button title="Log in" buttonStyle={{width:310, marginLeft:5, backgroundColor:"#00a680", justifyContent:"center",marginTop:10, marginBottom:20}} containerStyle={{marginTop:10}} onPress={()=>navigation.navigate('ConfirmSMS')}/>
          </View>

      </View>
    </ScrollView>
  )
}
