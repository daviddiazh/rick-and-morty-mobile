/* eslint-disable react/react-in-jsx-scope */
import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { CharacterContext } from './CharactersContext';
import { apolloClient } from '../../graphql/client';
import { CHARACTERS } from '../../graphql/queries';
import { Character } from '../../interfaces/character';

export const CharactersProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [characters, setCharacters] = useState<Character[]>(
        [],
    );

    const getCharacters = async () => {
        const {
          data: {characters: ch},
        } = await apolloClient.query({
          query: CHARACTERS,
        });
        setCharacters(
           ch?.results?.map((c: Character) => ({...c, favorite: false})),
        );
    };

    const addFavorite = (id: string) => {
        setCharacters(
            characters?.map((ch: Character) =>
                ch.id === id
                    ? {
                        ...ch,
                        favorite: ch.favorite ? false : true,
                    }
                    : ch,
            ),
        );
    };

    const findById = (id: string) => {
        return characters.find(c => c.id === id);
    };

    const filterCharacters = () => {};
    const filterSpecies = () => {};

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <CharacterContext.Provider
            value={{
                characters,

                findById,
                addFavorite,
                filterCharacters,
                filterSpecies,
            }}
        >
            { children }
        </CharacterContext.Provider>
    );
};

export const useCharacters = () => useContext(CharacterContext);
