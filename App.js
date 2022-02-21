/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, useColorScheme} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Login} from './App/Screens/Login/LoginIndex';
import {HomeScreen} from './App/Screens/HomeScreen/HomeScreen';
import {enableScreens} from 'react-native-screens';

import {ResponsiblePerson} from './App/Screens/ResponsiblePerson/ResponsiblePerson';
import './assets/i18n';
import {Chat} from './App/Screens/Chat/ChatView';
import {Profile} from './App/Screens/Profile/Profile';
enableScreens();
const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [user, setUser] = useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
          navigationOptions={{
            cardStyle: {backgroundColor: Colors.backgroundColor},
          }}
          initialRouteName={user ? 'HomeScreen' : 'Login'}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen
            name="ResponsiblePerson"
            component={ResponsiblePerson}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
