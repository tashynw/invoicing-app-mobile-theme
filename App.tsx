/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {config} from '@gluestack-ui/config';
import {Box, GluestackUIProvider, ScrollView} from '@gluestack-ui/themed';
import React from 'react';
import {Dimensions, SafeAreaView, StatusBar} from 'react-native';
import HomePage from './pages/Home';
import BottomNavigationBar from './components/BottomNavigationBar';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CreatePage from './pages/Create';

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={Colors.lighter}>
        <StatusBar barStyle="light-content" />
        {/*body*/}
        <ScrollView w="100%">
          <Box
            w="100%"
            alignItems="flex-start"
            bg="white"
            minHeight={Dimensions.get('window').height}
            p={20}>
            <CreatePage />
          </Box>
        </ScrollView>
        <BottomNavigationBar />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

export default App;
