import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// Import components: Alert for showing popup messages

const CreateAccount = ({ navigation }) => {
  // CreateAccount functional component

  return (
    <View style={styles.container}>
      {/* Main container */}
      
      <Text style={styles.title}>Create Account</Text>
      {/* Title text */}
      
      <TextInput
        placeholder="Email"
        placeholderTextColor="#555"
        style={styles.input}
        // Input field for email
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#555"
        style={styles.input}
        secureTextEntry
        // Password field hides text
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Success", "Account Created Successfully")}
        // On press, show success alert
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#ffb6c1', marginTop: 15 }]}
        onPress={() => navigation.goBack()}
        // Go back to previous screen
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccount;
// Export CreateAccount screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5', 
    // Light lavender background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff1493', 
    // Deep pink
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ff69b4',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff0f5',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff69b4', 
    // Hot pink button
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
