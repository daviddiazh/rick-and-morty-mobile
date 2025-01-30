import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '../../components/Icon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { useCharacters } from '../../context/characters/CharactersProvider';
import { Character } from '../../interfaces/character';

export const DetailScreen = ({ route }: { route?: { params: { id: string } } }) => {
  const { id } = route?.params || {};

  const { addFavorite, findById } = useCharacters();
  const [character, setCharacter] = useState<Character | null>(null);
  const navigator: NavigationProp<any, any> = useNavigation();

  const navigate = () => {
    navigator.navigate('CharactersScreen');
  };

  useEffect(() => {
    const resp = findById(id || '');
    setCharacter(resp);
  }, [id, findById]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigate} activeOpacity={0.7}>
        <Icon name="flecha-derecha" color="#8054C7" />
      </TouchableOpacity>

      <View style={styles.pictureContainer}>
        <Image
          source={{ uri: character?.image}}
          width={100}
          height={100}
          style={styles.picture}
        />
        <TouchableOpacity
          style={styles.favoriteIcon}
          onPress={() => addFavorite(character?.id || '')}
          activeOpacity={0.7}
        >
          <Icon
            name="corazon"
            size={17}
            color={character?.favorite ? '#53C629' : '#D1D5DB'}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{character?.name}</Text>

      <View style={styles.info}>
        <Text style={styles.label}>Specie</Text>
        <Text style={styles.value}>{character?.species}</Text>
      </View>

      <View style={{...styles.info, borderTopColor: '#c8c8c8', borderTopWidth: 0.3}}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{character?.status}</Text>
      </View>

      <View style={{...styles.info, borderTopColor: '#c8c8c8', borderTopWidth: 0.3}}>
        <Text style={styles.label}>Id</Text>
        <Text style={styles.value}>{character?.id}</Text>
      </View>
    </SafeAreaView>
  );
};
