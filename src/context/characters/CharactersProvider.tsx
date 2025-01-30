/* eslint-disable react-hooks/exhaustive-deps */
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
    const [DB, setDB] = useState<Character[]>([]);

    const getCharacters = async () => {
        const {
          data: {characters: ch},
        } = await apolloClient.query({
          query: CHARACTERS,
        });

        const newCharacters = ch?.results?.map((c: Character) => ({ ...c, favorite: false, comments: [] }));

        setCharacters(newCharacters);
        setDB(newCharacters);
    };

    const addFavorite = (id: string) => {
        setCharacters(prevCharacters =>
            prevCharacters.map((ch: Character) =>
                ch.id === id ? { ...ch, favorite: !ch.favorite } : ch
            )
        );
        setDB(prevDB =>
            prevDB.map((ch: Character) =>
                ch.id === id ? { ...ch, favorite: !ch.favorite } : ch
            )
        );
    };

    const findById = (id: string) => {
        return characters.find(c => c.id === id);
    };

    const addComment = (comment: string, id: string) => {
        setCharacters(prevCharacters =>
            prevCharacters.map((ch: Character) =>
                ch.id === id ? { ...ch, comments: [...ch?.comments, comment] } : ch
            )
        );
        setDB(prevDB =>
            prevDB.map((ch: Character) =>
                ch.id === id ? { ...ch, comments: [...ch?.comments, comment] } : ch
            )
        );
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <CharacterContext.Provider
            value={{
                characters,
                DB,

                setCharacters,
                findById,
                addFavorite,
                addComment,
            }}
        >
            { children }
        </CharacterContext.Provider>
    );
};

export const useCharacters = () => useContext(CharacterContext);
