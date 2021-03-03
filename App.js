import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ColorDetails from './screens/ColorDetails';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="ColorDetails"
        component={ColorDetails}
        options={({ route }) => ({ title: route.params.colorName })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
