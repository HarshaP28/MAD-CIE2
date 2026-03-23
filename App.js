import React from 'react';
// Import React for JSX and components

import { NavigationContainer } from '@react-navigation/native';
// NavigationContainer manages app navigation

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Function to create a stack navigator (for moving between screens)

import HomeScreen from './home';
// Import Home screen component

import CreateAccount from './account';
// Import CreateAccount screen component

const Stack = createNativeStackNavigator();
// Create a stack navigator object

export default function App() {
  // Main App component
  return (
    <NavigationContainer>
      {/* Wrap navigation screens */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Stack navigator without top header */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Home screen */}
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        {/* CreateAccount screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
