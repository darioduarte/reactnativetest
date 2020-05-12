import * as React from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';
import { Avatar, Button, Icon, Input, ButtonGroup } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

class Rank extends React.Component {
    constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render () {
    const buttons = ['0 - 20', '20 -100', '100 - 500', '> 500']
    const { selectedIndex } = this.state

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 50, marginTop:30}}
      />
    )
  }
}

export default function Favor() {

  const navigation = useNavigation();

  return(
    <ScrollView style={{flex:1, backgroundColor:"white"}}>
      <View style={{justifyContent:"flex-start",width:"100%",alignItems:"center", backgroundColor:"white"}}>
        <Text style={{width:"90%",fontSize:25, marginTop:20, textAlign:"left"}}>what do you need?</Text>
        <View style={{width:"90%", justifyContent:"flex-start"}}>
          <Text style={{width:"90%",fontSize:20, marginTop:20,marginLeft:15, textAlign:"left"}}>Write your Address</Text>
          <Input
            placeholder='Address.'
          />
          <Text style={{width:"90%",fontSize:20, marginTop:20,marginLeft:15, textAlign:"left"}}>Write your request</Text>
          <Input
            multiline
            numberOfLines={6}
            placeholder='You need to buy something at the supermarket or pharmacy, liquor,bring something or send something.'
          />
          <Text style={{width:"90%",fontSize:20, marginTop:20,marginLeft:15, textAlign:"left"}}>Select the approximate value of your request in USD.</Text>
          <Rank/>
          <Text style={{width:"90%",fontSize:12, marginTop:20,marginLeft:15, textAlign:"left"}}>The cost of the favor is calculated based on the time it takes to make your request with a minimum fee of 10 usd.</Text>
          <Button title="Continue" buttonStyle={{width:310, marginLeft:5, backgroundColor:"#00a680", justifyContent:"center",marginTop:10, marginBottom:10}} containerStyle={{marginTop:10}} onPress={()=>navigation.navigate('StandbyScreen')}/>
        </View>
      </View>
    </ScrollView>
  )
}
