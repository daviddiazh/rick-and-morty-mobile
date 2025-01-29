/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { StackNavigator } from './src/navigation/StackNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>

      <SafeAreaView />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}}>

        <StackNavigator />

        <StatusBar backgroundColor="#fff" />

      </SafeAreaView>

    </NavigationContainer>
  );
}

export default App;
