import React from 'react';
import { ViewStyle, TextStyle, KeyboardTypeOptions } from 'react-native';
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
declare const VerificationCodeInput: React.FC<VerificationCodeInputProps>;
export default VerificationCodeInput;
