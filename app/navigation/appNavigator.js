import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import CreateProfileScreen from '../screens/createProfileScreen';
import Tabs from '../components/tabs';
import Login from '../screens/loginScreen';
import Signup from '../screens/signupScreen';
import ResetPassword from '../screens/resetPasswordScreen';
import EditProfile from '../screens/editProfileScreen';
import ChangePassword from '../screens/changePasswordScreen';
import previewPostScreen from '../screens/previewPostScreen';
import detailedPostScreen from '../screens/detailedPostScreen';
const Stack = createStackNavigator();

const Navigator = ({loggedIn}) => {
  if (loggedIn) {
    return (
      <NavigationContainer
        screenOptions={{gestureEnabled: false}}
        initialRouteName="Welcome"
      >

        <Stack.Navigator screenOptions={{gestureEnabled: false}}>
          <Stack.Screen
            name="Tabs"
            children={Tabs}
            options={{
              title: 'Tabs',
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Icon name="md-book" size={25} focused={focused} />
              )
            }}
          />

          <Stack.Screen
            name="Welcome"
            component={Login}
            options={{
              title: 'Welcome to Baku',
              headerShown: false
            }}
          />

          <Stack.Screen
            name="Create"
            component={Signup}
            options={{
              title: 'Create Profile Screen'
            }}
          />
          <Stack.Screen
            name="Reset"
            component={ResetPassword}
            options={{
              title: 'Reset Password Screen'
            }}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{
              title: 'Change Password Screen'
            }}
          />
          <Stack.Screen
            name="Preview Post Screen"
            component={previewPostScreen}
            options={{
              title: 'Preview Post Screen',
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="Post Detailed View"
            component={detailedPostScreen}
            options={{
              title: 'Detailed Post Screen',
              // headerShown: false
            }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer initialRouteName="Welcome">
        <Stack.Navigator
          screenOptions={{gestureEnabled: false}}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Welcome to Baku',
              headerShown: false
            }}
          />

          <Stack.Screen
            name="Create"
            component={Signup}
            options={{
              title: 'Create Account'
            }}
          />

          <Stack.Screen
            name="Additional Info"
            component={CreateProfileScreen}
            options={{
              title: 'Create Profile',
              headerShown: false
            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              title: 'Edit Profile'
            }}
          />
          <Stack.Screen
            name="Tabs"
            children={Tabs}
            options={{
              title: 'Tabs',
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Icon name="md-book" size={25} focused={focused} />
              )
            }}
          />
          <Stack.Screen
            name="Reset"
            component={ResetPassword}
            options={{
              title: 'Reset Password Screen'
            }}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{
              title: 'Change Password Screen'
            }}
          />
          <Stack.Screen
            name="Preview Post Screen"
            component={previewPostScreen}
            options={{
              title: 'Preview Post Screen',
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="Post Detailed View"
            component={detailedPostScreen}
            options={{
              title: 'Detailed Post Screen',
              // headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Navigator;

