/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import { CharactersScreen } from '../screens/Characters';
import { DetailScreen } from '../screens/Detail';

export type RootStackParams = {
    CharactersScreen: undefined,
    DetailScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName="CharactersScreen"
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <Stack.Screen name="CharactersScreen" component={ CharactersScreen } />
            <Stack.Screen name="DetailScreen" component={ DetailScreen } />
        </Stack.Navigator>
    );
};
