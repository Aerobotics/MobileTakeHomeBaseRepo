import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './app/screens/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MapScreen} from './app/screens/map';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
