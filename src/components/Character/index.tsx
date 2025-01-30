/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Character as CharacterInterface } from '../../interfaces/character';
import { styles } from './styles';
import { scale } from 'react-native-size-matters';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Icon } from '../Icon';
import { useCharacters } from '../../context/characters/CharactersProvider';

export const CharacterCard = ({ ch }: {ch: CharacterInterface}) => {
  const navigator: NavigationProp<any, any> = useNavigation();
  const { addFavorite } = useCharacters();

  const navigate = (id: string) => {
    navigator.navigate('DetailScreen', {id});
  };
  return (
    <View key={ch?.id} style={styles.card}>
        <View
            style={{
            alignItems: 'center',
            flexDirection: 'row',
            gap: scale(15),
            }}
        >
            <TouchableOpacity
            onPress={() => navigate(ch?.id)}
            activeOpacity={0.7}>
            <Image
                source={{uri: ch?.image}}
                width={50}
                height={50}
                style={styles.picture}
            />
            </TouchableOpacity>
            <View style={styles.info}>
            <Text onPress={() => navigate(ch?.id)}>{ch?.name}</Text>
            <Text onPress={() => navigate(ch?.id)}>{ch?.species}</Text>
            </View>
        </View>

        <TouchableOpacity
            onPress={() => addFavorite(ch?.id)}
        >
            <Icon
            name="corazon"
            color={ch?.favorite ? '#53C629' : '#D1D5DB'}
            />
        </TouchableOpacity>
    </View>
  );
};
