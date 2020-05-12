import  React, {useState} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, Icon, Button, SocialIcon, Divider, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function SecurityRegister() {
  const [hidePassword, setHidePassword] = useState(true)
  const [hideConfirmationPassword, setConfirmationHidePassword] = useState(true)
  const navigation = useNavigation();

  return(
    <ScrollView>
      <View style={styles.formContainer}>

        <View style={styles.textView}>
          <Text style={styles.title}>Security</Text>
        </View>

        <View style={styles.textView}>
          <Text>Your Password</Text>
        </View>
        <Input
          containerStyle={styles.inputForm}
          placeholder="Password"


          secureTextEntry
          password={true}
          secureTextEntry={hidePassword}
          rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={()=>setHidePassword(!hidePassword)}
          />
        }
        />

        <View style={styles.textView}>
          <Text>Repeat your Password</Text>
        </View>
        <Input
          containerStyle={styles.inputForm}
          placeholder="Password"


          secureTextEntry
          password={true}
          secureTextEntry={hideConfirmationPassword}
          rightIcon={
          <Icon
            type="material-community"
            name={hideConfirmationPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={()=>setConfirmationHidePassword(!hideConfirmationPassword)}
          />
        }
        />



        <Button
          containerStyle={styles.button}
          buttonStyle={{backgroundColor:"#00a680"}}
          iconRight
          icon={
            <Icon
              name="check"
              size={25}
              color="white"
              iconStyle={{marginLeft:5}}
            />
          }
          title="Save"
        />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  formContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop:30
  },
  inputForm:{
    width:"85%",
    marginTop:0
  },
  iconRight:{
    color:"#c1c1c1"
  },
  button:{
    width:"80%",
    marginTop:30,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
  },
  textView:{
    width:"80%",
    marginTop:20
  }
})
