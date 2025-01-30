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
  LogBox,
  StatusBar,
} from 'react-native';
import { StackNavigator } from './src/navigation/StackNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './src/graphql/client';
import { CharactersProvider } from './src/context/characters/CharactersProvider';

function App(): React.JSX.Element {

  LogBox.ignoreAllLogs();

  return (
    <ApolloProvider client={ apolloClient }>
      <CharactersProvider>
        <NavigationContainer>
          <SafeAreaView />
          <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}}>
            <StackNavigator />
            <StatusBar backgroundColor="#fff" />
          </SafeAreaView>
        </NavigationContainer>
      </CharactersProvider>
    </ApolloProvider>
  );
}

export default App;
