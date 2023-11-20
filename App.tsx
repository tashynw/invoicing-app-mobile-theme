/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import React from 'react';
import {StatusBar} from 'react-native';
import HomePage from './pages/Home';
import CreatePage from './pages/Create';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigationBar from './components/BottomNavigationBar';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Create" component={CreatePage} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <BottomNavigationBar /> */}
    </GluestackUIProvider>
  );
}

export default App;
