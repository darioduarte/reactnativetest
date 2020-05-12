import React ,{useState} from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import SplashScreen from '../SplashScreen/SplashScreen.js';
import SignInScreen from '../SignIn/SignInScreen.js';
import ForgotPassword from '../SignIn/ForgotPassword.js';
import Home from '../Home/Home.js';
import CategoriesFeed from '../Home/CategoriesFeed.js';
import ProfileCustomer from '../Home/ProfileCustomer.js';
import Messages from '../Messages/Messages.js';
import Profile from '../Profile/Profile.js';
import ProfileRegister from '../SignUp/ProfileRegister.js';
import SecurityRegister from '../SignUp/SecurityRegister.js';
import AuthContext from '../../Utils/AuthContext.js';

import Favor from '../Favor/Favor.js';
import Request from '../Favor/Request.js';
import SigInUser from '../Favor/SigInUser.js';
import ConfirmSMS from '../Favor/ConfirmSMS.js';
import StandbyScreen from '../Favor/StandbyScreen.js';
import Chat from '../Favor/Chat.js';
import Sale from '../Favor/Sale.js';
import LoginDelivery from '../Favor/LoginDelivery.js';
import DeliveryHome from '../Favor/DeliveryHome.js';


function HomeStack() {
  return(
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="CategoriesFeed" component={CategoriesFeed} options={{headerShown:true, title:'Search'}}/>
      <Stack.Screen name="ProfileCustomer" component={ProfileCustomer} options={{headerShown:true, title:''}}/>
    </Stack.Navigator>
  )
}


function RegisterStack() {
  return(
    <Stack.Navigator >
      <Stack.Screen name="SignUp" component={ProfileRegister} options={{headerShown:false}}/>
      <Stack.Screen name="SecurityRegister" component={SecurityRegister} options={{headerShown:false}}/>
      <Stack.Screen name="SecurityRegister" component={SecurityRegister} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

function ProfileStack() {
  return(
    <Stack.Navigator >
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

function FavorStack() {
  return(
    <Stack.Navigator >
      <Stack.Screen name="Favor" component={Favor} options={{headerShown:false}} />
      <Stack.Screen name="Request" component={Request} options={{headerShown:true}} />
      <Stack.Screen name="SigInUser" component={SigInUser} options={{headerShown:true}} />
      <Stack.Screen name="ConfirmSMS" component={ConfirmSMS} options={{headerShown:true}} />
      <Stack.Screen name="StandbyScreen" component={StandbyScreen} options={{headerShown:true}} />
      <Stack.Screen name="Chat" component={Chat} options={{headerShown:false}} />
      <Stack.Screen name="Sale" component={Sale} options={{headerShown:true}} />
      <Stack.Screen name="LoginDelivery" component={LoginDelivery} options={{headerShown:true}} />
      <Stack.Screen name="DeliveryHome" component={DeliveryHome} options={{headerShown:true}} />
    </Stack.Navigator>
  )
}

function MessagesStack() {
  return(
    <Stack.Navigator >
      <Stack.Screen name="Messages" component={Messages} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

function tabStack() {
  return (
     <Tab.Navigator >
       <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          )
        }}
        />
       <Tab.Screen name="Requests" component={FavorStack}
         options={{
         tabBarLabel: 'Favor',
         tabBarIcon: ({ color, size }) => (
           <Icon name="send" color={color} size={size} />
             )
           }}
        />
       <Tab.Screen name="Messages" component={MessagesStack}
       options={{
       tabBarLabel: 'Messages',
       tabBarIcon: ({ color, size }) => (
         <Icon name="message" color={color} size={size} />
           )
         }}
        />
       <Tab.Screen name="Profile" component={ProfileStack}
       options={{
       tabBarLabel: 'Profile',
       tabBarIcon: ({ color, size }) => (
         <Icon name="person" color={color} size={size} />
           )
         }}
        />
     </Tab.Navigator>
 );
}

function userTabStack() {
  return (
     <Tab.Navigator >
       <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          )
        }}
        />
       <Tab.Screen name="Requests" component={FavorStack}
         options={{
         tabBarLabel: 'Favor',
         tabBarIcon: ({ color, size }) => (
           <Icon name="send" color={color} size={size} />
             )
           }}
        />
       <Tab.Screen name="Messages" component={MessagesStack}
       options={{
       tabBarLabel: 'History',
       tabBarIcon: ({ color, size }) => (
         <Icon name="message" color={color} size={size} />
           )
         }}
        />
       <Tab.Screen name="Profile" component={ProfileStack}
       options={{
       tabBarLabel: 'Profile',
       tabBarIcon: ({ color, size }) => (
         <Icon name="person" color={color} size={size} />
           )
         }}
        />
     </Tab.Navigator>
 );
}


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            alert: console.log(action.token, "restore in store")
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            alert: console.log(action.token, "data in store")
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            alert: console.log(action.token, "remove data in store")
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
      () => ({
          signIn: async data => {
              // In a production app, we need to send some data (usually username, password) to server and get a token
              // We will also need to handle errors if sign in failed
              // After getting token, we need to persist the token using `AsyncStorage`
              // In the example, we'll use a dummy token
              try {
                  let obj = data
                  if (obj.username === "" || obj.password === "") {
                      alert("please insert complete data")
                  } else {
                      const storage = await AsyncStorage.setItem('userToken', JSON.stringify(obj));
                      console.log(obj, "save data")
                      dispatch({ type: 'SIGN_IN', token: obj });
                  }
              } catch (e) {
                  console.log(e);
              }

          },
          signOut: async data => {

              try {
                  let user = await AsyncStorage.removeItem('userToken');
                  let userToken = await AsyncStorage.getItem('userToken');
                  console.log(userToken, "signOut");
              } catch (e) {
                  alert(e)
              }
              dispatch({ type: 'SIGN_OUT' })
          },
          signUp: async data => {
              // In a production app, we need to send user data to server and get a token
              // We will also need to handle errors if sign up failed
              // After getting token, we need to persist the token using `AsyncStorage`
              // In the example, we'll use a dummy token
              dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
      }), []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <>
              <Stack.Screen name = "Login"
              component = { SignInScreen }
              options = {{
                         title: 'Sign in',
                         animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                         headerShown:false
                        }}
              />
              <Stack.Screen name="RegisterStack" component = { RegisterStack } options = {{title: 'Sign up'}} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:true}}/>
            </>
          ) : (
            // User is signed in
            <Stack.Screen name="tabStack" component={tabStack} options={{headerShown:false}} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
