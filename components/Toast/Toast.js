import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableHighlight
} from 'react-native'

const context = React.createContext('hola');

class Toast extends Component {
  constructor (props) {
    super (props)
    this.state = {
      animatedValue : new Animated.Value(-70),
      message:this.props.message
    }
   }


  callToast() {
      Animated.timing(
        this.state.animatedValue,
        {
          toValue: 5,
          duration: 350
        }).start(this.closeToast())
    }

  closeToast() {
    setTimeout(() => {
      Animated.timing(
      this.state.animatedValue,
      {
        toValue: -70,
        duration: 350
      }).start()
    }, 2000)
  }

  render() {
    return (
      <View>
        <Animated.View
          style={{ transform: [{ translateY: this.state.animatedValue }],
           height: 70,
            backgroundColor: 'green',
             position: 'absolute',
             left:0,
             top:0,
             right:0,
            justifyContent:  'center'
           }}>
          <Text style={{ marginLeft: 10,  color: 'white',  fontSize:16, fontWeight: 'bold' }}>
            {this.state.message}
          </Text>
        </Animated.View>
      </View>
    )
  }

  componentDidMount(){
    console.log(this.props, "prop");
    this.callToast()
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  buttonContainer: {
    marginTop:10
  }
});



export default Toast;
