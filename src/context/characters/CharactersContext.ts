import { createContext } from 'react';
import { Character } from '../../interfaces/character';

interface CharactersContextProps {
    characters: Character[];
    DB: Character[];

    setCharacters: (newValue: Character[]) => Character | any;
    findById: (id: string) => Character | any;
    addFavorite: (id: string) => void;
    addComment: (comment: string, id: string) => void;
}

export const CharacterContext = createContext<CharactersContextProps>({} as CharactersContextProps);
