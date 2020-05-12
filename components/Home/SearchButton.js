import * as React from 'react';
import { Input, Icon, Button, SocialIcon, Divider, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import { TextInput, View, ScrollView } from 'react-native';


export default function SearchButton(props) {

  const navigation = useNavigation();

  return(
    <View style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
      <Button
        containerStyle={{marginTop:15,marginBottom:15, width:"95%"}}
        buttonStyle={{backgroundColor:"#eeeeee", borderRadius:10}}
        iconLeft
        onPress={()=>navigation.navigate('Requests')}
        icon={
          <Icon
            name="search"
            size={25}
            color="black"
            iconStyle={{marginRight:5}}
          />
        }
        title="Hi Felipe, what do you need today?"
        titleStyle={{color:"gray"}}
      />
    </View>
  )
}
