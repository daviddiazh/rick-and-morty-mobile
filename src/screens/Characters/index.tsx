import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CHARACTERS } from '../../graphql/queries';
import { apolloClient } from '../../graphql/client';
import { ScrollView } from 'react-native-gesture-handler';

export const CharactersScreen = () => {
  const [characters, setCharacters] = useState<any>([]);
  const navigator: NavigationProp<any, any> = useNavigation();

  const press = () => {
    navigator.navigate('DetailScreen');
  };

  const fetch1 = async () => {
    const { data: { characters } } = await apolloClient.query({
        query: CHARACTERS,
    });

    setCharacters(characters);
  };

  useEffect(() => {
    fetch1();
  }, []);

  return (
    <SafeAreaView>
        <Text>Rick and Morty list</Text>
        <ScrollView>
            <Text>CHARACTERS: ({characters?.results?.length})</Text>
            {
                characters?.results?.map((c) => (
                    <View key={c?.id}>
                        <Image
                            source={{ uri: c?.image}}
                            width={50}
                            height={50}
                        />
                        <Text>{c?.name}</Text>
                    </View>
                ))
            }
        </ScrollView>
    </SafeAreaView>
  );
};
