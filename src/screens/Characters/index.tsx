/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';
import {Character} from '../../interfaces/character';
import {Icon} from '../../components/Icon';
import {useForm} from '../../hooks/useForm';
import {BottomSheet} from '../../components/BottomSheet/';
import { useCharacters } from '../../context/characters/CharactersProvider';
import { CharacterCard } from '../../components/Character';

export const CharactersScreen = () => {
  const [charactersFilter, setCharactersFilter] = useState<number>(0);
  const [specieFilter, setSpecieFilter] = useState<number>(0);

  const { characters } = useCharacters();
  const [starredCharacters, setStarredCharacters] = useState<Character[]>(
    [],
  );

  const bottomSheetRef = useRef<any>(null);

  const filterDisabled = charactersFilter === 0 && specieFilter === 0;

  const {input, onChange} = useForm({
    input: '',
  });

  useEffect(() => {
    setStarredCharacters(characters.filter(c => c.favorite));
  }, [characters]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Rick and Morty list</Text>

        <View style={styles.textInput}>
          <View style={styles.input}>
            <Icon name="buscar" size={14} color="#9CA3AF" />
            <TextInput
              value={input}
              onChangeText={value => onChange(value, 'input')}
              placeholder="Search or filter results"
              style={{width: '85%'}}
              placeholderTextColor="#6B7280"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => bottomSheetRef.current?.expand()}>
            <Icon name="sliders-02" size={17} color="#8054C7" />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>STARRED CHARACTERS: {starredCharacters?.length}</Text>
        {
          starredCharacters
            ?.filter((c: Character) => c?.name.includes(input))
            ?.map((c: Character) => (
              <CharacterCard ch={c} />
            ))
        }

        <Text style={styles.subtitle}>CHARACTERS: {characters?.length}</Text>
        {characters?.length > 0 ? (
          characters
            ?.filter((c: Character) => c?.name.includes(input))
            ?.map((c: Character) => (
              <CharacterCard ch={c} />
            ))
        ) : (
          <ActivityIndicator size="small" color="#8054C7" />
        )}
      </ScrollView>

      <BottomSheet
        ref={bottomSheetRef}
        snapTo={'85%'}
        backgroundColor={'white'}
        backDropColor={'black'}>
        <View style={{flex: 1}}>
          <Text style={styles.label}>Characters</Text>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={
                charactersFilter === 0 ? styles.btnActive : styles.btnInactive
              }
              activeOpacity={0.7}
              onPress={() => setCharactersFilter(0)}>
              <Text
                style={
                  charactersFilter === 0
                    ? styles.textBtnActive
                    : styles.textBtnInactive
                }>
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                charactersFilter === 1 ? styles.btnActive : styles.btnInactive
              }
              activeOpacity={0.7}
              onPress={() => setCharactersFilter(1)}>
              <Text
                style={
                  charactersFilter === 1
                    ? styles.textBtnActive
                    : styles.textBtnInactive
                }>
                Starred
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                charactersFilter === 2 ? styles.btnActive : styles.btnInactive
              }
              activeOpacity={0.7}
              onPress={() => setCharactersFilter(2)}>
              <Text
                style={
                  charactersFilter === 2
                    ? styles.textBtnActive
                    : styles.textBtnInactive
                }>
                Others
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Species</Text>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={specieFilter === 0 ? styles.btnActive : styles.btnInactive}
              activeOpacity={0.7}
              onPress={() => setSpecieFilter(0)}>
              <Text
                style={
                  specieFilter === 0
                    ? styles.textBtnActive
                    : styles.textBtnInactive
                }>
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={specieFilter === 1 ? styles.btnActive : styles.btnInactive}
              activeOpacity={0.7}
              onPress={() => setSpecieFilter(1)}>
              <Text
                style={
                  specieFilter === 1
                    ? styles.textBtnActive
                    : styles.textBtnInactive
                }>
                Human
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={specieFilter === 2 ? styles.btnActive : styles.btnInactive}
              activeOpacity={0.7}
              onPress={() => setSpecieFilter(2)}>
              <Text
                style={
                  specieFilter === 2
                    ? styles.textBtnActive
                    : styles.textBtnInactive
                }>
                Alien
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={
            filterDisabled ? styles.btnFilterInactive : styles.btnFilterActive
          }
          disabled={filterDisabled}>
          <Text
            style={
              filterDisabled
                ? styles.textBtnFilterInactive
                : styles.textBtnFilterActive
            }>
            Filter
          </Text>
        </TouchableOpacity>
      </BottomSheet>
    </SafeAreaView>
  );
};
