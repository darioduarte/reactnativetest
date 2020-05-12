import  React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, Icon, Button, SocialIcon, Divider  } from 'react-native-elements';

export default function ForgotPassword() {

    const [username, setUsername] = useState('');

  return(
    <View style={styles.formContainer}>
      <View style={styles.textView}>
        <Text style={styles.title}>Reset Password</Text>
      </View>
      <View style={styles.textView}>
        <Text>Enter the email address associated with your account, and we'll email you a link to reset your passwrod.</Text>
      </View>
      <Input
        containerStyle={styles.inputForm}
        placeholder="Type your email account"
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
      <Button containerStyle={styles.button} title="Send reset link" onPress={() => console.log("Recover passwrod")} />
    </View>
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
    marginTop:20
  },
  iconRight:{
    color:"#c1c1c1"
  },
  button:{
    width:"80%",
    marginTop:20,
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
