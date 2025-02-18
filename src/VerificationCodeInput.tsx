import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  KeyboardTypeOptions,
  Platform,
} from 'react-native';

export interface VerificationCodeInputProps {
  length?: number;
  onComplete?: (code: string) => void;
  autoFocus?: boolean;
  error?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  textStyle?: TextStyle;
  errorColor?: string;
  borderColor?: string;
  activeBorderColor?: string;
  inputSize?: number;
  inputPadding?: number;
  keyboardType?: KeyboardTypeOptions;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  length = 6,
  onComplete,
  autoFocus = true,
  error = false,
  containerStyle,
  inputStyle,
  textStyle,
  errorColor = '#FF3B30',
  borderColor = '#E5E5E5',
  activeBorderColor = '#007AFF',
  inputSize = 45,
  inputPadding = 10,
  keyboardType = 'numeric',
}) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (text: string, index: number) => {
    // Handle paste or autofill
    if (text.length > 1) {
      const codeArray = text.split('').slice(0, length);
      setCode(codeArray.concat(Array(length - codeArray.length).fill('')));
      onComplete?.(codeArray.join(''));
      inputRefs.current[Math.min(codeArray.length, length - 1)]?.focus();
      return;
    }

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text !== '') {
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
      if (index === length - 1) {
        onComplete?.(newCode.join(''));
      }
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    const key = event.nativeEvent.key;
    if (key === 'Backspace' && index > 0 && code[index] === '') {
      inputRefs.current[index - 1]?.focus();
      const newCode = [...code];
      newCode[index - 1] = '';
      setCode(newCode);
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={[
              styles.input,
              {
                width: inputSize,
                height: inputSize,
                padding: inputPadding,
                borderColor:
                  error
                    ? errorColor
                    : focusedIndex === index
                    ? activeBorderColor
                    : borderColor,
              },
              inputStyle,
              textStyle,
            ]}
            maxLength={index === 0 ? length : 1}
            keyboardType={keyboardType}
            value={code[index]}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
            onFocus={() => handleFocus(index)}
            textContentType={Platform.OS === 'ios' ? 'oneTimeCode' : undefined}
            autoComplete={Platform.OS === 'android' ? 'sms-otp' : 'off'}
            importantForAutofill="yes"
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default VerificationCodeInput; 