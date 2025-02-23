# React Native Verification Code Input

A highly customizable verification code input component for React Native and Expo applications. Perfect for OTP (One-Time Password), authentication codes, and verification processes. By default, it accepts only numeric input, making it ideal for PIN codes and OTP verification. Supports SMS auto-fill on both iOS and Android platforms.

## Now you can buy me coffee
<a href="https://www.buymeacoffee.com/umityasarturk" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## 📱 Demo
### iOS Demo
![iOS Demo](https://github.com/user-attachments/assets/f7134b8f-fd21-46c3-8bea-b7580e2491a5)
### Android Demo
![Android Demo](https://github.com/user-attachments/assets37fbc293-eb60-40b1-81a5-16db6c87f92f)
## ✨ Features

- 🎨 Fully customizable appearance
  - Custom input box sizes and padding
  - Customizable border colors for different states
  - Flexible text styling
  - Error state handling with custom colors
- 📱 Smart input handling
  - SMS auto-fill support for iOS and Android
  - Paste support for verification codes
  - Numeric input by default (customizable)
  - Automatic focus on the first input
  - Seamless navigation between inputs
  - Backspace support for easy editing
  - Keyboard type customization
- 🔢 Flexible configuration
  - Customizable number of input boxes
  - Support for different input lengths
  - Container and input level styling
- 🎯 Developer friendly
  - Written in TypeScript
  - Full type definitions
  - Compatible with Expo and React Native CLI
  - Minimal dependencies
- ⚡️ Performance optimized
  - Efficient re-rendering
  - Minimal memory footprint

## 📦 Installation

```bash
# Using npm
npm install react-native-verification-code-input
```

```bash
# Using yarn
yarn add react-native-verification-code-input
```

```bash
# Using pnpm
pnpm add react-native-verification-code-input
```

## 🚀 Quick Start

[IOS] https://github.com/user-attachments/assets/f7134b8f-fd21-46c3-8bea-b7580e2491a5
[ANDROID] https://github.com/user-attachments/assets37fbc293-eb60-40b1-81a5-16db6c87f92f

```jsx
import { VerificationCodeInput } from 'react-native-verification-code-input';

const VerificationScreen = () => {
  const handleComplete = (code) => {
    console.log('Entered code:', code);
    // Validate the code here
  };

  return (
    <VerificationCodeInput
      length={6}
      onComplete={handleComplete}
      error={false}
      errorColor="#FF3B30"
      borderColor="#E5E5E5"
      activeBorderColor="#007AFF"
      inputSize={45}
      inputPadding={10}
    />
  );
};
```

## 📱 SMS Auto-fill Support

The component automatically supports SMS auto-fill functionality:

- **iOS**: Uses `textContentType="oneTimeCode"` for automatic SMS code detection
- **Android**: Uses `autoComplete="sms-otp"` for SMS auto-fill support
- **Paste Support**: Users can paste the entire code, and it will be automatically distributed across the inputs

No additional configuration is needed - it works out of the box!

## 🛠 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `length` | number | 6 | Number of input boxes |
| `onComplete` | function | - | Callback when all digits are entered |
| `autoFocus` | boolean | true | Auto focus first input on mount |
| `error` | boolean | false | Show error state |
| `containerStyle` | ViewStyle | - | Style for the container |
| `inputStyle` | ViewStyle | - | Style for each input box |
| `textStyle` | TextStyle | - | Style for the input text |
| `errorColor` | string | '#FF3B30' | Color for error state |
| `borderColor` | string | '#E5E5E5' | Default border color |
| `activeBorderColor` | string | '#007AFF' | Border color when focused |
| `inputSize` | number | 45 | Size of each input box |
| `inputPadding` | number | 10 | Padding inside input boxes |
| `keyboardType` | KeyboardTypeOptions | 'numeric' | Keyboard type for input ('numeric', 'default', etc.) |

## 🎨 Styling Examples

### Custom Theme
```jsx
<VerificationCodeInput
  length={4}
  inputSize={50}
  containerStyle={{
    gap: 15,
  }}
  inputStyle={{
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  }}
  textStyle={{
    fontSize: 24,
    fontWeight: 'bold',
  }}
  borderColor="#DDD"
  activeBorderColor="#4CAF50"
  errorColor="#F44336"
/>
```

### Dark Theme
```jsx
<VerificationCodeInput
  length={6}
  containerStyle={{
    backgroundColor: '#1A1A1A',
  }}
  inputStyle={{
    backgroundColor: '#2D2D2D',
    borderRadius: 8,
  }}
  textStyle={{
    color: '#FFFFFF',
  }}
  borderColor="#3D3D3D"
  activeBorderColor="#BB86FC"
  errorColor="#CF6679"
/>
```

## 📱 Platform Support

- iOS
- Android
- Expo

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/umit-turk/react-native-verification-code-input/issues).

## 📝 License

This project is [MIT](./LICENSE) licensed.
## 📦 Repository
You can find the source code on [GitHub](https://github.com/umit-turk/react-native-verification-code-input).
