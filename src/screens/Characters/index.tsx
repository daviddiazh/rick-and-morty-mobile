/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import { CHARACTERS } from '../../graphql/queries';
import { apolloClient } from '../../graphql/client';
import { styles } from './styles';
import { Character } from '../../interfaces/character';
import { Icon } from '../../components/Icon';
import { useForm } from '../../hooks/useForm';
import { BottomSheet } from '../../components/BottomSheet/';

export const CharactersScreen = () => {
  const [characters, setCharacters] = useState<{results: Character[]} | any>([]);
  const navigator: NavigationProp<any, any> = useNavigation();

  const bottomSheetRef = useRef<any>(null);

  const { input, onChange } = useForm({
    input: '',
  });

  const navigate = (character: Character) => {
    navigator.navigate('DetailScreen', { character });
  };

  const getCharacters = async () => {
    const { data: { characters } } = await apolloClient.query({
      query: CHARACTERS,
    });
    setCharacters(characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Rick and Morty list</Text>

        <View style={styles.textInput}>
          <View style={styles.input}>
            <Icon name="buscar" size={14} color="#9CA3AF" />
            <TextInput
              value={input}
              onChangeText={ (value) => onChange(value, 'input') }
              placeholder="Search or filter results"
              style={{width: '85%'}}
              placeholderTextColor="#6B7280"
            />
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={() => bottomSheetRef.current?.expand()}>
            <Icon name="sliders-02" size={17} color="#8054C7" />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>CHARACTERS: {characters?.results?.length}</Text>
        {
          characters?.results?.length > 0 ? characters?.results?.filter((c: Character) => c?.name.includes(input))?.map((c: Character) => (
            <View key={c?.id} style={styles.card}>
              <View style={{ alignItems: 'center', flexDirection: 'row', gap: scale(15) }}>
                <TouchableOpacity onPress={() => navigate(c)} activeOpacity={0.7}>
                  <Image
                    source={{ uri: c?.image}}
                    width={50}
                    height={50}
                    style={styles.picture}
                  />
                </TouchableOpacity>
                <View style={styles.info}>
                  <Text onPress={() => navigate(c)}>{c?.name}</Text>
                  <Text>{c?.species}</Text>
                </View>
              </View>

              <Icon name="corazon" color="#D1D5DB" /> { /* Gray: #D1D5DB | Green: #53C629 */ }
            </View>
          )) : <ActivityIndicator size="small" color="#8054C7" />
        }
      </ScrollView>

      <BottomSheet
        ref={bottomSheetRef}
        snapTo={'83%'}
        backgroundColor={'white'}
        backDropColor={'black'}
      >
        <Text>Hola</Text>
      </BottomSheet>
    </SafeAreaView>
  );
};
