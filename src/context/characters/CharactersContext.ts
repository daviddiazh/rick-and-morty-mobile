import { createContext } from 'react';
import { Character } from '../../interfaces/character';

interface CharactersContextProps {
    characters: Character[];

    addFavorite: (id: string) => void;
    filterCharacters: (n: number) => void;
    filterSpecies: (n: number) => void;
}

export const CharacterContext = createContext<CharactersContextProps>({} as CharactersContextProps);
