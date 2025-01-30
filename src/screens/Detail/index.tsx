/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '../../components/Icon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { useCharacters } from '../../context/characters/CharactersProvider';
import { Character } from '../../interfaces/character';
import { BottomSheet } from '../../components/BottomSheet';
import { scale } from 'react-native-size-matters';
import { useForm } from '../../hooks/useForm';

export const DetailScreen = ({ route }: { route?: { params: { id: string } } }) => {
  const { id } = route?.params || {};

  const { addFavorite, findById, addComment } = useCharacters();
  const [character, setCharacter] = useState<Character | null>(null);
  const navigator: NavigationProp<any, any> = useNavigation();

  const {comment, onChange, onReset} = useForm({
    comment: '',
  });

  const bottomSheetRef = useRef<any>(null);

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
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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

        <View style={{...styles.info, borderTopColor: '#c8c8c8', borderTopWidth: 0.3, paddingTop: scale(22)}}>
          <Text style={{...styles.subtitle, paddingBottom: scale(15)}}>Comments: {character?.comments?.length}</Text>

          {
            character?.comments?.map((c, i) => (
              <Text
                key={c + i}
                style={{...styles.value, paddingVertical: scale(8)}}
              >{c}</Text>
            ))
          }
        </View>

      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={() => bottomSheetRef.current.expand()}
      >
        <Text style={styles.textBtn}>Add comment</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapTo={'35%'}
        backgroundColor={'white'}
        backDropColor={'black'}
      >
        <Text style={{...styles.title, paddingBottom: scale(10)}}>Comment this character</Text>

        <View style={styles.textInput}>
          <TextInput
            value={comment}
            onChangeText={value => onChange(value, 'comment')}
            placeholder="Add comment"
            style={{width: '85%'}}
            placeholderTextColor="#6B7280"
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{...styles.btn, marginTop: -scale(7)}}
          onPress={() => {
            addComment(comment, character?.id!);
            bottomSheetRef.current.close();
            onReset('comment');
          }}
        >
          <Text style={styles.textBtn}>Send</Text>
        </TouchableOpacity>
      </BottomSheet>
    </SafeAreaView>
  );
};
