import * as React from 'react';
import { Text, TextInput, View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, ListItem,  Button, Input} from 'react-native-elements';
import AuthContext from '../../Utils/AuthContext.js';

export default function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);
  const list = [
    {
      title: 'Profile',
      icon: 'person'
    },
    {
      title: 'Security',
      icon: 'lock'
    },
    {
      title: 'Contact us',
      icon: 'settings'
    },
    {
      title: 'Follow us on Instagram',
      icon: 'facebook'
    },
    {
      title: 'Settings',
      icon: 'av-timer'
    }
  ]

  return (
    <ScrollView>
      <View>
        <View style={styles.containerAvatar}>
              <Avatar
                rounded
                size="large"
                showEditButton
                containerStyle={{marginTop:20, marginLeft:20}}
                rounded="true"
                //onEditPress={changeAvatar}
                //source={{uri:profileImage}}
              />
              <Text style={styles.name}>Felipe Calderon</Text>
              <Text style={styles.text}>CEO Freshclean</Text>
        </View>

        <View>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                bottomDivider
                chevron
              />
            ))
          }
        </View>

        <Button title="Sign out" buttonStyle={{backgroundColor:"#e53935"}} onPress={signOut}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerAvatar:{
    flex:1,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:250,
    backgroundColor:"#b3e5fc",
  },
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  name:{
    fontSize:20,
    marginTop:5,
    marginBottom:2,
  },
  text:{
    fontSize:12,
    marginTop:5,
    marginBottom:5,
  }
})
