import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ColorDetails from './screens/ColorDetails';
import AddNewPalette from './screens/AddNewPalette';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen
      name="ColorPalette"
      component={ColorPalette}
      options={({ route }) => ({ title: route.params.name })}
    />
    <MainStack.Screen
      name="ColorDetails"
      component={ColorDetails}
      options={({ route }) => ({ title: route.params.colorName })}
    />
  </MainStack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="AddNewPalette"
        component={AddNewPalette}
        options={{ title: 'Add New Palette' }}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
