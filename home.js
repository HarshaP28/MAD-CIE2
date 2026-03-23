import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// Import React Native components

const HomeScreen = ({ navigation }) => {
  // HomeScreen functional component
  // navigation allows moving to other screens

  return (
    <View style={styles.container}>
      {/* Main container */}
      
      <Text style={styles.title}>Design System</Text>
      {/* Title of the screen */}

      <TextInput
        placeholder="Get Started"
        placeholderTextColor="#555"
        style={styles.input}
        // Input field for user input
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateAccount')}
        // Navigate to CreateAccount screen
      >
        <Text style={styles.buttonText}>Create Account</Text>
        {/* Button text */}
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
// Export HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1', // soft pink
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff1493', // deep pink
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ff69b4', // pink border
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff0f5', // lavender blush
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff69b4', // hot pink
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
