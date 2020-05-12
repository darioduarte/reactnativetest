import  React, {useState} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, Icon, Button, SocialIcon, Divider, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {

  const navigation = useNavigation();

  return(
    <ScrollView>
      <View style={styles.formContainer}>

        <View style={styles.textView}>
          <Text style={styles.title}>Profile</Text>
        </View>

        <View style={styles.textView}>
          <Text>Your names</Text>
        </View>
        <Input
          containerStyle={styles.inputForm}
          placeholder="Type your names"
          rightIcon={
          <Icon

            name="person"
            iconStyle={styles.iconRight}
          />
        }
        />

        <View style={styles.textView}>
          <Text>Your email</Text>
        </View>
        <Input
          containerStyle={styles.inputForm}
          placeholder="Type your email"
          rightIcon={
          <Icon

            name="email"
            iconStyle={styles.iconRight}
          />
        }
        />

        <View style={styles.textView}>
          <Text>Your phone number</Text>
        </View>
        <Input
          containerStyle={styles.inputForm}
          placeholder="Type your phone"
          keyboardType="number-pad"
          rightIcon={
          <Icon

            name="phone"
            iconStyle={styles.iconRight}
          />
        }
        />

        <Button
          containerStyle={styles.button}
          iconRight
          onPress={()=>navigation.navigate('SecurityRegister')}
          icon={
            <Icon
              name="chevron-right"
              size={25}
              color="white"
              iconStyle={{marginLeft:5}}
            />
          }
          title="Next"
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
