import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const [unitNumber, setUnitNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const validateInputs = () => {
    const phoneRegex = /^\d{10}$/;
    const unitRegex = /^\d{2}[A-Za-z]{2}$/;

    if (!unitNumber || !phoneNumber || !password) {
      Alert.alert('Validation Error', 'All fields must be filled.');
      return false;
    }

    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert(
        'Validation Error',
        'Phone number must be exactly 10 digits.',
      );
      return false;
    }

    if (!unitRegex.test(unitNumber)) {
      Alert.alert('Validation Error', 'Unit number must be in format: 12AB');
      return false;
    }

    return true;
  };

  const handleLogin = () => {
    if (!validateInputs()) return;
    console.log(
      'Login Data:',
      JSON.stringify({unitNumber, phoneNumber, password}, null, 2),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your Unit Number (e.g., 32CL)"
          placeholderTextColor="#666"
          value={unitNumber}
          onChangeText={setUnitNumber}
          maxLength={4}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your Phone Number"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={10}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Bulletin Button - Now Visible */}
        <TouchableOpacity
          style={styles.bulletinButton}
          onPress={() => navigation.navigate('Bulletin')}>
          <Text style={styles.bulletinText}>📢 Check Bulletin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center', // Centers content
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    color: '#000',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bulletinButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FF6F61', // Eye-catching color
    width: '100%',
    alignItems: 'center',
  },
  bulletinText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
