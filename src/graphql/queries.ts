import { gql } from '@apollo/client';

export const CHARACTERS = gql`
    query {
        characters(page: 1) {
            results {
                id,
                name,
                image,
            }
        }
    }
`;
