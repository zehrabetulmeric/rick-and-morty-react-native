import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import EpisodeScreen from './screens/EpisodeScreen';
import EpisodeDetail from './screens/EpisodeDetail';
import CharacterDetail from './screens/CharacterDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EpisodeScreen" component={EpisodeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EpisodeDetail" component={EpisodeDetail} options={{ headerShown: false }} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;