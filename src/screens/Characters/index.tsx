import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CharactersScreen = () => {

  const navigator: NavigationProp<any, any> = useNavigation();

  const press = () => {
    navigator.navigate('DetailScreen');
  }

  return (
    <SafeAreaView>
        <Text>CharactersScreen</Text>
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={ press }
        >
            <Text>Press me!</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};
