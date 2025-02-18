import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { VerificationCodeInput } from './index';

export default function App() {
  const [error, setError] = useState(false);
  const [code, setCode] = useState('');

  const handleComplete = (value: string) => {
    setCode(value);
    setError(value !== '123456');
  };

  const handleReset = () => {
    setCode('');
    setError(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>Please enter the 6-digit code sent to you</Text>
      
      <VerificationCodeInput
        length={6}
        onComplete={handleComplete}
        error={error}
        errorColor="#FF3B30"
        borderColor="#E5E5E5"
        activeBorderColor="#007AFF"
        inputSize={45}
        inputPadding={10}
      />

      {error && (
        <Text style={styles.errorText}>
          Invalid code!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  errorText: {
    color: '#FF3B30',
    marginTop: 20,
  },
  resetButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
