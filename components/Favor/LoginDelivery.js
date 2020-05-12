import React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet, ScrollView, Image } from 'react-native';
import { Input, Icon, Button, SocialIcon, Divider  } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../Utils/AuthContext.js';


export default function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidePassword, setHidePassword] = useState(true)
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);
  const navigation = useNavigation();


  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <Text style={{margin:20}}>Bestone App</Text>
        <Input
          containerStyle={styles.inputForm}
          placeholder="E-mail"
          value={username}
          onChangeText={setUsername}
          rightIcon={
          <Icon
            type="material-community"
            name="email"
            iconStyle={styles.iconRight}
          />
        }
        />
        <Input
          containerStyle={styles.inputForm}
          placeholder="Password"
          value={password}
          onChange={e =>setPassword(e.nativeEvent.text)}
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

        <View style={{width:"80%", marginTop:20, marginLeft:0}}>
          <Text style={{color:"green"}} onPress={() => navigation.navigate('ForgotPassword')}>Fogot your password?</Text>
        </View>

        <Button containerStyle={styles.buttonSignIn} title="Sign in" onPress={() => navigation.navigate('DeliveryHome')} />
         <Divider style={{ backgroundColor: 'black' }} />
         <View style={{width:"80%", marginTop:30, marginBottom:10}}>
           <Text style={{color:"gray"}} onPress={()=>console.log("sign in")}>Do not have an account in Bestone?</Text>
         </View>
        <Button containerStyle={styles.button} buttonStyle={{backgroundColor:"#00a680"}} title="Sign Up" onPress={() => console.log("hoal")} />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  formContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30
  },
  inputForm:{
    width:"85%",
    marginTop:20
  },
  iconRight:{
    color:"#c1c1c1"
  },
  buttonSignIn:{
    width:"80%",
    marginTop:30
  },
  button:{
    width:"80%",
    marginTop:20,
  },
  buttonFacebook:{
    backgroundColor:"#3b5998",
    marginTop:20,
    color:"white"
  },
  distributionFacebook:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    width:"80%"
  }
})
