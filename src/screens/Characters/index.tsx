import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CHARACTERS } from '../../graphql/queries';
import { apolloClient } from '../../graphql/client';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';

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
    console.log({characters})
    setCharacters(characters);
  };

  useEffect(() => {
    fetch1();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Rick and Morty list</Text>
        <ScrollView>
            <Text style={styles.subtitle}>CHARACTERS: ({characters?.results?.length})</Text>
            {
                characters?.results?.map((c) => (
                    <View key={c?.id} style={styles.card}>
                        <Image
                            source={{ uri: c?.image}}
                            width={50}
                            height={50}
                            style={styles.picture}
                        />
                        <View style={styles.info}>
                            <Text>{c?.name}</Text>
                            <Text>{c?.species}</Text>
                        </View>
                    </View>
                ))
            }
        </ScrollView>
    </SafeAreaView>
  );
};
