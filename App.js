import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FoodForm from './src/foodForm';
import FoodList from './src/foodList';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppStack = () =>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="FoodForm"
        component={FoodForm}
        options={{
          title: 'Dessert Dash',
          headerTintColor: 'deeppink',
          headerStyle: {
            backgroundColor: 'beige'
          }
        }}
      />
      <Stack.Screen
        name="FoodList"
        component={FoodList}
        options={{
          headerTintColor: 'deeppink',
          headerStyle: {
            backgroundColor: 'black'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>